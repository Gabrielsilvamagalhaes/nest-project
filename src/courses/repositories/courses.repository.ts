import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCourseDto } from '../dto/create-course.dto';
import { CourseEntity } from '../entities/course.entity';

@Injectable()
export class CoursesRepository {
	constructor(private readonly prisma: PrismaService) {}

	async save(createCourseDto: CreateCourseDto): Promise<CourseEntity> {
		return await this.prisma.course.create({
			data: createCourseDto,
		});
	}
}
