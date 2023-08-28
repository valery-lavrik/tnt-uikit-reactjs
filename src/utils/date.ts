export const dateFormatter = (date: Date, time?: boolean) => {
    const formatDate =
        date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const formatMonth =
        date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    if (!time) return [date.getFullYear(), formatMonth, formatDate].join("-");

    const formatTime = time && `${date.getHours()}:${date.getMinutes()}`;
    return (
        [date.getFullYear(), formatMonth, formatDate].join("-") +
        `T${formatTime}`
    );
};
