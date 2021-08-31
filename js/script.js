const addProductItem = document.querySelectorAll('.qty__item');

let title = document.querySelectorAll('.product-box__title');

title.forEach((item, index) => {
    console.log(item, index)});


addProductItem.addEventListener('click', () => {
    console.log(title)
})

// console.log(prodArr)