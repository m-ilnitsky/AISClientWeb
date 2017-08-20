import * as Redux from 'redux';
import {CurrencyApiService} from '../services/api/currencyApiService';

import {IGlobalState} from '../models/state/globalState';

export class AppActions {

    static init(): (dispatch: Redux.Dispatch<any>, getState: () => IGlobalState, thunkService: any) => any {
        return (dispatch: Redux.Dispatch<any>, getState: () => IGlobalState, thunkService: any) => {
            const currencyApiService = new CurrencyApiService({ baseURL: 'http://api.fixer.io' });

            const final = () => {
                dispatch({
                    type: 'App/Init'
                });
            };

            return currencyApiService.getByCode('usd')
                .then((currencyData) => {
                    dispatch({
                        type: 'App/Currency'
                        , payload: currencyData
                    });
                    final();
                }).catch(() => {
                    final();
                });

        };
    }

    static showSpinner(): (dispatch: Redux.Dispatch<any>, getState: () => IGlobalState, thunkService: any) => any {
        return (dispatch: Redux.Dispatch<any>, getState: () => IGlobalState, thunkService: any) => {
            return Promise.resolve(dispatch({
                type: 'App/Spinner/Show'
            }));
        };
    }

    static hideSpinner(): (dispatch: Redux.Dispatch<any>, getState: () => IGlobalState, thunkService: any) => any {
        return (dispatch: Redux.Dispatch<any>, getState: () => IGlobalState, thunkService: any) => {
            return Promise.resolve(dispatch({
                type: 'App/Spinner/Hide'
            }));
        };
    }
}
