const shape = document.querySelector('.moving-shape');
const shape2 = document.querySelector('.moving-shape-2');
const shape3 = document.querySelector('.moving-shape-2');

setInterval(changeTheShape, 800);

function changeTheShape() {
    shape.style.setProperty('border-radius', generateBorderRadius());
    shape2.style.setProperty('border-radius', generateBorderRadius());
    shape3.style.setProperty('border-radius', generateBorderRadius());
}

function generateBorderRadius() {
    return generateRandomNumberBetween(40, 80) + '%' +
        generateRandomNumberBetween(50, 90) + '%' +
        generateRandomNumberBetween(40, 80) + '%' +
        generateRandomNumberBetween(50, 80) + '%' + '/' +
        generateRandomNumberBetween(40, 90) + '%' +
        generateRandomNumberBetween(50, 80) + '%' +
        generateRandomNumberBetween(40, 80) + '%' +
        generateRandomNumberBetween(50, 90) + '%'

}

function generateRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}



const blob = document.querySelector('.shape');
blob.addEventListener('click', displayRandomWord);
const blobText = document.querySelector('.blob-text');
const words = ['Watermelon', 'Chocolate', 'Pasta', 'Apple', 'Tomato', 'Rice', 'Lemonade', 'Cumin', 'Pepper', 'Kiwi',
    'Couscous', 'Tortilla', 'Coffee', 'Lemongrass', 'Cayenne', 'Green tea', 'Milk', 'Salmon', 'Kale'];



function displayRandomWord() {
    const number = generateRandomNumberBetween(0, words.length-1);
    blobText.innerHTML = words[number];
}