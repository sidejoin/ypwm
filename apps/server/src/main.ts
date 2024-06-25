import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const port = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle(process.env.NAME || 'unknown')
    .setDescription(`The ${process.env.NAME} API description`)
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(port).then(() => {
    console.log(`server started @ http://127.0.0.1:${port}`);
    console.log(`swagger @ http://127.0.0.1:${port}/api`);
  });
}
bootstrap();
