import {IGroup} from "./IGroup";

export interface IUserBasic {
    id: string,
    name: string,
    picture: string,
    role: string,
    groups: Array<IGroup>
}
