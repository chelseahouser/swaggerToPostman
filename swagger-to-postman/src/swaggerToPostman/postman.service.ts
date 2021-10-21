import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Configurations } from './interfaces/configurations.interface';
import { PostmanData } from './interfaces/postman.interface';

@Injectable()
export class PostmanService {
    constructor(private httpService: HttpService) {}
    PostmanURL = "https://api.getpostman.com/collections";

    update(collection: PostmanData, configs: Configurations): void{
        // ajax call to delete collection
        this.httpService.delete(this.PostmanURL + "/" + configs.collectionId, {
            auth: {
                username: "X-API-Key",
                password: configs.postmanAPIKey
            }
        });
        // ajax call to create collection
        this.create(collection, configs);
        throw new Error('Function not implemented.');
    }

    create(collection: PostmanData, configs: Configurations): void{
        // ajax call to api to create collection
        this.httpService.post(this.PostmanURL + "?workspace=" + configs.workspaceId, 
            collection, {
                auth: {
                    username: "X-API-Key",
                    password: configs.postmanAPIKey
                }
            });
        throw new Error('Function not implemented.');
    }
}