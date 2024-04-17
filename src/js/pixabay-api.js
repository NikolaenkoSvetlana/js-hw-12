import axios from 'axios';

export async function fetchImages(keyword, page) {
  const apiKey = '43214760-0343bbd140b24677312cd0c55';
  const perPage = 15;
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${keyword}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`;

  try {
    const response = await axios.get(url);
    console.log(response);
    if (!response.data.hits || response.data.hits.length === 0) {
      return [];
    }

    return response.data;
  } catch (error) {
    console.error('Error fetching more images:', error);
    return [];
  }
}
