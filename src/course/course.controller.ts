import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Patch,
	Post,
	Res,
} from '@nestjs/common';
import { Response } from 'express';
import { CourseService } from './course.service';

@Controller('course')
export class CourseController {
	constructor(private readonly courseService: CourseService) {}

	@Get()
	findAll(@Res() response: Response): Response {
		return response.status(200).json({ message: 'List of courses' });
	}

	@Get(':id')
	findOne(@Param('id') id: string): string {
		return `Course ${id}`;
	}

	@Post()
	@HttpCode(201)
	create(@Body('name') name: string): string {
		return name;
	}

	@Patch(':id')
	update(@Param('id') id: string) {
		return `update course whith di ${id}`;
	}

	@HttpCode(204)
	@Delete(':id')
	remove(@Param('id') id: string) {
		return id;
	}
}
