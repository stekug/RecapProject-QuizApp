const homeLink = document.querySelector('[data-js="home.link"]');
const bookmarkLink = document.querySelector('[data-js="bookmark.link"]');
const userLink = document.querySelector('[data-js="user.link"]');

const homeSection = document.querySelector('[data-js="homeSection"]');
const bookmarkSection = document.querySelector('[data-js="bookmarkSection"]');
const userSection = document.querySelector('[data-js="userSection"]');

bookmarkSection.classList.add('hide');
userSection.classList.add('hide');

homeLink.addEventListener('click', () => {
    homeLink.classList.add('nav__links-current');
    bookmarkLink.classList.remove('nav__links-current', 'hide');
    userLink.classList.remove('nav__links-current', 'hide');
    homeSection.classList.remove('hide');
    bookmarkSection.classList.add('hide');
    userSection.classList.add('hide');
});

bookmarkLink.addEventListener('click', () => {
    homeLink.classList.remove('nav__links-current');
    bookmarkLink.classList.add('nav__links-current');
    userLink.classList.remove('nav__links-current');
    homeSection.classList.add('hide');
    bookmarkSection.classList.remove('hide');
    userSection.classList.add('hide');
});

userLink.addEventListener('click', () => {
    homeLink.classList.remove('nav__links-current');
    bookmarkLink.classList.remove('nav__links-current');
    userLink.classList.add('nav__links-current');
    homeSection.classList.add('hide');
    bookmarkSection.classList.add('hide');
    userSection.classList.remove('hide');
});
