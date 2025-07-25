import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as bodyParser from 'body-parser';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.useGlobalPipes(
		new ValidationPipe({
			transform: true,
			whitelist: true,
			forbidNonWhitelisted: true,
		}),
	);

	const config = new DocumentBuilder()
		.setTitle('EzMotoFlow')
		.setDescription('EzMotoFlow description')
		.addBearerAuth()
		.setVersion('1.0')
		.build();

	const documentFactory = () => SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('docs', app, documentFactory);

	app.use(bodyParser.json({ limit: '18mb' }));
	app.use(bodyParser.urlencoded({ limit: '18mb', extended: true }));

	await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
