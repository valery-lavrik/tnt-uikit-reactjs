import $ from 'jquery';

const scrollToElement = ($el: JQuery<HTMLElement>, offset: number = 0, speed: number = 500): void => {
    let top = 0;

    $el = $($el);
    if (!$el.length) return;

    // @ts-ignore
    if ($el && $el.length) top = $el.offset().top - offset;

    $('body,html').animate(
        {
            scrollTop: top,
        },
        speed ? speed : 500
    );
};

export const scrollToTop = (top: number = 0, speed: number = 500): void => {
    $('body,html').animate(
        {
            scrollTop: top,
        },
        speed ? speed : 500
    );
};

export default scrollToElement;
