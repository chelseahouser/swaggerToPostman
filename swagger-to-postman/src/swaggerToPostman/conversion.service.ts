import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import SwaggerParser from 'swagger-parser';
import { Configurations } from './interfaces/configurations.interface';
import { PostmanData } from './interfaces/postman.interface';

@Injectable()
export class ConversionService {
  constructor(private httpService: HttpService) {}

  // Fetch swagger urls and convert to postman collection
  convertAndModify(configs: Configurations): PostmanData {
    let collection = new PostmanData();
    // We are going to allow combining of multiple swagger definitions into one collection
    configs.baseUrls.forEach((url) => {
      this.httpService.get(url).subscribe(function (response) {
        if (response.data) {
          const data = JSON.parse(response.data);
          SwaggerParser.dereference(data).then(function (api) {
            collection.info._postman_id = configs.collectionId;
            collection.info.name = api.info.title;
            collection.info.description = api.info.description;
            // TODO: complete conversion
          });
        }
      });
    });
    collection = this.modify(collection, configs);
    return collection;
  }

  // This will add additional information to the collection based on the configurations
  private modify(
    collection: PostmanData,
    configs: Configurations,
  ): PostmanData {
    // add swagger call
    collection.item.push({
      name: 'Swagger Links',
      item: {
        name: configs.swaggerUrls[0],
        request: {
          method: 'Link',
          header: [],
          body: {
            mode: 'raw',
            raw: '',
          },
          url: {
            raw: configs.swaggerUrls[0],
            host: ['{{baseUrl}}'],
            path: [configs.swaggerUrls[0]],
          },
          description: '',
        },
      },
    });
    // update authentication
    // TODO: add authentication from configuration

    // update variables
    configs.baseUrls.forEach((baseUrl) => {
      collection.variable.push({
        key: 'baseUrl',
        value: baseUrl,
      });
    });

    return collection;
  }
}
