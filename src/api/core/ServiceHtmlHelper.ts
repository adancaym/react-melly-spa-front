import {IDto} from "../dto/IDto";

export class ServiceHtmlHelper<R extends IDto> {

    arrayToListHtml(value: Array<R>) {
        if (value.length > 0)
            return '<ul>' + value.map(grupo => '<li>' + grupo.name + '</li>').join('') + '</ul>'
        else
            return '<b>No hay asignaciones</b>';
    }
    booleanToHuman(v: boolean) {
        return v ? 'Si' : 'No'
    }

    objectName(v: R) {
        return v.name
    }

    currency(v: string) {
        return '$' + parseFloat(v).toFixed(2)
    }

    percent(v: string) {
        return parseFloat(v).toFixed(2) + ' %'
    }

    size(v: Array<R>) {
        if (v) return Array.from(v).length + ' elementos';
        else return '0 elementos'
    }
    date(date: Date){
        return new Date(date).toLocaleDateString();
    }
}
