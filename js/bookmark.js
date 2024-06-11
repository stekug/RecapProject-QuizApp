//Unhide all Cards, which are in Local Storage
const bookmarkedCards = document.querySelectorAll('.question-card');
let bookmarkArray = localStorage.getItem('bookmarks');

bookmarkedCards.forEach((card) => {
    let cardId = card.id;
    if (bookmarkArray.includes(cardId)) {
        card.classList.remove('hidden');
    }
});

// Set Bookmark icon to Green
const bookmarkButton = document.querySelectorAll('.question-card__bookmark');

bookmarkButton.forEach((button) => {
    button.classList.add('question-card__bookmark-marked');
});

//showAnswer all Button (Refactor)
const allAnswerButton = document.querySelectorAll('.button__show');
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
const allBookMarkButton = document.querySelectorAll('.question-card__bookmark');
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
        location.reload();
    });
});
