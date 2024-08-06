import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCourseDto } from '../dto/create-course.dto';
import { ResponseCourseDto } from '../dto/response-course.dto';
import { UpdateCourseDto } from '../dto/update-course.dto';
import { CourseEntity } from '../entities/course.entity';

@Injectable()
export class CoursesRepository {
	constructor(private readonly prisma: PrismaService) {}

	async save(createCourseDto: CreateCourseDto): Promise<CourseEntity> {
		return await this.prisma.course.create({
			data: createCourseDto,
		});
	}

	async findOneById(id: number): Promise<ResponseCourseDto | null> {
		return await this.prisma.course.findUnique({
			where: { id },
			select: {
				name: true,
				description: true,
				tags: true,
			},
		});
	}

	async findAll(): Promise<ResponseCourseDto[]> {
		return await this.prisma.course.findMany({
			select: {
				name: true,
				description: true,
				tags: true,
			},
		});
	}

	async delete(id: number) {
		return await this.prisma.course.delete({
			where: { id },
		});
	}

	async updateCourse(id: number, updateCourse: UpdateCourseDto) {
		return await this.prisma.course.update({
			where: { id },
			data: updateCourse,
		});
	}
}
