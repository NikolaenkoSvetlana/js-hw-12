import axios from 'axios';

const apiKey = '43214760-0343bbd140b24677312cd0c55';
let page = 1;
const per_page = 15; // Кількість зображень на сторінці
let currentKeyword = '';

export async function fetchImages(keyword, pageNum) {
  try {
    // Перевірка чи потрібно повернутися до початкової сторінки при новому запиті
    if (keyword !== currentKeyword) {
      currentKeyword = keyword;
      page = 1; // Скидаємо сторінку до початкового значення при новому пошуку
    } else {
      page = pageNum; // Встановлюємо поточну сторінку для пагінації
    }

    const url = `https://pixabay.com/api/?key=${apiKey}&q=${keyword}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${per_page}`;
    const response = await axios.get(url);

    if (response.status !== 200) {
      throw new Error('Network response was not ok');
    }

    return response.data.hits;
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
}
