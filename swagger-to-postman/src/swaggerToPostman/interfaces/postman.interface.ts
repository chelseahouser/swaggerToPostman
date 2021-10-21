import { SwaggerData } from "./swagger.interface";
export class PostmanData {
    constructor( swagger: SwaggerData, id: string){
        this.info._postman_id = id;
        this.info.name = swagger.info.title;
        this.info.description = swagger.info.description;
        swagger.paths.forEach(path => {
            
        });
    }

    info: info;
    item: item[];
    event: event[];
    variable: variable[];

}

class info {
    _postman_id: string;
    name: string;
    description: string;
    schema: string;
}

class item {
    name: string;
    request: request;
    response: response;
}

class request {
    method: string;
    header: header[];
    body: body;
    url: url;
}

class header {
    key: string;
    value: string;
}

class body {
    mode: string;
    // ???
}

class url {
    raw: string;
    host: string[];
    path: string[];
}

class response {
    name: string;
    originalRequest: request;
    status: string;
    code: number;
    _postman_previewlanguage: string;
    header: header[];
    cookie: string[];
    body: string;
}

class event {
    listen: string;
    script: script;
}

class script {
    type: string;
    exec: string[];
}

class variable {
    key: string;
    value: string;
}