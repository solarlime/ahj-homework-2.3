// Помещаем данные по умолчанию в локальное хранилище
// Сортируем и помещаем данные в ячейки локального хранилища
export default function sortItems(films, sorts) {
  localStorage.setItem('by default', JSON.stringify(films));
  sorts.forEach((operation) => {
    if ((operation.by === 'id') || (operation.by === 'year')) {
      films.sort((a, b) => a[operation.by] - b[operation.by]);
    } else if ((operation.by === 'title') || (operation.by === 'imdb')) {
      films.sort((a, b) => a[operation.by].toString().localeCompare(b[operation.by], 'ru'));
    }
    if (operation.how === 'descending') {
      films.reverse();
    }
    localStorage.setItem(`by ${operation.by} (${operation.how})`, JSON.stringify(films));
  });
}
