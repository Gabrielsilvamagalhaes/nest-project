import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
	imports: [CoursesModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
