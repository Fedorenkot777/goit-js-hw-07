 const item = document.querySelectorAll('li.item');
 console.log(`Number of categories: ${item.length}`);

 item.forEach(category => {
    const categoryTitle = category.querySelector('h2').textContent;
    const categoryElements = category.querySelectorAll('li').length;

    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${categoryElements}`);
});