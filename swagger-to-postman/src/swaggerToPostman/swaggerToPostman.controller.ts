import { Body, Controller, Post, Put } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { SwaggerService } from './swagger.service';
import { CreateCollection } from './dto/create.dto';
import { UpdateCollection } from './dto/update.dto';
import { Configurations } from './interfaces/configurations.interface';
import { PostmanService } from './postman.service';

@ApiTags('swagger-to-postman')
@Controller('swaggerToPostman')
export class SwaggerToPostmanController {
  constructor(
    private readonly postmanService: PostmanService,
    private readonly swaggerService: SwaggerService,
  ) {}

  @Post(':swaggerUrl')
  @ApiBody({
    type: CreateCollection,
    description:
      'This api call will take the configurations passed in and create the appropriate collection in postman.',
  })
  @ApiCreatedResponse({
    description: 'The collection has been successfully created.',
  })
  createCollection(@Body() create: CreateCollection): void {
    const config = new Configurations(create);
    // fetch swagger documentation
    var swaggerDocs = this.swaggerService.readSwaggerDocs(create.swaggerUrls);
    // save
    this.postmanService.create(swaggerDocs, config);
  }

  @Put(':collectionId/:swaggerUrl')
  @ApiBody({
    type: UpdateCollection,
    description:
      'This api call will take the configurations passed in and re-create the existing collection in postman.',
  })
  @ApiCreatedResponse({
    description: 'The collection has been successfully created.',
  })
  updateCollection(@Body() update: UpdateCollection): void {
    const config = new Configurations(update);
    // convert swagger
    const swaggerDocs = this.swaggerService.readSwaggerDocs(update.swaggerUrls);
    // save
    this.postmanService.update(swaggerDocs, config);
  }
}
