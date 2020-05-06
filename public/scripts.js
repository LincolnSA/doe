const btn = document.querySelector('header button');
const form = document.querySelector('.form');

btn.addEventListener('click', () => {
    form.classList.toggle('hide');
});


