// export const DOMAIN = process.env.NODE_ENV !== 'production' ? window.location.hostname.replace('www.', '') : '.svyaznoy.travel'
export const DOMAIN: string = window.location.hostname.replace('www.', '');

export const getCookie = <T>(name: string, def: T): T | string => {
    const matches = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/([\\.$?*|{}\\(\\)\\[\]\\/\\+^])/g, '\\$1') + '=([^;]*)'));
    return matches ? decodeURIComponent(matches[1]) : def;
};

export const setCookie = (name: string, value: string, options?: any): void => {
    options = options || {};

    let expires = options.expires;

    if (typeof expires === 'number' && expires) {
        let d = new Date();
        d.setTime(d.getTime() + expires * 1000);
        expires = options.expires = d;
    }

    if (expires && expires.toUTCString) {
        options.expires = expires.toUTCString();
    }

    value = encodeURIComponent(value);

    let updatedCookie = name + '=' + value;

    for (let propName in options) {
        updatedCookie += '; ' + propName;
        let propValue = options[propName];
        if (propValue !== true) {
            updatedCookie += '=' + propValue;
        }
    }

    document.cookie = updatedCookie;
};

export const deleteCookie = (name: string): void => {
    setCookie(name, '', {
        expires: -1,
        domain: DOMAIN,
    });
};

// export const emptyFunc = () => { }
