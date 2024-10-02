import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../database/entities/user.entity';
import { Repository } from 'typeorm';
import { FailResponseDto } from '../../common/dto/failResponse.dto';
import { JwtService } from '@nestjs/jwt';
import { SuccessResponseDto } from '../../common/dto/successResponse.dto';
import { BcryptService } from '../../common/service/bcyrpt/bcrypt.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly bcryptService: BcryptService,
    private readonly jwtService: JwtService
  )
  {}

  async login(loginDto: LoginDto) {
    const user = await this.userRepository.findOne({
      where: {
        email: loginDto.email
      }
    });

    if(!user || user === undefined || user === null){
      throw new UnauthorizedException(new FailResponseDto(
        'Authentication Error!',
        ['The email or password is not correct!']
      ));
    }

    const isMatch = await this.bcryptService.compare(loginDto.password, user.password);
    if(!isMatch || isMatch !== true){
      throw new UnauthorizedException(new FailResponseDto(
        'Authentication Error!',
        ['The email or password is not correct!']
      ));
    }

    // create token
    const payload = {
      id: user.id,
      userName: user.userName,
      email: user.email,
      fullName: user.fullName
    }

    const token = await this.jwtService.signAsync(payload);

    return new SuccessResponseDto(
      'Login successfully',
      { token }
    );
  }

  async register(registerDto: RegisterDto) {
    const oldUsers = await this.userRepository.find({
      where: [
        {email: registerDto.email},
        {userName: registerDto.userName}
      ]
    });

    // select * from Users where email = * or userName = *

    if(oldUsers && oldUsers.length > 0){
      throw new BadRequestException(new FailResponseDto(
        'Valadtion Error!',
        [' The email or username is already exists']
      ));
    }
    
    registerDto.password = await this.bcryptService.hash(registerDto.password);

    const user = await this.userRepository.save(registerDto);

    // create token
    const payload = {
      id: user.id,
      userName: user.userName,
      email: user.email,
      fullName: user.fullName
    }

    const token = await this.jwtService.signAsync(payload);

    return new SuccessResponseDto(
      'User has been registered successfully',
      { token }
    );
  }
}