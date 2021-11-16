import {SessionLocal} from "./SessionLocal";
import {IUserFull} from "../dto/IUserFull";
import {IMenu} from "../dto/IMenu";

export class Auth {
    session: SessionLocal;

    constructor() {
        this.session = new SessionLocal();
    }

    isLoggedIn(): boolean {
        return !!this.getToken();
    }

    login(user: any, token: string) {
        this.setUser(user);
        this.setToken(token)
    }

    logout() {
        this.removeToken();
        this.removeToken();
    }

    getUser(): IUserFull {
        return <IUserFull>JSON.parse(<string>this.session.get('user'));
    }

    getPermisos(): Array<String> {
        const grupos = this.getUser().groups;
        const permisos: Array<string> = []
        const getPaths = (menus: Array<IMenu>) => {
            menus.forEach(menu => {
                permisos.push(menu.path)
                getPaths(menu.menus);
            })
        }
        grupos.forEach(grupo => getPaths(grupo.menus));
        return permisos.filter(p => p !== '');
    }

    canIntoPage(permiso: string) {
        return !!this.getPermisos().find(p => permiso === p)
    }

    setUser(user: IUserFull) {
        this.session.set('user', user)
    }

    getToken(): string {
        return <string>this.session.get('token');
    }

    setToken(token: string): void {
        const Bearer = 'Bearer ' + token;
        this.session.set('token', Bearer)
    }

    removeToken() {
        this.session.del('token');
    }

    removeUser() {
        this.session.del('user');
    }


}
