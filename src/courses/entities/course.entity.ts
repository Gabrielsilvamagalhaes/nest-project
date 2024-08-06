import { Course } from '@prisma/client';
import { TagEntity } from './tags.entity';

export class CourseEntity implements Course {
	id: number;
	createdAt: Date;
	updatedAt: Date;
	name: string;
	description: string;
	tags: TagEntity[];
}
