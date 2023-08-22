// export default function IsNumeric(input) {
// 	return (input - 0) === input && ('' + input).trim().length > 0;
// }

// https://www.techiedelight.com/ru/determine-string-numeric-javascript/
export default function isNumeric(n: number | string | boolean) {
    if (n === '' || typeof n === 'boolean') {
        return false;
    }

    // eslint-disable-next-line eqeqeq
    return !!Number(n) || n == 0;
}
