import { PartialType } from '@nestjs/mapped-types';
import { CreateSaveListDto } from './create-save-list.dto';

export class UpdateSaveListDto extends PartialType(CreateSaveListDto) {}
