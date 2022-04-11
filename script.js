"use strict";

const book = document.querySelectorAll(".book");
const adv = document.querySelector(".adv");
const body = document.querySelector("body");
//const h2 = document.querySelectorAll("h2");
const a = document.querySelectorAll("a");

const ul = document.querySelectorAll("ul");
const li6 = ul[2].querySelectorAll("li");
const newLi = document.createElement("li");

const li2 = ul[0].querySelectorAll("li");

const li5 = ul[5].querySelectorAll("li");

// 1 - восстановить порядок книг
book[1].after(book[0]); // Поставить книгу 0 после книги 1
book[5].after(book[2]); // Поставить книгу 2 после книги 5
book[4].after(book[3]); // Поставить книгу 3 после книги 4

// 2 - Заменить картинку заднего фона на другую из папки image

body.style.backgroundImage = "url(/image/you-dont-know-js.jpg)";

// 3 -Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")

//h2[4].replaceWith("Книга 3. this и Прототипы Объектов");
//const newH2 = document.createElement("h2");

//newH2.textContent = "Книга 3. this и Прототипы Объектов"

//h2[4].textContent = "Книга 3. this и Прототипы Объектов";
a[4].textContent = "Книга 3. this и Прототипы Объектов";

// 4 - удалить рекламу со страницы
adv.remove();

// 5 -Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, поможет dev tools)

//5.1 - книга 2
li2[9].after(li2[2]);
li2[3].after(li2[8]);
li2[3].after(li2[6]);

//5.2 - книга 5

li5[1].after(li5[9]); //  после строки 1 поставить строку 9
li5[2].after(li5[3]);
li5[4].after(li5[2]);
li5[7].after(li5[5]);

// 6 - в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место

newLi.textContent = "Глава 8: За пределами ES6";
li6[8].append(newLi);
//li6[8].after("Глава 8: За пределами ES6"); // Поставить текст после главы 8
//li6[8].innerHTML = "<li>Глава 8: За пределами ES6</li>"; // Поставить текст после главы 8

// ----

// console.log(body);

// console.log(a[4]);

// console.log(ul);

console.log(li5);
