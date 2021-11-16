import {UrlEndpoint} from "./UrlEndpoint";
import {Http} from "./Http";
import {ServiceHtmlHelper} from "./ServiceHtmlHelper";
import {IFieldTable} from "../dto/IFieldTable";
import {IDto} from "../dto/IDto";
import {AxiosRequestConfig} from "axios";

export interface IService<T, R> {
    endpoint: UrlEndpoint;
    http: Http<T, R>;
    fields: Array<IFieldTable>;
    save: (object: T, params?: any, config?: AxiosRequestConfig) => Promise<R | void>;
    create: (object: T, params?: any, config?: AxiosRequestConfig) => Promise<R | void>;
    update: (object: T, params?: any, config?: AxiosRequestConfig) => Promise<R | void>
    list: (params?: any, filter?: (value: R) => Boolean, config?: AxiosRequestConfig) => Promise<Array<R>>;
    options: (params?: any, filter?: (value: R) => Boolean, config?: AxiosRequestConfig) => Promise<Array<{ text?: string, id?: string }>>
    one: (id: string, params?: any) => Promise<R | void>
    remove: (id: string, params?: any, config?: AxiosRequestConfig) => Promise<boolean>
}

export class Service<T extends IDto, R extends IDto> extends ServiceHtmlHelper<R> implements IService<T, R> {
    endpoint: UrlEndpoint;
    http: Http<T, R>;
    fields: Array<IFieldTable>;

    constructor(endpoint: string) {
        super();
        this.endpoint = new UrlEndpoint(endpoint);
        this.http = new Http();
        this.fields = [];
    }

    save(object: T, params: any, config: AxiosRequestConfig = {headers: {}}): Promise<R | void> {
        if (object.id) {
            return this.update(object, params, config)
        } else {
            return this.create(object, params, config)
        }
    }

    create(object: T, params: any, config: AxiosRequestConfig = {headers: {}}): Promise<R | void> {
        return this.http.post(this.endpoint.getUrlEndpointWithParams('/', params), object, config)
    }

    update(object: T, params: any, config: AxiosRequestConfig = {headers: {}}): Promise<R | void> {
        return this.http.put(this.endpoint.getUrlEndpointWithParams('/' + object.id, params), object, config)
    }

    list(params: any, filter: (value: R) => Boolean = (value) => !!value, config: AxiosRequestConfig = {headers: {}}): Promise<Array<R>> {
        return this.http.getArray(this.endpoint.getUrlEndpointWithParams('/', params), config)
    }

    options(params: any, filter: (value: R) => Boolean = (value) => !!value, config: AxiosRequestConfig = {headers: {}}): Promise<Array<{ text?: string, id?: string }>> {
        return this.list(params, filter, config).then(data => data.filter(filter).map(object => ({
            text: object.name,
            id: object.id
        })))
    }

    one(id: string, params: any, config: AxiosRequestConfig = {headers: {}}): Promise<R | void> {
        return this.http.getEntity(this.endpoint.getUrlEndpointWithParams('/' + id, params), config)
    }

    remove(id: string, params: any, config: AxiosRequestConfig = {headers: {}}): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.http.notifications.confirm('¿Desea eliminar?', () => {
                return this.http.del(this.endpoint.getUrlEndpointWithParams('/' + id, params), config).then(() => {
                    resolve(true);
                }).catch(e => {
                    reject(e.message);
                })
            }, () => {
                this.http.notifications.showText('Se ha cancelado');
                reject(false);
            })
        })
    }
}
