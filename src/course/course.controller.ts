import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	HttpStatus,
	Param,
	Patch,
	Post,
	Res,
} from '@nestjs/common';
import { Response } from 'express';

@Controller('course')
export class CourseController {
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

	@Delete(':id')
	remove(@Param('id') id: string) {}
}
