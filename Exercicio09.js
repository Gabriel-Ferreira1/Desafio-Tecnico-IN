function authors(categories) {
    let result = [];
    for (let category of categories) {
        for (let book of category.books) {
            if (!result.includes(book.author)) {
                result.push(book.author);
            }
        }
    }
    return result;
}
const autores = authors(booksByCategory);
console.log(autores);
