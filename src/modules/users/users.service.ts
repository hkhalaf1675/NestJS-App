import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../database/entities/user.entity';
import { Repository } from 'typeorm';
import { FailResponseDto } from '../../common/dto/failResponse.dto';
import { SuccessResponseDto } from '../../common/dto/successResponse.dto';
import { BcryptService } from '../../common/service/bcyrpt/bcrypt.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly bcryptService: BcryptService
  )
  {}

  async create(createUserDto: CreateUserDto) {
    const oldUsers = await this.userRepository.find({
      where: [
        {email: createUserDto.email},
        {userName: createUserDto.userName}
      ]
    });

    // select * from Users where email = * or userName = *

    if(oldUsers && oldUsers.length > 0){
      throw new BadRequestException(new FailResponseDto(
        'Valadtion Error!',
        [' The email or username is already exists']
      ));
    }
    
    createUserDto.password = await this.bcryptService.hash(createUserDto.password);

    await this.userRepository.save(createUserDto);
    return new SuccessResponseDto(
      'User has been added successfully',
      null
    );
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  findByQuery(query: any){
    return this.userRepository.findOne(query);
  }
}
