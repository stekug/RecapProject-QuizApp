const questionCounter = document.querySelector('[data-js="form-question-counter"]');
const questionTextField = document.querySelector('[data-js="form-question-textfield"]');
const answerCounter = document.querySelector('[data-js="form-answer-counter"]');
const answerTextField = document.querySelector('[data-js="form-answer-textfield"]');

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
