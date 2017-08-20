import {BaseApiService} from './baseApiService';

export class ApiService extends BaseApiService {
    private static _instance: ApiService;
    constructor(config?: any) {
        if (typeof ApiService._instance == "undefined") {
            super(config);
            ApiService._instance = this;
        }
        return ApiService._instance;
    }
}
