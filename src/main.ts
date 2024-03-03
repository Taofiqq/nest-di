import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import 'reflect-metadata';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //log metadata
  const metadata = Reflect.getMetadataKeys(AppModule);

  for (const key of metadata) {
    if (key === 'imports') {
      const imports = Reflect.getMetadata(key, AppModule);
      // you can log the import variable to see what it returns
    }
  }
  await app.listen(3000);
}
bootstrap();
