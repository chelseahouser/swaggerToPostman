import { Body, Controller, Post, Put } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { ConversionService } from './conversion.service';
import { CreateCollection } from './dto/create.dto';
import { UpdateCollection } from './dto/update.dto';
import { Configurations } from './interfaces/configurations.interface';
import { PostmanService } from './postman.service';

@Controller('swaggerToPostman')
export class SwaggerToPostmanController {
  constructor(
    private readonly postmanService: PostmanService, 
    private readonly conversionService: ConversionService
  ) {}

  @Post(':swaggerUrl')
  @ApiBody({ type: [CreateCollection] })
  createCollection(@Body() create: CreateCollection): void {
    var config = new Configurations(create);
    // convert to postman collection
    var collection = this.conversionService.convertAndModify(config);
    // save
    this.postmanService.create(collection, config);
  }

  @Put(':collectionId/:swaggerUrl')
  @ApiBody({ type: [UpdateCollection] })
  updateCollection(@Body() update: UpdateCollection): void {
      var config = new Configurations(update);
      // convert swagger
      var collection = this.conversionService.convertAndModify(config);
      // save
      this.postmanService.update(collection, config);
  }
}
