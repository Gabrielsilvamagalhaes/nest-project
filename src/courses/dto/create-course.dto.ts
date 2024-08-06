import { IsArray, IsNotEmpty, IsString } from 'class-validator';
import { CreateTagDto } from './create-tag.dto';

export class CreateCourseDto {
	@IsNotEmpty()
	@IsString({
		message: 'Name is to have been string',
	})
	name: string;

	@IsNotEmpty()
	@IsString({
		message: 'Description is to have been string',
	})
	description: string;

	@IsArray()
	tags: CreateTagDto[];
}
