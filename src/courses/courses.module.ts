import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { CoursesRepository } from './repositories/courses.repository';

@Module({
	controllers: [CoursesController],
	providers: [CoursesService, PrismaService, CoursesRepository],
})
export class CoursesModule {}
