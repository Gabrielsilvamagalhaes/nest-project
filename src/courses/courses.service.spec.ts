import { Test, TestingModule } from '@nestjs/testing';
import { CoursesService } from './courses.service';
import { CoursesRepository } from './repositories/courses.repository';

describe('CoursesService', () => {
	let service: CoursesService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [CoursesService, CoursesRepository],
		}).compile();

		service = module.get<CoursesService>(CoursesService);
	});

	it('should be defined', () => {
		console.log(service);

		expect(service).toBeDefined();
	});
});
