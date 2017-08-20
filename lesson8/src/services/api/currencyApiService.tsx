import {BaseApiService} from './baseApiService';

export class CurrencyApiService extends BaseApiService {
    private static _instance: CurrencyApiService;

    constructor(config?: any) {
        if (typeof CurrencyApiService._instance == "undefined") {
            super(config);
            CurrencyApiService._instance = this;
        }
        return CurrencyApiService._instance;
    }

    public getByCode(code: string): Promise<any> {
        return this.get(`/latest?base=${code}`)
        .then((response: any) => {
            return response.data;
        });
    }  
}
