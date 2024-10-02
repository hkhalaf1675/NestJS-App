import { Injectable } from '@nestjs/common';
import { CreateSaveListDto } from './dto/create-save-list.dto';
import { UpdateSaveListDto } from './dto/update-save-list.dto';

@Injectable()
export class SaveListService {
  create(createSaveListDto: CreateSaveListDto) {
    return 'This action adds a new saveList';
  }

  findAll() {
    return `This action returns all saveList`;
  }

  findOne(id: number) {
    return `This action returns a #${id} saveList`;
  }

  update(id: number, updateSaveListDto: UpdateSaveListDto) {
    return `This action updates a #${id} saveList`;
  }

  remove(id: number) {
    return `This action removes a #${id} saveList`;
  }
}
