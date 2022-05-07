import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PostmanService } from './swaggerToPostman/postman.service';
import { SwaggerService } from './swaggerToPostman/swagger.service';
import { SwaggerToPostmanController } from './swaggerToPostman/swaggerToPostman.controller';

@Module({
  imports: [HttpModule],
  controllers: [SwaggerToPostmanController],
  providers: [PostmanService, SwaggerService],
})
export class AppModule {}
