import {AppState, IAppState} from '../models/state/appState';

export default class AppReducer {
    static handle(state: any = new AppState, action: any): IAppState {
        switch (action.type) {
            case 'App/Init': {
                return {...state, isLoading: false, isInitializing: false};
            }
            case 'App/Authorize': {
                return {...state, isAuthorized: true };
            }
            case 'App/Disauthorize': {
                return {...state, ...{ isAuthorized: false }};
            }
            case 'App/Spinner/Show': {
                return {...state, ... { isLoading: true }};
            }
            case 'App/Spinner/Hide': {
                return {...state, ... { isLoading: false }};
            }
            case 'App/Currency': {
                const currency = action.payload;
                return {...state, ... { currency: currency }};
            }
            default: {
                return state;
            }
        }
    }
}