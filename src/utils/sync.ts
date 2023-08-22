import $ from 'jquery';
import { getFromCache, saveToCache } from './cache';
import { getCookie } from './cookie';
import { AuthKey } from '../../pages/Auth/helpers';

type SyncStateRequests = { [key: string]: JQuery.jqXHR<any>[] };

function sync() {
    let state: SyncStateRequests = {};

    const getState = (type: string) => {
        return state[type] || [];
    };

    const setState = (type: string, value: JQuery.jqXHR<any>[] = []) => {
        state[type] = value;
        return value;
    };

    const abort = (type: string, afterAbortCallback: Function) => {
        getState(type).forEach((request) => {
            if (request.readyState !== 4 && request.abort) {
                request.abort();

                if (afterAbortCallback) afterAbortCallback();
            }
        });

        setState(type, []);
    };

    const add = (type: string, request: JQuery.jqXHR<any>) => {
        let exist = getState(type);
        exist.push(request);
        setState(type, exist);
    };

    const info = (type: string) => {
        let result = {
            active: 0,
            finished: 0,
        };

        const state = getState(type);
        state.forEach((request) => {
            request.readyState === 4 ? result.finished++ : result.active++;
        });

        return result;
    };

    const fetch = async (options: any, type: string, abortRequest: boolean = true, afterAbortCallback: Function = () => {}) => {
        if (abortRequest) abort(type, afterAbortCallback);

        // if (options.dataType === 'REST') {

        // 	options = $.extend(options, {
        // 		contentType: 'application/json',
        // 		dataType: 'json',
        // 		data: JSON.stringify(options.data)
        // 	});

        // } else if (options.method === 'FORM_DATA' || options.method === 'FORM_DATA_UPDATE') {

        // 	options = $.extend(options, {
        // 		method: options.method === 'FORM_DATA_UPDATE' ? 'PATCH' : 'POST',
        // 		processData: false,
        // 		contentType: false
        // 	});

        // }

        options.headers = {
            ...options.headers,
            Authorization: 'Bearer ' + getCookie(AuthKey, ''),
        };

        let cacheKey = encodeURIComponent(JSON.stringify(options)).replace(/\./g, '');
        if (cacheKey.length > 200) cacheKey = cacheKey.substring(0, 200);

        if (!!options && !!options.cacheDays) {
            const dataStorage = await getFromCache(cacheKey);
            if (!!dataStorage) {
                return new Promise((resolve) => resolve(dataStorage));
            }
        }

        let request = $.ajax(options);

        if (!!options && !!options.cacheDays) {
            request.then((result) => {
                if (!!result) saveToCache(cacheKey, result, options.cacheDays);
            });
        }

        add(type, request);

        return request;
    };

    return {
        fetch,
        abort,
        info,
    };
}

export default sync;
