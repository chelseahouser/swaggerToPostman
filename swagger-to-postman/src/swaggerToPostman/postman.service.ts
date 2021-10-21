import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Configurations } from './interfaces/configurations.interface';
import { PostmanData } from './interfaces/postman.interface';

// This service will handle ajax calls to the postman api for creating and deleting collections.
@Injectable()
export class PostmanService {
  constructor(private httpService: HttpService) {}
  PostmanURL = 'https://api.getpostman.com/collections';

  // Stupid update, this will delete and re-create the postman collection.
  update(collection: PostmanData, configs: Configurations): void {
    this.httpService.delete(this.PostmanURL + '/' + configs.collectionId, {
      auth: {
        username: 'X-API-Key',
        password: configs.postmanAPIKey,
      },
    });

    this.create(collection, configs);
  }

  // create collection in postman
  create(collection: PostmanData, configs: Configurations): void {
    this.httpService.post(
      this.PostmanURL + '?workspace=' + configs.workspaceId,
      collection,
      {
        auth: {
          username: 'X-API-Key',
          password: configs.postmanAPIKey,
        },
      },
    );
  }
}
