// Урок 10. Семинар. Работа с JSON
// Задание
// 1. Получите данные по адресу https://fakestoreapi.com/products.
// 2. Создайте файл data.js.
// 3. В файле data.js создайте переменную dataJSON, которая будет
// хранить эти данные в формате JSON.
// 4. Создайте вторую переменную data, в которой сохраните данные в
// формате массива на основе dataJSON.
// 5. Создайте файл index.html.
// 6. Подключите data.js в index.html.
// 7. Сформируйте контент из данных (картинка, заголовок, описание,
// цена и кнопка “Add to Cart”).
// 8. Добавьте данный контент в верстку в виде списка ul и li.
// 9. Добавьте стили при необходимости (по желанию).


const dataHomeWork = JSON.parse(dataForHomeWork);
console.log(dataHomeWork);

const boxElements = document.querySelector('.box');

dataHomeWork.forEach(element => {
    boxElements.insertAdjacentHTML('beforeend', `
    <div class="box__customer">
        <div>
            <img class="box__img" src="${element.customer.img}">
        </div>
        <div class="box__content">
            <h1 class="box__main-title">${element.customer.name}</h1>
            <h3 class="box__title">Customer phone: </h3>
            <a class="box__link" href="tel:+${element.customer.phone}">${element.customer.phone}</a>
            <h3 class="box__title">Customer address: </h3>
            <h2 class="box__data">${element.customer.address.state}</h2>
            <h2 class="box__data">${element.customer.address.city}</h2>
            <h2 class="box__data">${element.customer.address.street}</h2>
        </div>
    </div>
    `)
});
