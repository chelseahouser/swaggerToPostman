export class SwaggerData {
  info: info;
  paths: path[];
}

class info {
  title: string;
  description: string;
  version: string;
  contact: contact;
}

class tag {
  name: string;
  description: string;
}

class path {

}

class component {
  schemas: schema[];
}

class schema {

}

class contact {
  name: string;
  email: string;
}