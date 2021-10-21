export class PostmanData {
    info: info;
    item: items[];
    event: event[];
    variable: variable[];
}

class info {
    _postman_id: string;
    name: string;
    description: string;
    schema: string;
}

class items {
    name: string;
    item: item;
}

class item {
    name: string;
    request: request;
}

class request {
    method: string;
    header: header[];
    body: body;
    url: url;
    description: string;
}

class header {
    key: string;
    value: string;
}

class body {
    mode: string;
    raw: string;
}

class url {
    raw: string;
    host: string[];
    path: string[];
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
