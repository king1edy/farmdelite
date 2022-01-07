import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Farm Delite Backend App')
    .setDescription('Farm delite - Our aim is to bridge the gaps in the agricultural value chain, required to make a successful transaction. ')
    .setVersion('1.0')
    .addTag('farm, agriculture-produce')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
