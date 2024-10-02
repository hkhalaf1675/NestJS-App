import { Injectable } from '@nestjs/common';
import { CreatePostReactDto } from './dto/create-post-react.dto';
import { UpdatePostReactDto } from './dto/update-post-react.dto';

@Injectable()
export class PostReactService {
  create(createPostReactDto: CreatePostReactDto) {
    return 'This action adds a new postReact';
  }

  findAll() {
    return `This action returns all postReact`;
  }

  findOne(id: number) {
    return `This action returns a #${id} postReact`;
  }

  update(id: number, updatePostReactDto: UpdatePostReactDto) {
    return `This action updates a #${id} postReact`;
  }

  remove(id: number) {
    return `This action removes a #${id} postReact`;
  }
}
