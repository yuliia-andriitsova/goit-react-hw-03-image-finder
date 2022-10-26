// import axios from 'axios';

// const imageApi = axios.create({
//   baseURL: 'https://pixabay.com/api/',
//   params: {
//     key: '30085761-1d63a83edc62b581f045216a3',
//     image_type: 'photo',
//     orientation: 'horizontal',
//     per_page: 12,
//     page: 1,
//     q: '',
//   },
// });

// export const getPhoto = async params => {
//   const { data } = await imageApi.get('', { params });
//   return data.hits;
// };

import axios from 'axios';
const imageApi = axios.create({
  baseURL: 'https://pixabay.com/api',
  params: {
    key: '30085761-1d63a83edc62b581f045216a3',
  },
});
export const getPhoto = async query => {
  const { data } = await imageApi.get('/', {
    params: {
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
      page: 1,
    },
  });
  return data.hits;
};
