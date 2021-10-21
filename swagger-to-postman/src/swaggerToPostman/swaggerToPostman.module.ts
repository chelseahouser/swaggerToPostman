import { Module } from '@nestjs/common';
import { SwaggerToPostmanController } from './swaggerToPostman.controller';
import { PostmanService } from './postman.service';
import { ConversionService } from './conversion.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [SwaggerToPostmanController],
  providers: [PostmanService, ConversionService],
})
export class SwaggerToPostmanModule {}
