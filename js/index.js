// // Bookmark and Link Section

// const homeLink = document.querySelector('[data-js="home.link"]');
// const bookmarkLink = document.querySelector('[data-js="bookmark.link"]');
// const userLink = document.querySelector('[data-js="user.link"]');
// const homeSection = document.querySelector('[data-js="homeSection"]');
// const bookmarkSection = document.querySelector('[data-js="bookmarkSection"]');
// const userSection = document.querySelector('[data-js="userSection"]');

//showAnswer Section
// const showAnswerButton1 = document.querySelector(
//     '[data-js="showAnswerButton1"]'
// );
// const hiddenAnswer1 = document.querySelector('[data-js="answerQ01"]');

// showAnswerButton1.addEventListener('click', () => {
//     if (showAnswerButton1.innerText === 'Show Answer') {
//         showAnswerButton1.innerText = 'Hide Answer';
//         hiddenAnswer1.classList.toggle('hidden');
//     } else {
//         showAnswerButton1.innerText = 'Show Answer';
//         hiddenAnswer1.classList.toggle('hidden');
//     }
// });

// querySelectors
const allAnswerButton = document.querySelectorAll('.button__show');
const allBookMarkButton = document.querySelectorAll('.question-card__bookmark');

// Proof if Card is bookmarked, when true, Bookmark Icon Green
// get data from storage and check if Card ID is in storage.
allBookMarkButton.forEach((button) => {
    let bookmarkArray = localStorage.getItem('bookmarks');
    bookmarkArray = JSON.parse(bookmarkArray);
    if (bookmarkArray.includes(button.parentElement.id)) {
        button.classList.add('question-card__bookmark-marked');
    } else {
        button.classList.remove('question-card__boomark-marked');
    }
});

// Set Bookmark icon to Green when clicked
allBookMarkButton.forEach((button) => {
    button.addEventListener('click', () => {
        button.classList.toggle('question-card__bookmark-marked');
    });
});

//showAnswer all Button (Refactor)
allAnswerButton.forEach((button) => {
    button.addEventListener('click', (element) => {
        const parentElement = element.target.parentElement;
        const parentChildElement = parentElement.children[3];
        if (button.innerText === 'Show Answer') {
            button.innerText = 'Hide Answer';
            parentChildElement.classList.toggle('hidden');
        } else {
            button.innerText = 'Show Answer';
            parentChildElement.classList.toggle('hidden');
        }
    });
});

//Bookmark Button Function(Local Storage)
allBookMarkButton.forEach((button) => {
    button.addEventListener('click', (element) => {
        const cardId = element.target.parentElement.parentElement.id;
        let bookmarkArray = localStorage.getItem('bookmarks');
        // Check, if bookmarkArray has value...
        if (bookmarkArray === null) {
            bookmarkArray = [];
        } else {
            bookmarkArray = JSON.parse(bookmarkArray);
        }
        let index = bookmarkArray.indexOf(cardId);
        if (index !== -1) {
            bookmarkArray.splice(index, 1);
        } else {
            bookmarkArray.push(cardId);
        }
        localStorage.setItem('bookmarks', JSON.stringify(bookmarkArray));
    });
});
