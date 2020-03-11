import tableRender from './tableRender';

// Обёртка для tableRender, реализующая рекурсивный вызов и бесконечную работу
export default function render(table, title, sorts, initSorts) {
  clearTimeout(render);
  tableRender(table, title, sorts[0]);
  sorts.shift();
  if (!sorts.length) {
    // eslint-disable-next-line no-param-reassign
    sorts = initSorts;
  }
  setTimeout(render, 2000, table, title, sorts, initSorts);
}
