import { Module } from '@nestjs/common';
import { SaveListPostService } from './save-list-post.service';
import { SaveListPostController } from './save-list-post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaveListPost } from '../../database/entities/save-list-post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SaveListPost])],
  controllers: [SaveListPostController],
  providers: [SaveListPostService],
})
export class SaveListPostModule {}
