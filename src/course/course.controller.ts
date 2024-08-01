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
		return response.status(200).json(this.courseService.findAll());
	}

	@Get(':id')
	findOne(@Param('id') id: string, @Res() response: Response): Response {
		return response.status(200).json(this.courseService.findOne(+id));
	}

	@Post()
	@HttpCode(201)
	create(@Body() body, @Res() response: Response): Response {
		return response.json(this.courseService.create(body));
	}

	@Patch(':id')
	@HttpCode(204)
	update(@Param('id') id: string, @Body() body) {
		this.courseService.update(+id, body);
	}

	@HttpCode(204)
	@Delete(':id')
	remove(@Param('id') id: string) {
		this.courseService.remove(+id);
	}
}
