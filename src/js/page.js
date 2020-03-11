import render from './render';
import tableRender from './tableRender';
import sortItems from './sortItems';
import * as data from '../data.json';

/** Создаём массив возможных сортировок,
 *  подключаем data.json, собираем функции
 *  вместе и запускаем
 */
export default function init() {
  const body = document.querySelector('body');
  const title = document.getElementById('table-title');
  const table = document.createElement('table');
  const sorts = [
    { by: 'id', how: 'ascending' },
    { by: 'id', how: 'descending' },
    { by: 'title', how: 'ascending' },
    { by: 'title', how: 'descending' },
    { by: 'year', how: 'ascending' },
    { by: 'year', how: 'descending' },
    { by: 'imdb', how: 'ascending' },
    { by: 'imdb', how: 'descending' },
  ];
  table.setAttribute('class', 'table');

  sortItems(data.films, sorts);
  tableRender(table, title, { by: 'default', how: 'default' });
  body.insertAdjacentElement('beforeend', table);

  // Первый запуск
  setTimeout(render, 2000, table, title, sorts, [...sorts]);
}
