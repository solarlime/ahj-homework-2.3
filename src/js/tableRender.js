/* eslint-disable no-param-reassign */
import * as numeral from 'numeral';
import renderTableTitle from './renderTableTitle';

// Функция для очистки таблицы и отрисовки новой таблицы в соответствии с сортировкой
export default function tableRender(table, title, operation) {
  Array.from(table.children).forEach((item) => item.remove());
  const settings = operation.by === 'default' ? `by ${operation.by}` : `by ${operation.by} (${operation.how})`;
  title.innerText = settings;
  renderTableTitle(table, operation.by, operation.how);
  JSON.parse(localStorage.getItem(settings)).forEach((item) => {
    table.innerHTML += `${'<tr class="table-row">\n'
    + `  <td class="table-cell table-cell-id">${item.id}</td>\n`
    + `  <td class="table-cell">${item.title}</td>\n`
    + `  <td class="table-cell">${item.year}</td>\n`
    + `  <td class="table-cell">imdb: ${numeral(item.imdb).format('0.0')}</td>\n`
    + '</tr>\n'}`;
  });
}
