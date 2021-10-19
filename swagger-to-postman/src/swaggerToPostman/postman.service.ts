import { Injectable } from '@nestjs/common';

@Injectable()
export class PostmanService {
    update(collection: string, id: string): void{
        // ajax call to delete collection

        // ajax call to create collection
        this.create(collection, id);
        throw new Error('Function not implemented.');
    }

    create(collection: string, id: string): void{
        // ajax call to api to create collection

        throw new Error('Function not implemented.');
    }
}