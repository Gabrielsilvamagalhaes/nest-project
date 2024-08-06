import { Course } from '@prisma/client';

export class CourseEntity implements Course {
	id: number;
	createdAt: Date;
	updatedAt: Date;
	name: string;
	description: string;
	tags: string[];
}
