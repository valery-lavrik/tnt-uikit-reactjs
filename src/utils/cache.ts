// @ts-ignore
import Storages from 'js-storage';

export function getFromCache(type: string, default_value: any = false): any {
    return Storages.localStorage.get(type) ?? default_value;
}

export function saveToCache(type: string, data: any = false, days: number = 0): void {
    if (days) {
        console.log('the days are not realized');
    }

    if (data === false) Storages.localStorage.remove(type);
    else {
        try {
            Storages.localStorage.set(type, data);
        } catch (error) {
            if (isQuotaExceeded(error)) {
                console.error('QUOTA STORAGE EXCEEDED', error);
                Storages.localStorage.remove(type);
            }
        }
    }
}

/**
 * проверка переполнен ли локалсторейдж...
 * @param {*} e
 */
function isQuotaExceeded(e: any): boolean {
    var quotaExceeded = false;
    if (e) {
        if (e.code) {
            // eslint-disable-next-line
            switch (e.code) {
                case 22:
                    quotaExceeded = true;
                    break;
                case 1014:
                    // Firefox
                    if (e.name === 'NS_ERROR_DOM_QUOTA_REACHED') quotaExceeded = true;
                    break;
            }
        } else if (e.number === -2147024882) {
            // Internet Explorer 8
            quotaExceeded = true;
        }
    }
    return quotaExceeded;
}
