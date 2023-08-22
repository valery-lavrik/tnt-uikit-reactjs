export function pint(val: any) {
    // Унарный плюс нужен для преобразования пустой строки или null к 0, parseInt в этих случаях возвращает NaN
    return +parseInt(val, 10);
}

export function isInt(x: any) {
    if (x.trim() === '' || x === undefined || x === null) return false;
    return /^[0-9]+$/.test(x);
}

export function toFix(x: any, after: number = 2) {
    const floatX = parseFloat(x);

    if (floatX === pint(floatX)) return floatX;
    return floatX.toFixed(after);
}
