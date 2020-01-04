document.querySelectorAll('memory-card');

// TODO: Cards must be shuffled 
// TODO: 

let hasFlipped = false;
let lockBoard = false;

function flipCard() {
    this.classList.add('flip');

}

function resetBoard(){
    [hasFlipped, lockBoard] = [false, false];
}

function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order=randomPos;
    })
}

cards.forEach( card => card.addEventListener('click', flipCard))