import client from './client';

export const write = (plan) => {
    client.defaults.headers.common['Authorization'] = localStorage
        .getItem('token')
        .replaceAll('"', '');
    const body = {
        ...plan,
        postDtos: plan.postDtos.map((posts) =>
            posts.map((post) => {
                const {
                    title1,
                    title2,
                    price,
                    location,
                    rating,
                    hashTags,
                    memo,
                    category,
                    postImage,
                } = post;
                return {
                    postTitle: title1,
                    price: price,
                    postImage: postImage,
                    category: category,
                    rating: rating,
                    location: location.name, //추가
                    lat: location.lat,
                    lng: location.lng, // 수정
                    tags: hashTags.join(','), // 수정
                    memo: memo,
                };
            }),
        ),
    };
    return client.post('/plans', body);
};

export const edit = (plan) => {
    client.defaults.headers.common['Authorization'] = localStorage
        .getItem('token')
        .replaceAll('"', '');
    const body = {
        ...plan,
        postDtos: plan.postDtos.map((posts) =>
            posts.map((post) => {
                const {
                    title1,
                    title2,
                    price,
                    location,
                    rating,
                    hashTags,
                    memo,
                    category,
                    postImage,
                } = post;
                return {
                    postTitle: title1,
                    price: price,
                    postImage: postImage,
                    category: category,
                    rating: rating,
                    location: location.name, //추가
                    lat: location.lat,
                    lng: location.lng, // 수정
                    tags: hashTags.join(','), // 수정
                    memo: memo,
                };
            }),
        ),
    };
    return client.patch('/plans', body);
};
