import { Injectable } from '@nestjs/common';
import { CreateSaveListPostDto } from './dto/create-save-list-post.dto';
import { UpdateSaveListPostDto } from './dto/update-save-list-post.dto';

@Injectable()
export class SaveListPostService {
  create(createSaveListPostDto: CreateSaveListPostDto) {
    return 'This action adds a new saveListPost';
  }

  findAll() {
    return `This action returns all saveListPost`;
  }

  findOne(id: number) {
    return `This action returns a #${id} saveListPost`;
  }

  update(id: number, updateSaveListPostDto: UpdateSaveListPostDto) {
    return `This action updates a #${id} saveListPost`;
  }

  remove(id: number) {
    return `This action removes a #${id} saveListPost`;
  }
}
