import { Injectable } from '@nestjs/common';
import { PostmanData } from './interfaces/postman.interface';
import { SwaggerData } from './interfaces/swagger.interface';

@Injectable()
export class ConversionService {
  convertAndModify(data: string): string {
    PostmanData collection = this.convert(data);
    collection = this.modify(collection);
    return JSON.stringify(collection);
  }

  // this will conver the swagger format to postman format
  private convert(data: string): PostmanData {
    // convert swagger to postman format
    SwaggerData swagger = JSON.parse(data) as SwaggerData;
    return new PostmanData(SwaggerData);
  }

  // This will add additional information to the collection
  private modify(collection: string): PostmanData{
      // add swagger call

      // update authentication

      // update variables

      throw new Error('Function not implemented.');
  }
}