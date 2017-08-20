import Axios from 'axios';
import {AxiosInstance} from 'axios';

export class BaseApiService {
    protected config: any;
    protected service: AxiosInstance

    constructor(config?: any) {
        this.config = config || {};
        this.service = Axios.create({
            baseURL: config.baseURL || ''
        });
    }

    get(url: string, config?: any): Promise<any> {
        return this.processRequest(this.service.get(url, config));
    }

    post(url: string, data?: any, config?: any): Promise<any> {
        data = data || {};
        var config = this.getProcessedConfig(config);
        return this.processRequest(this.service.post(url, data, config));
    }

    put(url: string, data?: any, config?: any): Promise<any> {
        data = data || {};
        return this.processRequest(this.service.put(url, data, config));
    }

    delete(url: string, config?: any): Promise<any> {
        return this.processRequest(this.service.delete(url, config));
    }

    processRequest(request: Promise<any>) {
        this.handleRequest(request);
        return request
            .then(response => this.handleResponse(response))
            .catch(data => this.handleError(data));
    }

    handleRequest(data: any) {
    }

    handleResponse(data: any) {
        return Promise.resolve(data);
    }

    handleError(data: any) {
        return Promise.reject(data);
    }

    private getProcessedConfig(config: any): any {
        let currentConfig = { ...config, ...this.config};
        currentConfig.headers = currentConfig.headers || {};
        return currentConfig;
    }
} 
