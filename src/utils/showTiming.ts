import declOfNum from './fixNumSuffix';
import { pint } from './pint';

type ShowTimingDictType = {
    hoursTextsArray: [string, string, string];
    hoursShortTetx: string;
    minutesShortText: string;
    minutesTextsArray: [string, string, string];
};

const showTiming = (
    duration: number,
    dict: ShowTimingDictType | null = null
): string => {
    const hours = pint(duration / 60);
    const minutes = duration % 60;

    const dictDef: ShowTimingDictType = !!dict
        ? dict
        : ({
              hoursTextsArray: [' час', ' часа', ' часов'],
              hoursShortTetx: 'ч',
              minutesShortText: 'м',
              minutesTextsArray: [' минута', ' минуты', ' минут'],
          } as ShowTimingDictType);

    const result =
        (hours !== 0
            ? `${hours}${showTimeText(
                  hours,
                  minutes,
                  dictDef.hoursTextsArray,
                  dictDef.hoursShortTetx
              )}`
            : '') +
        (minutes !== 0
            ? ` ${minutes}${showTimeText(
                  minutes,
                  hours,
                  dictDef.minutesTextsArray,
                  dictDef.minutesShortText
              )}`
            : '');

    return result;
};

const showTimeText = (
    term1: number,
    term2: number,
    wordsArray: [string, string, string],
    shortText: string
) => (!!term2 ? shortText : declOfNum(term1, wordsArray));

export default showTiming;
