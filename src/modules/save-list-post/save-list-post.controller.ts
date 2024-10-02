import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SaveListPostService } from './save-list-post.service';
import { CreateSaveListPostDto } from './dto/create-save-list-post.dto';
import { UpdateSaveListPostDto } from './dto/update-save-list-post.dto';

@Controller('save-list-post')
export class SaveListPostController {
  constructor(private readonly saveListPostService: SaveListPostService) {}

  @Post()
  create(@Body() createSaveListPostDto: CreateSaveListPostDto) {
    return this.saveListPostService.create(createSaveListPostDto);
  }

  @Get()
  findAll() {
    return this.saveListPostService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.saveListPostService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSaveListPostDto: UpdateSaveListPostDto) {
    return this.saveListPostService.update(+id, updateSaveListPostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.saveListPostService.remove(+id);
  }
}
