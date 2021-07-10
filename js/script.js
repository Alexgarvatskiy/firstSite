/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';


const moveDB = {
    movies: [
        'Логан',
        'Лига Справедливости',
        'Ла-ла Ленд',
        'Одержимость',
        'Скот пиллигрим против...'


    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list');



// 1)      
adv.forEach(item => {
    item.remove();
});


// 2)
genre.textContent = 'драма';


// 3)
poster.style.backgroundImage = 'url("img/bg.jpg")';


// 4)
movieList.innerHTML =  ' ';
moveDB.movies.sort();

moveDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item">${i + 1}. ${film}
        <div class="delete"></div>
    </li>`;
});
