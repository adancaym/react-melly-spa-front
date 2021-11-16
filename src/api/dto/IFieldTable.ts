export interface IFieldTable {
    key: string,
    label: string,
    type: string,
    formatter?: (v: any) => string,
}
