import { Module } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { AdminsController } from './admins.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from '../../database/entities/admin.entity';
import { Role } from '../../database/entities/role.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Admin, Role])],
  controllers: [AdminsController],
  providers: [AdminsService],
})
export class AdminsModule {}
