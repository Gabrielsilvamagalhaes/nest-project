import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { CoursesRepository } from './repositories/courses.repository';

@Injectable()
export class CoursesService {
	constructor(private readonly courseRepository: CoursesRepository) {}

	create(createCourseDto: CreateCourseDto) {
		return this.courseRepository.save(createCourseDto);
	}

	findAll() {
		return this.courseRepository.findAll();
	}

	async findOne(id: number) {
		const course = await this.courseRepository.findOneById(id);
		if (course) return course;

		throw new NotFoundException(
			{ message: `Course with id ${id} not found` },
			{
				cause: console.error(`Course with id ${id} not found`),
				description: 'Not found course',
			},
		);
	}

	async update(id: number, updateCourseDto: UpdateCourseDto) {
		try {
			return await this.courseRepository.updateCourse(id, updateCourseDto);
		} catch (error) {
			console.error(error);
			return false;
		}
	}

	async remove(id: number) {
		try {
			return await this.courseRepository.delete(id);
		} catch (error) {
			console.error(error);
			return false;
		}
	}
}
