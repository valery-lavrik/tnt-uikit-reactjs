type ParseUrlPropsType = {
    href: string;
    protocol: string;
    hostname: string;
    port: string;
    pathname: string;
    search: string;
    hash: string;
    url: string;
    params: { [key: string]: string };
};

// Парсим URL на состовляющие
export const parseURL = (url: string): ParseUrlPropsType => {
    url = url || document.location.href;

    //убираем хэш
    url = url.split('#')[0];

    const pattern = '^(([^:/\\?#]+):)?(//(([^:/\\?#]*)(?::([^/\\?#]*))?))?([^\\?#]*)(\\?([^#]*))?(#(.*))?$';
    const rx = new RegExp(pattern);
    const parts = rx.exec(url);

    const params_str = url.split('?')[1];
    let params_obj = {};

    if (params_str) {
        params_obj = params_str
            .replace(/(^\?)/, '')
            .split('&')
            .map(
                function (n: any) {
                    n = n.split('=');
                    // @ts-ignore
                    this[n[0]] = n[1];

                    // @ts-ignore
                    return this;
                }.bind({})
            )[0]; //	Параметры урла
    }

    // @ts-ignore
    let result: ParseUrlPropsType = {};
    result.href = parts?.[0] || '';
    result.protocol = parts?.[1] || '';
    result.hostname = parts?.[5] || '';
    result.port = parts?.[6] || '';
    result.pathname = parts?.[7] || '/';
    result.search = parts?.[8] || '';
    result.hash = parts?.[10] || '';
    result.url = result.protocol + '//' + result.hostname + result.pathname;
    result.params = params_obj; //	Параметры урла

    return result;
};
