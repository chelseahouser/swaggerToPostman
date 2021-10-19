import { Controller, Param, Post, Put } from '@nestjs/common';
import { ConversionService } from './conversion.service';
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
  createCollection(@Param() params): void {
    var id = "new guid identifier";
    // pull in data
    var data = this.swaggerService.fetch(params.url);
    // convert to postman collection
    var collection = this.conversionService.convertAndModify(data);
    // save
    this.postmanService.create(collection, id);
  }

  @Put(':collectionId/:swaggerUrl')
  updateCollection(url: any, id: any): void {
      // pull in data
      var swaggerJson = this.swaggerService.fetch(url);
      // convert swagger
      var collection = this.conversionService.convertAndModify(swaggerJson);
      // save
      this.postmanService.update(collection, id);
  }
}
