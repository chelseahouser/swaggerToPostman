import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class SwaggerService {
  constructor(private httpService: HttpService) {}

  // Fetch swagger urls
  readSwaggerDocs(swaggerUrls: string[]): any[] {
    var swaggerDocumentation = [];
    swaggerUrls.forEach(url => {
      this.httpService.get(url).subscribe(function (response) {
        const data = JSON.parse(response.data);
        swaggerDocumentation.push(data); 
      });
    });
    return swaggerDocumentation;
  }
}
