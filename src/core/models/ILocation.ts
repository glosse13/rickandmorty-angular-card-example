import { IEntity } from "./IEntity";

export interface ILocation extends IEntity{
    type:string;
    dimension:string;
    residents:any;
    url:string;
}