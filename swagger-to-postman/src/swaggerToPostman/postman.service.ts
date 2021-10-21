import { Injectable } from '@nestjs/common';
import { PostmanData } from './interfaces/postman.interface';

@Injectable()
export class PostmanService {
    update(collection: PostmanData, collectionId: string): void{
        // ajax call to delete collection

        // ajax call to create collection
        this.create(collection, collectionId);
        throw new Error('Function not implemented.');
    }

    create(collection: PostmanData, collectionId: string): void{
        // ajax call to api to create collection

        throw new Error('Function not implemented.');
    }
}