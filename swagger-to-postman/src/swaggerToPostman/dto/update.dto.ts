import { ApiProperty } from '@nestjs/swagger';

export class UpdateCollection {
  @ApiProperty({
    type: 'stringArray',
    description:
      'Collection of base URLs to be saved in variables for running api commands manually.',
  })
  baseUrls: string[];
  @ApiProperty({
    type: 'string',
    description: 'TODO: figure out what we actually need for this',
  })
  authenticationMethod: string;
  @ApiProperty({
    type: 'string',
    description:
      'The key for authenticating against PostmanAPI to allow saving to the workspace.',
  })
  postmanAPIKey: string;
  @ApiProperty({
    type: 'stringArray',
    description:
      'A list of urls to pull swagger documentation from. All results will be combined into one postman collection.',
  })
  swaggerUrls: string[];
  @ApiProperty({
    type: 'string',
    description: 'The workspace identifier from postman to save collection to.',
  })
  workspaceId: string;
  @ApiProperty({
    type: 'string',
    description: 'The id of the existing collection to update.',
  })
  collectionId: string;
}
