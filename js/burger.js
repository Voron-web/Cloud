const button = document.querySelector('.menu-button'),
   menu = document.querySelector('.menu'),
   menuItems = document.querySelectorAll('#menu-item')


button.addEventListener('click', function () {
   console.log(menu);
   button.classList.toggle('active');
   menu.classList.toggle('active');
})