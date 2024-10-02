import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SaveListService } from './save-list.service';
import { CreateSaveListDto } from './dto/create-save-list.dto';
import { UpdateSaveListDto } from './dto/update-save-list.dto';

@Controller('save-list')
export class SaveListController {
  constructor(private readonly saveListService: SaveListService) {}

  @Post()
  create(@Body() createSaveListDto: CreateSaveListDto) {
    return this.saveListService.create(createSaveListDto);
  }

  @Get()
  findAll() {
    return this.saveListService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.saveListService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSaveListDto: UpdateSaveListDto) {
    return this.saveListService.update(+id, updateSaveListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.saveListService.remove(+id);
  }
}
