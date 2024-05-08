// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:
// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).
// ====================================================================

// const categoriesList = document.getElementById('categories');
// const categoriesList = document.querySelector('ul');
// const categoryItems = categoriesList.querySelectorAll('.item');

const categoryItems = document.querySelectorAll('.item');

console.log('Number of categories:', categoryItems.length);

categoryItems.forEach(item => {
  const categoryTitle = item.querySelector('h2').textContent;

  const categoryItems = item.querySelectorAll('li');

  console.log(`Category: ${categoryTitle}`);

  console.log(`Elements: ${categoryItems.length}`);
});
