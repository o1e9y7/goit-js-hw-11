import {searchImgs } from '../main';

export function fetchImg() {
  const searchParams = new URLSearchParams({
    key: '43199195-3c37cdf4cc7127ca0d4f0ff40',
    
    q: searchImgs,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  const url = `https://pixabay.com/api/?${searchParams}`;

  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
}
