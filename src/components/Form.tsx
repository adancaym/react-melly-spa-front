import {IDto} from "../api/dto/IDto";
import {IFieldTable} from "../api/dto/IFieldTable";
import {useForm} from "../hooks/useForm";
import {FormEventHandler, useEffect, useState} from "react";

interface FormProps<T> {
    fields: Array<IFieldTable>,
    item: T
    onSubmit: (item: T) => void
}

export const Form = <T extends IDto>(props: FormProps<T>) => {

    const {fields, item, onSubmit} = props;
    const {formData, onChange, setFormData} = useForm<T>(item)
    useEffect(() => {
        setFormData(item)
    }, [item]);

    const submit = () => {
        onSubmit(formData);
    }
    const renderSwitch = ({type, key}: IFieldTable) => {
        switch (type) {
            case 'string': {
                return <input
                    onChange={onChange}
                    className="form-control"
                    name={key}
                    // @ts-ignore
                    value={formData[key as keyof typeof formData]}
                    type="text"
                />
            }
            case 'number': {
                return <input
                    onChange={onChange}
                    className="form-control"
                    name={key}
                    // @ts-ignore
                    value={formData[key as keyof typeof formData]}
                    type="number"
                />
            }
        }
    }
    return (
        <form onSubmit={(event) => event.preventDefault()}>
            {fields.map(field => (
                field.type === 'none' ? '' :
                    <div className="form-group" key={field.key}>
                        <label className="label-form" htmlFor={field.key}>{field.label}</label>
                        {renderSwitch(field)}
                    </div>
            ))}
            <button type={"submit"} onClick={submit} className={"btn btn-primary"}>Guardar</button>
        </form>

    );


}
