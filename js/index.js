// // Bookmark and Link Section

// const homeLink = document.querySelector('[data-js="home.link"]');
// const bookmarkLink = document.querySelector('[data-js="bookmark.link"]');
// const userLink = document.querySelector('[data-js="user.link"]');
// const homeSection = document.querySelector('[data-js="homeSection"]');
// const bookmarkSection = document.querySelector('[data-js="bookmarkSection"]');
// const userSection = document.querySelector('[data-js="userSection"]');

//showAnswer Section
const showAnswerButton1 = document.querySelector(
    '[data-js="showAnswerButton1"]'
);
const showAnswerButton2 = document.querySelector(
    '[data-js="showAnswerButton2"]'
);
const hiddenAnswer1 = document.querySelector('[data-js="answerQ01"]');
const hiddenAnswer2 = document.querySelector('[data-js="answerQ02"]');

showAnswerButton1.addEventListener('click', () => {
    if (showAnswerButton1.innerText === 'Show Answer') {
        showAnswerButton1.innerText = 'Hide Answer';
        hiddenAnswer1.classList.toggle('hidden');
    } else {
        showAnswerButton1.innerText = 'Show Answer';
        hiddenAnswer1.classList.toggle('hidden');
    }
});
showAnswerButton2.addEventListener('click', () => {
    if (showAnswerButton2.innerText === 'Show Answer') {
        showAnswerButton2.innerText = 'Hide Answer';
        hiddenAnswer2.classList.toggle('hidden');
    } else {
        showAnswerButton2.innerText = 'Show Answer';
        hiddenAnswer2.classList.toggle('hidden');
    }
});
