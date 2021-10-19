import { SwaggerData } from "./swagger.interface";
export class PostmanData {
    PostmanData( swagger: SwaggerData, id: string){
        this.info._postman_id = id
    }

    info: {
        _postman_id: string,
        name: string,
        description: string,
        schema: string
    },
    item: [

    ]

}