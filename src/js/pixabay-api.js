import axios from 'axios';

const apiKey = '43214760-0343bbd140b24677312cd0c55';
let currentPage = 1;
let currentKeyword = '';
const perPage = 15;

export async function fetchImages(keyword) {
  currentKeyword = keyword;
  currentPage = 1; // Reset page number when a new keyword is searched
  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        key: apiKey,
        q: keyword,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: currentPage,
        per_page: perPage,
      },
    });

    if (response.status !== 200) {
      throw new Error('Network response was not ok');
    }

    return response.data.hits;
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
}

export async function fetchMoreImages() {
  currentPage++; // Increment page number for the next set of images
  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        key: apiKey,
        q: currentKeyword,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: currentPage,
        per_page: perPage,
      },
    });

    if (response.status !== 200) {
      throw new Error('Network response was not ok');
    }

    return response.data.hits;
  } catch (error) {
    console.error('Error fetching more images:', error);
    return [];
  }
}
