import { IEntity } from "./IEntity";

export interface ICharacter extends IEntity{
    status:string;
    species:string;
    type:string;
    gender:string;
    origin:any;
    location:any;
    image:string;//url
    episode:Array<string>;
    url:string;
}