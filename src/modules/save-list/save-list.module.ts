import { Module } from '@nestjs/common';
import { SaveListService } from './save-list.service';
import { SaveListController } from './save-list.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaveList } from '../../database/entities/save-list.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SaveList])],
  controllers: [SaveListController],
  providers: [SaveListService],
})
export class SaveListModule {}
