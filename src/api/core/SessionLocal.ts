export class SessionLocal {

    storage: Storage;

    constructor() {
        this.storage = sessionStorage;
    }

    set(key: string, value: any) {
        this.storage.setItem(key, JSON.stringify(value))
    }

    get(key: string): string | null {
        const value = this.storage.getItem(key)
        return value ? JSON.parse(value) : null
    }

    del(key: string) {
        this.storage.removeItem(key);
    }

}
