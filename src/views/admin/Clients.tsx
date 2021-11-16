import {IClients, ClientsService} from "../../api/services/ClientsService";
import {useService} from "../../hooks/useService";
import {useEffect, useState} from "react";
import {Table} from "../../components/Table";
import {Form} from "../../components/Form";

export const Clients = () => {

    const service = new ClientsService();


    const [selectedItem, setSelectedItem] = useState<IClients>();

    const {dataArray, list, save, remove, fields} = useService<IClients, IClients>({service})


    const onSelect = (item: IClients) => {
        setSelectedItem(item);
    }

    const onSubmit = (item: IClients) => {
        save(item)
        setSelectedItem(undefined)
    }
    const onDelete = (id: string | undefined) => {
        if (id) remove(id)
    }
    const addNew = () => {
        setSelectedItem({
            id: '',
            edad: 0,
            apellidoMaterno: "",
            name: "",
            nombre: "",
            apellidoPaterno: ""
        })
    }

    useEffect(() => {
        list();
    }, [])

    return (
        <>
            <div className="row">
                <div className="col-9">
                    <button onClick={addNew} className={"btn btn-primary"}>Nuevo</button>
                    <Table fields={fields} items={dataArray} onSelect={onSelect} onDelete={onDelete}/>
                </div>
                <div className="col-3">
                    {
                        !!selectedItem
                            ?
                            <Form fields={fields} onSubmit={item => onSubmit(item)} item={selectedItem}/> :
                            'Selecciona un elemento de la tabla'
                    }
                </div>
            </div>
        </>
    );
}
