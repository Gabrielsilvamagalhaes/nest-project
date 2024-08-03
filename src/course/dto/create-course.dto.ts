import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCourseDTO {
	@IsNotEmpty()
	@IsString({
		message: 'Name is to have been string',
	})
	readonly name: string;

	@IsNotEmpty()
	@IsString({
		message: 'Name is to have been string',
	})
	readonly description: string;

	@IsNotEmpty()
	@IsString({
		each: true,
	})
	readonly tags: string[];
}
