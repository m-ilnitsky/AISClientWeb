
export class LogService {
    private static _instance: LogService;
    private isDebug: boolean;
    private isProduction: boolean;

    constructor() {
        if (typeof LogService._instance == "undefined") {
            LogService._instance = this;
            this.isDebug = true;
            this.isProduction = false;
        }
        return LogService._instance;
    }

    public message(message: string, config?:any) {
        if(this.isDebug){
            console.log(message, config);
        }
    }

    public info(message: string, config?:any) {
        if(this.isDebug){
            console.info(message, config);
        }
    }

    public warning(message: string, config?:any) {
        if(this.isDebug){
            console.warn(message, config);
        }
    }

    public error(message: string, config?:any) {
        if(this.isDebug){
            console.error(message);
        }
    }
}
