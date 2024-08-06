import { Tag } from '@prisma/client';
import { CourseEntity } from './course.entity';

export class TagEntity implements Tag {
	id: number;
	name: string;
	courses: CourseEntity[];
}
