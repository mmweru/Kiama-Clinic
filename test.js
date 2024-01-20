const cards = document.querySelectorAll('.card');
const cardContents = [
    '"Beauty shouldn\'t be about changing yourself to achieve an ideal or be more socially acceptable. Real beauty, the interesting, truly pleasing kind, is about honoring the beauty within you and without you. It\'s about knowing that someone else\'s definition of pretty has no hold over you."🤓',
    'By stopping licking, biting, and picking at your lips can get rid of dry lips 😉.',
    'By mixing coconut oil and vaseline and using it on your lashes before going to bed can lead to longer lashes. 🤔.'
];

let currentCardIndex = 0;

function changeCardContent() {
    cards.forEach((card, index) => {
        card.innerHTML = `<h2>Kiama Tips</h2><p>${cardContents[currentCardIndex]}</p>`;
    });

    currentCardIndex = (currentCardIndex + 1) % cardContents.length;
}

setInterval(changeCardContent, 2000); // Change content every 2 seconds

// Create rectangles and add them to the rows
const words = ['kiama', 'elegance', 'radiance', 'harmony', 'enchant', 'allure']; /* Adjust as needed */

const createRectangles = (row) => {
    words.forEach((word) => {
        const rectangle = document.createElement('div');
        rectangle.classList.add('rectangle');
        rectangle.textContent = word;
        row.appendChild(rectangle);
    });
};

// Adjust initial positioning for visibility
const row1 = document.querySelector('.row1');
row1.style.transform = 'translateX(-50px)';

const row2 = document.querySelector('.row2');
row2.style.transform = 'translateX(50px)';

createRectangles(row1);
createRectangles(row2);
