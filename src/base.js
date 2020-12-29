const DOMstrings = {
    inputFieldStart: document.querySelector('.input__field-start'),
    inputFieldEnd: document.querySelector('.input__field-end'),
    showAsteroidBtn: document.querySelector('.input__btn'),
    testBtn: document.querySelector('.testBtn'),
    selectedAsteroidsList: document.querySelector('.selected-asteroids'),
    tableBody: document.querySelector('#tableBody'),
    asteroidInput: document.querySelector('#asteroids'),
};

export function getDomString(domStringName) {
        return DOMstrings[domStringName];
    }

//Primeniti get metode, drzati podatke privatnim i immutable

