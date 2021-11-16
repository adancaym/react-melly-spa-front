import {IDto} from "../api/dto/IDto";
import {ChangeEvent, useState} from "react";

export const useForm = <T extends IDto>(initialData: T) => {

    const [formData, setFormData] = useState<T>(initialData);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    const getValue = (key: string)=> {
        return formData[key as keyof typeof formData]
    }

    return {formData, setFormData, onChange, getValue, ...formData}
}
