// import functions and grab DOM elements
const shedButton = document.getElementById('shed-button');
const treeButton = document.getElementById('tree-button');
const boulderButton = document.getElementById('boulder-button');

const shedContainer = document.getElementById('shed-container');
const treeContainer = document.getElementById('tree-container');
const boulderContainer = document.getElementById('boulder-container');

const totalEl = document.getElementById('total');
const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');

// initialize state
const hidingPlaces = [
    'tree',
    'shed',
    'boulder'
];

let correctGuesses = 0;
let totalGuesses = 0;

function getRandomItem(arr) {
    const index = Math.floor(Math.random() * arr.length);

    return arr[index];
}

function handleGuess(userGuess, correctSpot) {
    resetStyles();
    totalGuesses++;
    // should reset the styles

    // then increment the guesses

    const winHidingPlaceEl = document.getElementById(`${correctSpot}-container`);
    
    // then grab the appropriate container element for the correct guess from the DOM

    winHidingPlaceEl.classList.add('face');

    
    // then add the face class to that element so that the face shows up

    if (userGuess === correctSpot) {
        correctGuesses++;
    }
     // then if the user guess is correct, increment the correct guesses


    totalEl.textContent = totalGuesses;
    winsEl.textContent = correctGuesses;
    lossesEl.textContent = totalGuesses - correctGuesses;




    // update the DOM to show this change to the user (including the losses, not tracked directly in state)
}

function resetStyles() {

    shedContainer.classList.remove('face');
    treeContainer.classList.remove('face');
    boulderContainer.classList.remove('face');
    // should remove the face class from all containers
}

shedButton.addEventListener('click', () => {
    let correctSpot = getRandomItem(hidingPlaces);
    // should get a random item to call the 'correct spot'

    handleGuess('shed', correctSpot);

    // then use that correct spot to 'handle the guess' using the handleGuess function
});

treeButton.addEventListener('click', () => {
    let correctSpot = getRandomItem(hidingPlaces);
    // should get a random item to call the 'correct spot'
    handleGuess('tree', correctSpot);

    // then use that correct spot to 'handle the guess' using the handleGuess function
});

boulderButton.addEventListener('click', () => {
    let correctSpot = getRandomItem(hidingPlaces);
    // should get a random item to call the 'correct spot'
    handleGuess('boulder', correctSpot);
});