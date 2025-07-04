function countBooksInCategory(categories) {
    let result = {};
    for (let category of categories) {
        result[category.category] = category.books.length;
    }
    return result;
}
const contagem = countBooksInCategory(booksByCategory);
console.log(contagem);