const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

function createListsElements(listId, className, elements) {
  const listEl = document.querySelector(listId);
  const listItems = [];

  elements.forEach(element => {
    listItems.push(createListItem(className, element));
  });

  listEl.append(...listItems);
  return listEl;
}

function createListItem(className, content) {
  const listItemEl = document.createElement('li');
  listItemEl.classList.add(className);
  listItemEl.textContent = content;
  return listItemEl;
}

createListsElements('#ingredients', 'item', ingredients);