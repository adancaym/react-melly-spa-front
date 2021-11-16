export interface IMenu {
    name: string,
    icon: string,
    color: string,
    menus: Array<IMenu>
    path: string,
}
