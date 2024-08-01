import { Injectable } from '@nestjs/common';
import { Course } from './couse.entity';

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
		return this.courses.find((c) => c.id === id);
	}

	create(createCourseDTO: Course) {
		this.courses.push(createCourseDTO);
		return createCourseDTO;
	}

	update(id: number, updatedCourseDTO: any) {
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
