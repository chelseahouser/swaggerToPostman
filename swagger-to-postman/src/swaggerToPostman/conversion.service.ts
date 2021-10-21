import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import SwaggerParser from 'swagger-parser';
import { Configurations } from './interfaces/configurations.interface';
import { PostmanData } from './interfaces/postman.interface';

@Injectable()
export class ConversionService {
  constructor(private httpService: HttpService) {}

  convertAndModify(configs: Configurations): PostmanData {
    var collection = new PostmanData();
    // We are going to allow combining of multiple swagger definitions into one collection
    configs.baseUrls.forEach(url => {
      this.httpService.get(url).subscribe(
        function(response) {
          if(response.data){
            var data = JSON.parse(response.data);
            SwaggerParser.dereference(data).then(function(api) {
              collection.info._postman_id = configs.collectionId;
              collection.info.name = api.info.title;
              collection.info.description = api.info.description;
              
            })
          }
        }
      );
    });
    collection = this.modify(collection, configs);
    return collection;
  }

  // This will add additional information to the collection
  private modify(collection: PostmanData, configs: Configurations): PostmanData{
      // add swagger call
      collection.item.push({
          name: 'Swagger Links',
          item: {
            name: configs.swaggerUrls[0],
            request: {
              method: 'Link',
              header: [],
              body: {
                mode: "raw",
                raw: ""
              },
              url: {
                raw: configs.swaggerUrls[0],
                host: ["{{baseUrl}}"],
                path: [configs.swaggerUrls[0]]
              },
              description: ""
            }
          }
      });
      // update authentication

      // update variables
      configs.baseUrls.forEach(baseUrl => {
        collection.variable.push({
          key: "baseUrl",
          value: baseUrl
        })
      });
      throw new Error('Function not implemented.');
  }
}