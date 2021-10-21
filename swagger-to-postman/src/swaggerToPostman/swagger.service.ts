import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { SwaggerData } from './interfaces/swagger.interface';

@Injectable()
export class SwaggerService {
  constructor(private httpService: HttpService) {}
  
  fetch(url: string): SwaggerData{
    // read in data from url
    this.httpService.get(url).subscribe(
      function(response) {
        if(response.data){
          return JSON.parse(response.data) as SwaggerData;
        }
      }
    );
    return new SwaggerData();
  }
}