import { randomUUID } from 'node:crypto';
import { Test, TestingModule } from '@nestjs/testing';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { CoursesRepository } from './repositories/courses.repository';

const createCourseDto: CreateCourseDto = {
	name: 'Test',
	description: 'test description',
	tags: [{ name: 'nestjs' }],
};

describe('CoursesService unit tests', () => {
	let service: CoursesService;
	let id: string;
	let created_at: Date;
	let expectOutputTags: [{ id: string; name: string }];
	let expectOutputCourses: any;
	let mockCoursesRepository: any;

	beforeEach(async () => {
		id = randomUUID();
		created_at = new Date();
		expectOutputTags = [
			{
				id,
				name: 'nestjs',
			},
		];
		expectOutputCourses = {
			id,
			name: 'Test',
			description: 'test description',
			created_at,
			tags: expectOutputTags,
		};

		mockCoursesRepository = {
			save: vi.fn().mockReturnValue(Promise.resolve(expectOutputCourses)),
			findOneById: vi
				.fn()
				.mockReturnValue(Promise.resolve(expectOutputCourses)),
			findAll: vi.fn().mockReturnValue(Promise.resolve(expectOutputCourses)),
			delete: vi.fn().mockReturnValue(Promise.resolve(expectOutputCourses)),
			updateCourse: vi
				.fn()
				.mockReturnValue(Promise.resolve(expectOutputCourses)),
		};
		service = new CoursesService(mockCoursesRepository);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});

	it('should create course', async () => {
		const sut = await service.create(createCourseDto);

		expect(sut).toEqual(expectOutputCourses);
		expect(mockCoursesRepository.save).toHaveBeenCalled();
	});
});
