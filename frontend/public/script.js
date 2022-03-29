// var positive = document.getElementsByClassName('positive-title'); 
// var negative = document.getElementsByClassName('negative-title'); 

// var positiveBox = document.getElementsByClassName('positive-container');
// var negativeBox = document.getElementsByClassName('negative-container'); 

// const postiveShow = () => {
//     positiveBox.classList.add('show')
//     negativeBox.classList.add('unshow')
// };

// const negativeShow = () => {
//     negativeBox.classList.add('show')
//     positiveBox.classList.add('unshow')
// };

const rows = [...document.querySelectorAll('.vi-row')]; 
const nextButton = [...document.querySelectorAll('.next-button')];
const previousButton = [...document.querySelectorAll('.previous-button')];
console.log(nextButton)
rows.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect(); 
    let containerWidth = containerDimensions.width; 
    nextButton[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth; 
    }); 
    previousButton[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth; 
    })
})

