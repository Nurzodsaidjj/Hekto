const open__modal = document.querySelector('.open__modal');
const modal = document.querySelector('.modal');
const close_btn = document.querySelector('.close_btn');

open__modal.addEventListener('click', () => {
  modal.classList.add('active');
});

close_btn.addEventListener('click', () => {
  modal.classList.remove('active');
});
