import {IUserBasic} from "./IUserBasic";

export interface IUserFull extends IUserBasic{

    email: string,
    createdAt: Date

}
