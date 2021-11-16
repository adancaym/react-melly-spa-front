import {IService} from "../api/core/Service";
import {useState} from "react";
import {AxiosRequestConfig} from "axios";
import {ISelectDataDto} from "../api/dto/ISelectDataDto";

interface useServiceProps<T, R> {
    service: IService<T, R>
    query?: any
}

export const useService = <T, R>({service, query}: useServiceProps<T, R>) => {

    const [dataArray, setDataArray] = useState<Array<R>>([]);
    const [dataOptionsArray, setDataOptionsArray] = useState<Array<ISelectDataDto>>([]);

    const {fields} = service;

    const list = (filter?: () => boolean, config?: AxiosRequestConfig) => {
        service.list(query, filter, config).then(data => {
            setDataArray(data)
        })
    }
    const options = (filter?: () => boolean, config?: AxiosRequestConfig) => {
        service.options(query, filter, config).then((r) => {
            setDataOptionsArray(r);
        })
    }
    const save = (object: T, params?: any, config?: AxiosRequestConfig) => {
        service.save(object, params, config).then(() => {
            list(query);
        })
    }
    const remove = (id: string, params?: any, config?: AxiosRequestConfig) => {
        service.remove(id, params, config).then(() => {
            list(query);
        })
    }

    return {
        fields,
        dataArray,
        dataOptionsArray,
        options,
        save,
        remove,
        list,
    };
}
