const emojis = ['😄', '😊', '😍', '🥳', '😎'];
const votes = new Array(emojis.length).fill(0);

const emojisContainer = document.getElementById('emojisContainer');

// Генерация смайлов и счетчиков
emojis.forEach((emoji, index) => {
    const emojiElement = document.createElement('span');
    emojiElement.classList.add('emoji');
    emojiElement.textContent = emoji;
    emojiElement.addEventListener('click', () => {
        votes[index]++;
        updateResults();
    });
    emojisContainer.appendChild(emojiElement);

    const voteCount = document.createElement('span');
    voteCount.textContent = ` ${votes[index]}`;
    emojisContainer.appendChild(voteCount);
});

// Обновление вывода результатов
function updateResults() {
    emojis.forEach((emoji, index) => {
        const voteCountElement = emojisContainer.children[index * 2 + 1];
        voteCountElement.textContent = ` ${votes[index]}`;
    });
}