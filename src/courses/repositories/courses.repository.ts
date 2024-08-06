import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCourseDto } from '../dto/create-course.dto';
import { UpdateCourseDto } from '../dto/update-course.dto';

@Injectable()
export class CoursesRepository {
	constructor(private readonly prisma: PrismaService) {}

	async save(createCourseDto: CreateCourseDto) {
		return await this.prisma.course.create({
			data: {
				name: createCourseDto.name,
				description: createCourseDto.description,
				CourseTag: {
					create: createCourseDto.tags.map((tag) => ({
						tag: {
							connectOrCreate: {
								where: {
									name: tag.name,
								},
								create: {
									name: tag.name,
								},
							},
						},
					})),
				},
			},
		});
	}

	async findOneById(id: number) {
		return await this.prisma.course.findUnique({
			where: { id },
			select: {
				name: true,
				description: true,
				CourseTag: {
					select: {
						tag: {
							select: {
								name: true,
							},
						},
					},
				},
			},
		});
	}

	async findAll() {
		return await this.prisma.course.findMany({
			select: {
				name: true,
				description: true,
				CourseTag: {
					select: {
						tag: {
							select: {
								name: true,
							},
						},
					},
				},
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
