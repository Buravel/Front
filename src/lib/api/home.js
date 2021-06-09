import client from './client';

export const planList = ({ keyword, min, max, sort, page }) => {
    return client.get(
        `http://34.64.93.115/index/search?keyword=${keyword}&min=${min}&max=${max}&sort=${sort}&page=${page}`,
    );
};
