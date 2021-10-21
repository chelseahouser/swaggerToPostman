import { ApiProperty } from "@nestjs/swagger";

export class CreateCollection {
    @ApiProperty()
    baseUrls: string[];
    @ApiProperty()
    authenticationMethod: string;
    @ApiProperty()
    postmanAPIKey: string;
    @ApiProperty()
    swaggerUrls: string[];
    @ApiProperty()
    workspaceId: string;
}