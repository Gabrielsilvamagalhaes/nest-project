import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	ParseIntPipe,
	Patch,
	Post,
	Res,
} from '@nestjs/common';
import { Response } from 'express';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('courses')
export class CoursesController {
	constructor(private readonly coursesService: CoursesService) {}

	@Post()
	create(@Body() createCourseDto: CreateCourseDto) {
		return this.coursesService.create(createCourseDto);
	}

	@Get()
	findAll() {
		return this.coursesService.findAll();
	}

	@Get(':id')
	async findOne(
		@Param('id', ParseIntPipe) id: number,
		@Res() response: Response,
	) {
		const course = await this.coursesService.findOne(id);
		return response.json(course);
	}

	@Patch(':id')
	async update(
		@Param('id', ParseIntPipe) id: number,
		@Body() updateCourseDto: UpdateCourseDto,
		@Res() response: Response,
	) {
		const course = await this.coursesService.update(id, updateCourseDto);
		if (course) return response.status(204);

		return response.status(404).json({ message: 'Course not found' });
	}

	@Delete(':id')
	async remove(
		@Param('id', ParseIntPipe) id: number,
		@Res() response: Response,
	) {
		const course = await this.coursesService.remove(id);
		if (course) return response.status(204);

		return response.status(404).json({ message: 'Course not found' });
	}
}
