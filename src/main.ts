import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true, //SO aceita no body oq foi especificado pelo class-validator
			forbidNonWhitelisted: true, //Lança um erro se o usuário inserir no body algo indesejado
			transform: true, //No meio da requisição ele ja faz a tipagem dos atributos
		}),
	);
	await app.listen(3000);
}
bootstrap();
