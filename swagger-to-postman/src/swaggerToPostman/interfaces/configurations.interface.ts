import { CreateCollection } from "../dto/create.dto";
import { UpdateCollection } from "../dto/update.dto";

export class Configurations {
    constructor(config: CreateCollection | UpdateCollection){
        this.baseUrls = config.baseUrls;
        this.authenticationMethod = config.authenticationMethod;
        this.postmanAPIKey = config.postmanAPIKey;
        this.swaggerUrls = config.swaggerUrls;
        this.workspaceId = config.workspaceId;
        if(this.isUpdate(config)){
            this.collectionId = config.collectionId;
        }
    }

    baseUrls: string[];
    authenticationMethod: string;
    postmanAPIKey: string;
    swaggerUrls: string[];
    collectionId: string | undefined;
    workspaceId: string;

    isUpdate(config: CreateCollection | UpdateCollection): config is UpdateCollection {
        return (config as UpdateCollection).collectionId !== undefined;
      }
}