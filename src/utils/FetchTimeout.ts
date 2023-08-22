/*
	В стандартном запросе fetch нет таймаута.
	Эта обертка нужна чтоб реализовать таймаут
*/

interface TimeoutRequestInitType extends RequestInit {
    timeout?: number;
}

export default function FetchTimeout(input: RequestInfo, init?: TimeoutRequestInitType): Promise<Response> {
    return new Promise((resolve, reject) => {
        const timeout = init?.timeout ?? 10;

        const timer = setTimeout(() => reject('JS_TIMEOUT'), 1000 * timeout);

        fetch(input, init)
            .then((res) => {
                clearInterval(timer);
                resolve(res);
            })
            .catch((err) => {
                clearInterval(timer);
                reject(err);
            });
    });
}
