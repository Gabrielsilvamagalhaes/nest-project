import { Injectable, NotFoundException } from '@nestjs/common';
import { Course } from './couse.entity';
import { CreateCourseDTO } from './dto/create-course.dto';
import { UpdateCourseDTO } from './dto/update-course.dto';

@Injectable()
export class CourseService {
	private courses: Course[] = [
		{
			id: 1,
			name: 'NestJs',
			description: 'NestJs fundamentals',
			tags: ['node.js', 'nestjs', 'javascript', 'typescript'],
		},
	];

	findAll() {
		return this.courses;
	}

	findOne(id: number) {
		const course = this.courses.find((c) => c.id === id);
		if (course) return course;

		throw new NotFoundException(
			{ message: 'Course not found' },
			{
				cause: console.error(`Course with id: ${id} not found`),
				description: 'Not found course',
			},
		);
	}

	create(createCourseDTO: CreateCourseDTO) {
		this.courses.push({ id: this.courses.length + 1, ...createCourseDTO });
		return createCourseDTO;
	}

	update(id: number, updatedCourseDTO: UpdateCourseDTO) {
		const existingCourse = this.findOne(id);
		if (existingCourse) {
			const index = this.courses.findIndex((c) => c.id === id);
			this.courses[index] = { ...existingCourse, ...updatedCourseDTO };
		}
	}

	remove(id: number) {
		const existingCourse = this.findOne(id);
		if (existingCourse) {
			const index = this.courses.findIndex((c) => c.id === id);
			this.courses.splice(index, 1);
		}
	}
}
