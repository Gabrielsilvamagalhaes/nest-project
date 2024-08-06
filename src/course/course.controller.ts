// import {
// 	Body,
// 	Controller,
// 	Delete,
// 	Get,
// 	HttpCode,
// 	Param,
// 	ParseIntPipe,
// 	Patch,
// 	Post,
// 	Res,
// } from '@nestjs/common';
// import { Response } from 'express';
// import { CourseService } from './course.service';

// @Controller('course')
// export class CourseController {
// 	constructor(private readonly courseService: CourseService) {}

// 	@Get()
// 	findAll(@Res() response: Response): Response {
// 		return response.status(200).json(this.courseService.findAll());
// 	}

// 	@Get(':id')
// 	findOne(
// 		@Param('id', ParseIntPipe) id: number,
// 		@Res() response: Response,
// 	): Response {
// 		return response.status(200).json(this.courseService.findOne(id));
// 	}

// 	@Post()
// 	@HttpCode(201)
// 	create(@Body() createCourseDTO: any, @Res() response: Response): Response {
// 		return response.json(this.courseService.create(createCourseDTO));
// 	}

// 	@Patch(':id')
// 	@HttpCode(204)
// 	update(@Param('id', ParseIntPipe) id: number, @Body() updateCourseDTO: any) {
// 		this.courseService.update(id, updateCourseDTO);
// 	}

// 	@HttpCode(204)
// 	@Delete(':id')
// 	remove(@Param('id', ParseIntPipe) id: number) {
// 		this.courseService.remove(id);
// 	}
// }
