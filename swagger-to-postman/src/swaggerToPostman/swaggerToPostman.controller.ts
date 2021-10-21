import {Body, Controller, Post, Put} from '@nestjs/common';
import {ApiBody, ApiCreatedResponse, ApiResponse, ApiTags} from '@nestjs/swagger';
import {ConversionService} from './conversion.service';
import {CreateCollection} from './dto/create.dto';
import {UpdateCollection} from './dto/update.dto';
import {Configurations} from './interfaces/configurations.interface';
import {PostmanService} from './postman.service';

@ApiTags('swagger-to-postman')
@Controller('swaggerToPostman')
export class SwaggerToPostmanController {
  constructor(
    private readonly postmanService: PostmanService,
    private readonly conversionService: ConversionService,
  ) {}

  @Post(':swaggerUrl')
  @ApiBody({type: CreateCollection, description: 'This api call will take the configurations passed in and create the appropriate collection in postman.'})
  @ApiCreatedResponse({description: 'The collection has been successfully created.'})
  createCollection(@Body() create: CreateCollection): void {
    const config = new Configurations(create);
    // convert to postman collection
    const collection = this.conversionService.convertAndModify(config);
    // save
    this.postmanService.create(collection, config);
  }

  @Put(':collectionId/:swaggerUrl')
  @ApiBody({type: UpdateCollection, description: 'This api call will take the configurations passed in and re-create the existing collection in postman.'})
  @ApiCreatedResponse({description: 'The collection has been successfully created.'})
  updateCollection(@Body() update: UpdateCollection): void {
    const config = new Configurations(update);
    // convert swagger
    const collection = this.conversionService.convertAndModify(config);
    // save
    this.postmanService.update(collection, config);
  }
}
