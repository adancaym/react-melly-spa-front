import {Service} from "../core/Service";
import {IDto} from "../dto/IDto";

export interface IClients extends IDto {
    nombre: string
    apellidoPaterno: string
    apellidoMaterno: string
    edad: number
}


export class ClientsService extends Service<IClients, IClients> {

    constructor() {
        super('clients');
        this.fields = [
            {
                key: 'id',
                label: 'Identificador',
                type: 'none',
            },
            {
                key: 'createdAt',
                label: 'Fecha de creación',
                type: 'none',
                formatter: this.date
            },
            {
                key: 'updatedAt',
                label: 'Fecha de actualizacion',
                type: 'none',
                formatter: this.date
            },
            {
                key: 'nombre',
                label: 'nombre',
                type: 'string',
            },
            {
                key: 'apellidoPaterno',
                label: 'apellidoPaterno',
                type: 'string'
            },
            {
                key: 'apellidoMaterno',
                label: 'apellidoMaterno',
                type: 'string'
            },
            {
                key: 'edad',
                label: 'edad',
                type: 'number'
            }
        ]
    }
}
