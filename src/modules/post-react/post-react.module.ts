import { Module } from '@nestjs/common';
import { PostReactService } from './post-react.service';
import { PostReactController } from './post-react.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostReact } from '../../database/entities/post-react.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PostReact])],
  controllers: [PostReactController],
  providers: [PostReactService],
})
export class PostReactModule {}
