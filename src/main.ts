import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
  });

  const config = new DocumentBuilder()
    .setTitle('API de Abastecimentos')
    .setDescription('API para gerenciamento de abastecimentos')
    .setVersion('1.0')
    .addTag('abastecimentos')
    .build();
  SwaggerModule.setup('api', app, SwaggerModule.createDocument(app, config));

  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
  }));

  const port = process.env.PORT || 3000;
  await app.listen(port);
  logger.log(`Aplicação rodando na porta ${port}!`);
  logger.log(`Documentação Swagger disponível em: http://localhost:${port}/api`);
}
bootstrap();
