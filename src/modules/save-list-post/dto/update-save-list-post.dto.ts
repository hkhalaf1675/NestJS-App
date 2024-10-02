import { PartialType } from '@nestjs/mapped-types';
import { CreateSaveListPostDto } from './create-save-list-post.dto';

export class UpdateSaveListPostDto extends PartialType(CreateSaveListPostDto) {}
