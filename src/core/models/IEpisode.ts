import { IEntity } from "./IEntity";

export interface IEpisode extends IEntity{
    air_date:string;
    episode:string;
    characters:any;
    url:string;
}