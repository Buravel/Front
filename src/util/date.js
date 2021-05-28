export const splitDate = (date) => {
    const yyyy = date.slice(0, 4);
    const mm = date.slice(4, 6);
    const dd = date.slice(6, 8);
    return [yyyy, mm, dd];
};
export const getNight = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const night = (end.getTime() - start.getTime()) / 1000 / 60 / 60 / 24;

    return night;
};

export const getToday = () => {
    const today = new Date();
    const year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1; // 월
    month = month < 10 ? `0${month}` : '' + month; // 월
    const date = today.getDate(); // 날짜
    return [year, month, date];
};
export const getNextDate = (_date, day = 1) => {
    const date = new Date(splitDate(_date).join('-'));
    date.setDate(date.getDate() + day);

    const y = date.getFullYear(); // 년도
    let m = date.getMonth() + 1; // 월
    m = m < 10 ? `0${m}` : '' + m; // 월
    const d = date.getDate(); // 날짜

    return [y, m, d];
};
