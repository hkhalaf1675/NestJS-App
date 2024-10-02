import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { Repository } from 'typeorm';
import { RegisterDto } from './dto/register.dto';
import { ResponseMessageDto } from 'src/common/dto/responseMessage.dto';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        private readonly jwtService: JwtService
    ){}

    async register(registerDto: RegisterDto): Promise<any>{
        const oldUser = await this.userRepository.find({
            where: [
                {email: registerDto.email},
                {userName: registerDto.userName}
            ]
        });
        
        if(oldUser.length > 0){
            throw new BadRequestException(new ResponseMessageDto('Validation Error!', ['There is an user exists with that email or user name'], false, null));
        }
        const newUser = await this.userRepository.save(registerDto);

        // create the access token using jwt
        const payload = {
            sub: newUser.id,
            username: newUser.userName
        };

        const token = await this.jwtService.signAsync(payload);

        return new ResponseMessageDto('User has been regsitered successfully', null, true, {token});
    }

    async login(loginDto: LoginDto): Promise<any>{
        const user = await this.userRepository.findOne({
            where: {
                email: loginDto.email
            }
        });

        if(!user){
            throw new UnauthorizedException(new ResponseMessageDto(
                'Authentication error',
                ['The email or password is not correct'],
                false,
                null
            ));
        }

        if(user.password === loginDto.password){
            const payload = {
                sub: user.id,
                username: user.userName
            };

            const token = await this.jwtService.signAsync(payload);
            return new ResponseMessageDto('User has been login successfully', null, true, {token});
        }
        else{
            throw new UnauthorizedException(new ResponseMessageDto(
                'Authentication error',
                ['The email or password is not correct'],
                false,
                null
            ));
        }
    }
}
