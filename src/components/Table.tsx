import {IFieldTable} from "../api/dto/IFieldTable";
import {IDto} from "../api/dto/IDto";

interface TableProps<R> {
    fields: Array<IFieldTable>
    items: Array<R>
    onSelect: (item: R) => void
    onDelete: (id: string | undefined) => void
}


export const Table = <R extends IDto>({items, fields, onSelect, onDelete}: TableProps<R>) => {


    return (
        <table className="table table-responsive table-sm table-hover table-striped">
            <thead>
            <tr>
                {fields.map(field => (<td key={field.key}>{field.label}</td>))}
            </tr>
            </thead>
            <tbody>

            {items.map(item =>
                <tr key={item.id}
                    onClick={() => onSelect(item)}
                >{
                    fields.map
                    (field =>
                        <td key={field.key + item.id}>
                            {field.formatter ? field.formatter(item[field.key as keyof typeof item]) : item[field.key as keyof typeof item]}
                        </td>
                    )}
                    <td>
                        <button className={"btn btn-danger"} onClick={() => onDelete(item.id)}>Eliminar</button>
                        <button className={"btn btn-info"} onClick={() => onSelect(item)}>Editar</button>
                    </td>
                </tr>)
            }


            </tbody>

        </table>

    );

}
