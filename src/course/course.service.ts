// import { Injectable, NotFoundException } from '@nestjs/common';

// @Injectable()
// export class CourseService {
// 	,

// 	findAll() {
// 		return this.courses;
// 	}

// 	findOne(id: number) {
// 		const course = this.courses.find((c) => c.id === id);
// 		if (course) return course;

// 		throw new NotFoundException(
// 			{ message: 'Course not found' },
// 			{
// 				cause: console.error(`Course with id: ${id} not found`),
// 				description: 'Not found course',
// 			},
// 		);
// 	}
// }

// update(id: number, updatedCourseDTO: any)
// {
// 	const existingCourse = this.findOne(id);
// 	if (existingCourse) {
// 		const index = this.courses.findIndex((c) => c.id === id);
// 		this.courses[index] = { ...existingCourse, ...updatedCourseDTO };
// 	}
// }

// remove(id: number)
// {
// 	const existingCourse = this.findOne(id);
// 	if (existingCourse) {
// 		const index = this.courses.findIndex((c) => c.id === id);
// 		this.courses.splice(index, 1);
// 	}
// }
// }
