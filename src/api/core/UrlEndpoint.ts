export class UrlEndpoint {
    backendUrl: string | undefined;
    backendApiUrl: string | undefined;
    endpoint: string;

    constructor(endpoint: string) {
        this.backendUrl = 'http://localhost:9000';
        this.backendApiUrl = 'http://localhost:9000/api/';
        this.endpoint = endpoint;
    }

    getUrlEndpoint() {
        return this.backendApiUrl + this.endpoint;
    }

    getUrlEndpointWithParams(uri: string, params: any) {
        let url = this.getUrlEndpoint() + uri;
        if (params) {
            const parameters = new URLSearchParams(params);
            url += '?'
            url += parameters.toString();
        }
        return url.toString();
    }
}
