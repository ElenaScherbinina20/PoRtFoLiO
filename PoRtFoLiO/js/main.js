//создвем переменную в которую ложим кнопку меню
let menuToggle= document.querySelector('#menu-toggle');
//создвем переменную в которую ложим меню
let menu = document.querySelector('.header-nav');
//отслеживаем клик по кнопке меню и запускаем функцию 
menuToggle.addEventListener('click', function(event){
  //отменяем стандартное поведение ссылки
  event.preventDefault();
  //вешаем класс на меню, когда кликнули на кнопку меню
  menu.classList.toggle('visible');
})