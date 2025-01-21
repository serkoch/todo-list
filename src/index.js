const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const menuClose = document.querySelector('.menu-close');


menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

menuClose.addEventListener('click', () => {
  sidebar.classList.toggle('active');
})

