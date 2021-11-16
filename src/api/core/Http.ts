import axios, {Axios, AxiosRequestConfig, AxiosRequestHeaders,} from 'axios';
import {Auth} from "./Auth";
import {Notifications} from "./Notifications";

export class Http<T, R> {

    http: Axios;
    session: Auth;
    notifications: Notifications;
    requestInterceptor: (config: AxiosRequestConfig) => AxiosRequestConfig


    constructor() {
        this.http = axios;
        this.session = new Auth();
        this.notifications = new Notifications()
        this.requestInterceptor = (config) => {
            if (!config.headers) {
                config.headers = {}
            }
            if (!config.headers["Authorization"] || config.headers["Authorization"] === '') {
                config.headers["Authorization"] = this.session.getToken();
                config.headers["Access-Control-Allow-Origin"] = "*";
            }
            return config;
        }
    }

    post(url: string, data: T, config: AxiosRequestConfig): Promise<R> {
        return this.http.post(url, data, this.requestInterceptor(config)).then(r => r.data)
            .catch(e => {
                this.notifications.error(e);
                throw new Error(e.message);
            })
    }

    getEntity(url: string, config: AxiosRequestConfig = {headers: {}}): Promise<R> {
        return this.http
            .get(url, this.requestInterceptor(config))
            .then(r => r.data)
            .catch(e => {
                this.notifications.error(e);
                throw new Error(e.message);
            })
    }

    getArray(url: string, config: AxiosRequestConfig = {headers: {}}): Promise<Array<R>> {
        return this.http
            .get(url, this.requestInterceptor(config))
            .then(r => Array.isArray(r.data) ? r.data : [])
            .catch(e => {
                this.notifications.error(e);
                throw new Error(e.message);
            })
    }

    put(url: string, data: T, config: AxiosRequestConfig): Promise<R> {
        return this.http.put(url, data, this.requestInterceptor(config))
            .then(r => r.data)
            .catch(e => {
                this.notifications.error(e);
                throw new Error(e.message);
            })
    }

    del(url: string, config: AxiosRequestConfig): Promise<R> {
        return this.http.delete(url, this.requestInterceptor(config))
            .then(r => r.data)
            .catch(e => {
                this.notifications.error(e);
                throw new Error(e.message);
            })
    }
}
