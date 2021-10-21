import { CreateCollection } from "../dto/create.dto";
import { UpdateCollection } from "../dto/update.dto";

export class Configurations {
    constructor(config: CreateCollection | UpdateCollection, id: string = null){
        this.baseUrls = config.baseUrls;
        this.authenticationMethod = config.authenticationMethod;
        this.postmanAPIKey = config.postmanAPIKey;
        this.url = config.url;
        if(this.isUpdate(config)){
            this.collectionId = config.collectionId;
        }
        else {
            this.collectionId = id;
        }
    }

    baseUrls: string[];
    authenticationMethod: string;
    postmanAPIKey: string;
    url: string;
    collectionId: string;

    isUpdate(config: CreateCollection | UpdateCollection): config is UpdateCollection {
        return (config as UpdateCollection).collectionId !== undefined;
      }
}