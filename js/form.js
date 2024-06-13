const questionCounter = document.querySelector('[data-js="form-question-counter"]');
const questionTextField = document.querySelector('[data-js="form-question-textfield"]');
const answerCounter = document.querySelector('[data-js="form-answer-counter"]');
const answerTextField = document.querySelector('[data-js="form-answer-textfield"]');
const homeSection = document.querySelector('[data-js="homeSection"]');
const allAnswerButton = document.querySelectorAll('.button__show');
const formModal = document.querySelector('[data-js="form-modal"]');
const formModalButton = document.querySelectorAll('[data-js="form-modal-button"]');
const questionSubmit = document.querySelector('[data-js="form-submit-button"]');
const form = document.querySelector('[data-js="form-question"]');

// Function to update the Counter:
function updateCharacterCount(textField, counter) {
    counter.innerText = textField.maxLength - textField.textLength;
}

// Event Listeners for both Textfields:
questionTextField.addEventListener('input', () => {
    updateCharacterCount(questionTextField, questionCounter);
});
answerTextField.addEventListener('input', () => {
    updateCharacterCount(answerTextField, answerCounter);
});

// Submit Question
form.addEventListener('submit', (event) => {
    event.preventDefault();
    // get Data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    // build question card on page
    const newQuizCard = document.createElement('div');
    newQuizCard.classList.add('question-card');
    newQuizCard.innerHTML = `
    <a class="question-card__bookmark transition-all-s" href="javascript:void(0)">
        <img src="images/bookmark.png" alt="" />
    </a>
    <p class="question-card__question pa-1">${data.question}</p>
    <button class="button__show mt-1 mb-1" data-js="showAnswerButton1">
        Show Answer
    </button>
    <p class="question-card__answer hidden" data-js="answerQ01">
        ${data.answer}
    </p>
    <div class="question-card__tags">
        <a href="#">#${data.tag}</a>        
    `;

    // append Card to div
    homeSection.append(newQuizCard);
    openModal();
});

// Event Delegation for Show Answer buttons
homeSection.addEventListener('click', (event) => {
    if (event.target.className === 'button__show mt-1 mb-1') {
        const button = event.target;
        const parentElement = event.target.parentElement;
        const parentChildElement = parentElement.children[3];
        if (button.innerText === 'Show Answer') {
            button.innerText = 'Hide Answer';
            parentChildElement.classList.toggle('hidden');
        } else {
            button.innerText = 'Show Answer';
            parentChildElement.classList.toggle('hidden');
        }
    }
});

// Function for Open the Modal
function openModal() {
    formModal.setAttribute('open', '');
}
// Function for Close the Modal
function closeModal() {
    formModal.removeAttribute('open');
}
// Event Listener for Modal Buttons
formModalButton.forEach((button) => {
    button.addEventListener('click', () => {
        closeModal();
    });
});
