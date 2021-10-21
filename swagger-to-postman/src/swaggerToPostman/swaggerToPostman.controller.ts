import { Controller, Post, Put } from '@nestjs/common';
import { ConversionService } from './conversion.service';
import { CreateCollection } from './dto/create.dto';
import { UpdateCollection } from './dto/update.dto';
import { Configurations } from './interfaces/configurations.interface';
import { PostmanService } from './postman.service';
import { SwaggerService } from './swagger.service';

@Controller('swaggerToPostman')
export class SwaggerToPostmanController {
  constructor(
    private readonly postmanService: PostmanService, 
    private readonly swaggerService: SwaggerService,
    private readonly conversionService: ConversionService
  ) {}

  @Post(':swaggerUrl')
  createCollection(create: CreateCollection): void {
    var id = "new guid identifier";
    var config = new Configurations(create, id);
    // pull in data
    var data = this.swaggerService.fetch(config.url);
    // convert to postman collection
    var collection = this.conversionService.convertAndModify(data, config);
    // save
    this.postmanService.create(collection, config.collectionId);
  }

  @Put(':collectionId/:swaggerUrl')
  updateCollection(update: UpdateCollection): void {
      var config = new Configurations(update);
      // pull in data
      var data = this.swaggerService.fetch(config.url);
      // convert swagger
      var collection = this.conversionService.convertAndModify(data, config);
      // save
      this.postmanService.update(collection, config.collectionId);
  }
}
