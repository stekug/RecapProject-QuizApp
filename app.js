const homeLink = document.querySelector('[data-js="home.link"]');
const userLink = document.querySelector('[data-js="user.link"]');
const bookmarkLink = document.querySelector('[data-js="bookmark.link"]');

homeLink.addEventListener('click', () => {
    homeLink.classList.add('nav__links-current');
    bookmarkLink.classList.remove('nav__links-current');
    userLink.classList.remove('nav__links-current');
});
bookmarkLink.addEventListener('click', () => {
    homeLink.classList.remove('nav__links-current');
    bookmarkLink.classList.add('nav__links-current');
    userLink.classList.remove('nav__links-current');
});
userLink.addEventListener('click', () => {
    homeLink.classList.remove('nav__links-current');
    bookmarkLink.classList.remove('nav__links-current');
    userLink.classList.add('nav__links-current');
});
