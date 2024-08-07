import { randomUUID } from 'node:crypto';
import { Test, TestingModule } from '@nestjs/testing';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { CourseEntity } from './entities/course.entity';
import { CoursesRepository } from './repositories/courses.repository';

const createCourseDto: CreateCourseDto = {
	name: 'Test',
	description: 'test description',
	tags: [{ name: 'nestjs' }],
};

const findedCourseDto = {
	id: 1,
	name: 'Test',
	description: 'test description',
	tags: [{ id: 3, name: 'nestjs' }],
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
			findOneById: vi.fn().mockReturnValue(Promise.resolve(findedCourseDto)),
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
		expect(sut).toHaveProperty('id');
		expect(mockCoursesRepository.save).toHaveBeenCalled();
	});

	it('should return all courses', async () => {
		const sut = await service.findAll();

		expect(expectOutputCourses).toEqual(sut);
		expect(mockCoursesRepository.findAll).toHaveBeenCalled();
		expect(mockCoursesRepository.findAll).toHaveBeenCalledTimes(1);
		expect(mockCoursesRepository.findAll).toHaveBeenCalledWith();
	});

	it('should return one course by id', async () => {
		const sut = await service.findOne(1);

		expect(findedCourseDto).toEqual(sut);
		expect(mockCoursesRepository.findOneById).toHaveBeenCalled();
		expect(mockCoursesRepository.findOneById).toHaveBeenCalledTimes(1);
		expect(mockCoursesRepository.findOneById).toHaveBeenCalledWith(1);
	});

	it('should delete course', async () => {
		const sut = await service.remove(1);

		expect(expectOutputCourses).toEqual(sut);
		expect(mockCoursesRepository.delete).toHaveBeenCalled();
		expect(mockCoursesRepository.delete).toHaveBeenCalledTimes(1);
		expect(mockCoursesRepository.delete).toHaveBeenCalledWith(1);
	});

	it('should update course', async () => {
		const updateCourseDto: UpdateCourseDto = {
			name: 'Test',
			description: 'test description',
			tags: [{ name: 'nestjs' }],
		};
		const sut = await service.update(1, updateCourseDto);

		expect(expectOutputCourses).toEqual(sut);
		expect(mockCoursesRepository.updateCourse).toHaveBeenCalled();
		expect(mockCoursesRepository.updateCourse).toHaveBeenCalledWith(
			1,
			updateCourseDto,
		);
		expect(mockCoursesRepository.updateCourse).toHaveBeenCalledTimes(1);
	});
});
