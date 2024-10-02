import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from '../../database/entities/admin.entity';
import { Like, Repository } from 'typeorm';
import { FailResponseDto } from '../../common/dto/failResponse.dto';
import { SuccessResponseDto } from '../../common/dto/successResponse.dto';
import { BcryptService } from '../../common/service/bcyrpt/bcrypt.service';
import { Role } from '../../database/entities/role.entity';
import { PagnationResponseDto } from '../../common/dto/pagnationResponse.dto';

@Injectable()
export class AdminsService {
  constructor(
    @InjectRepository(Admin)
    private readonly adminRepository: Repository<Admin>,
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
    private readonly bcryptService: BcryptService
  ){}

  async create(createAdminDto: CreateAdminDto) {
    // check that the role is exists
    const role = await this.roleRepository.findOne({
      where: {
        id: createAdminDto.roleId
      }
    });

    if(!role || role === undefined || role === null){
      throw new BadRequestException(new FailResponseDto(
        'Valadtion Error!',
        ['That role is not exists!']
      ));
    }

    // check that there is no exists admins with the same email or username
    const oldAdmins = await this.adminRepository.find({
      where: [
        {email: createAdminDto.email},
        {userName: createAdminDto.userName}
      ]
    });

    if(oldAdmins && oldAdmins.length > 0){
      throw new BadRequestException(new FailResponseDto(
        'Valadtion Error!',
        [' The email or username is already exists']
      ));
    }
    
    createAdminDto.password = await this.bcryptService.hash(createAdminDto.password);

    await this.adminRepository.save({...createAdminDto, role});
    return new SuccessResponseDto(
      'Admin has been added successfully',
      null
    );
  }

  async findAll(query: any) {
    let { page, perPage, userName, fullName, role } = query;

    page = (page) ? parseInt(page) : 1;
    perPage = (perPage) ? parseInt(perPage) : 10;

    const admins = await this.adminRepository.findAndCount({
      where: [
        (userName) ? { userName: Like(`%${userName}%`) } : {},
        (fullName) ? { fullName: Like(`%${fullName}%`) } : {},
        (role) ? { role: {name: Like(`%${role}%`)}} : {}
      ],
      skip: ((page - 1) * perPage),
      take: perPage,
      relations: {
        role: true
      },
      select: {
        id: true,
        userName: true,
        fullName: true,
        email: true,
        country: true,
        phone: true
      },
      order: {
        id: 'DESC'
      }
    });

    const totalItems = admins[1];

    return new PagnationResponseDto(
      { 
        totalItems,
        totalPages: Math.ceil(totalItems / perPage),
        currentPage: page
      },
      admins[0]
    );
  }

  async findOne(id: number) {
    const admin = await this.adminRepository.findOneBy({id});

    return new SuccessResponseDto(
      '',
      { admin }
    );
  }

  async update(id: number, updateAdminDto: UpdateAdminDto) {
    const admin = await this.adminRepository.findOneBy({id});

    if(!admin || admin === undefined || admin === null){
      throw new NotFoundException(new FailResponseDto(
        'Not Found!',
        ['There is no admins with this id']
      ));
    }

    const response = await this.adminRepository.update(id, updateAdminDto);

    return new SuccessResponseDto(
      'Admin has been updated successfully',
      response
    );
  }

  async remove(id: number) {
    const admin = await this.adminRepository.findOneBy({id});

    if(!admin || admin === undefined || admin === null){
      throw new NotFoundException(new FailResponseDto(
        'Not Found!',
        ['There is no admins with this id']
      ));
    }

    await this.adminRepository.delete(id);

    return new SuccessResponseDto(
      'Admin has been deleted successfully',
      null
    );
  }
}
