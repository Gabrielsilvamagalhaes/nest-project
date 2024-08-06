import { PickType } from '@nestjs/mapped-types';
import { CreateCourseDto } from './create-course.dto';

export class ResponseCourseDto extends PickType(CreateCourseDto, [
	'name',
	'description',
	'tags',
]) {}
