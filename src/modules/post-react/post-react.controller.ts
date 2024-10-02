import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostReactService } from './post-react.service';
import { CreatePostReactDto } from './dto/create-post-react.dto';
import { UpdatePostReactDto } from './dto/update-post-react.dto';

@Controller('post-react')
export class PostReactController {
  constructor(private readonly postReactService: PostReactService) {}

  @Post()
  create(@Body() createPostReactDto: CreatePostReactDto) {
    return this.postReactService.create(createPostReactDto);
  }

  @Get()
  findAll() {
    return this.postReactService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postReactService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostReactDto: UpdatePostReactDto) {
    return this.postReactService.update(+id, updatePostReactDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postReactService.remove(+id);
  }
}
