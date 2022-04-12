const titleButton = document.querySelectorAll('.accordeon__title'),
   textBox = document.querySelectorAll('.accordeon__text-box');

titleButton.forEach((item, index) => {
   item.addEventListener('click', () => {
      item.classList.toggle('active');
      // console.log('click')
      textBox[index].classList.toggle('active')
   })
});