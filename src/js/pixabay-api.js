const apiKey = '43214760-0343bbd140b24677312cd0c55';

export function fetchImages(keyword) {
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${keyword}&image_type=photo&orientation=horizontal&safesearch=true`;
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      return data.hits;
    })
    .catch(error => {
      console.error('Error fetching images:', error);
      return [];
    });
}
