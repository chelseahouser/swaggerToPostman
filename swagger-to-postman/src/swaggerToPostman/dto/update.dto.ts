import { ApiProperty } from "@nestjs/swagger";

export class UpdateCollection {
    @ApiProperty()
    baseUrls: string[];
    @ApiProperty()
    authenticationMethod: string;
    @ApiProperty()
    postmanAPIKey: string;
    @ApiProperty()
    swaggerUrls: string[];
    @ApiProperty()
    collectionId: string;
    @ApiProperty()
    workspaceId: string;
}