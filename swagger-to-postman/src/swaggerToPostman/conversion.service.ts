import { Injectable } from '@nestjs/common';
import { Configurations } from './interfaces/configurations.interface';
import { PostmanData } from './interfaces/postman.interface';
import { SwaggerData } from './interfaces/swagger.interface';

@Injectable()
export class ConversionService {
  convertAndModify(data: SwaggerData, configs: Configurations): PostmanData {
    var collection = new PostmanData(data, configs.collectionId);
    collection = this.modify(collection, configs);
    return collection;
  }

  // This will add additional information to the collection
  private modify(collection: PostmanData, configs: Configurations): PostmanData{
      // add swagger call

      // update authentication

      // update variables

      throw new Error('Function not implemented.');
  }
}