class Player{

    lifePoints;
    deck;
    hand;
    discardPile;

    constructor(){
        this.deck = [];
        this.hand = [];
        this.discardPile = [];
        this.lifePoints = 3;
    }

    drawCard() {
        if (this.deck.length === 0) {
            this.reshuffleDiscardIntoDeck();
        }
        if (this.deck.length > 0) {
            const drawnCard = this.deck.pop();
            this.hand.push(drawnCard);
            return drawnCard;
        }
    }

    drawMultipleCards(numCards) {
        for (let i = 0; i < numCards; i++) {
            this.drawCard();
        }
    }

    reshuffleDiscardIntoDeck() {
        console.log("Reshuffling discard pile into deck.");
        this.deck = this.discardPile;
        this.discardPile = [];
        this.shuffleDeck();
    }

    shuffleDeck() {
        console.log("Shuffling deck.");
        for (let i = this.deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }


}

class Card{

    title;
    imageUrl;

    constructor(title, imageUrl){
        this.title = title;
        this.imageUrl = imageUrl;
    }

}

class PlayerCard extends Card{
    lockOReffect;

    constructor(title, imageUrl, lockOReffect){
        super (title, imageUrl);
        this.lockOReffect = lockOReffect;
    }
}

class EventCard extends Card{
    description;
    failedEffect;
    lock;

    constructor(title, imageUrl, description, failedEffect, lock){
        super (title, imageUrl);
        this.description = description;
        this.failedEffect = failedEffect;
        this.lock = lock;
    }
}


let lifeCounterBoard = document.querySelector("#lifeCounter");
const player = new Player();

document.addEventListener("DOMContentLoaded", () => {

    const title = document.getElementById("title");
    title.addEventListener("click", () => {
        window.location.href = "index.php";
    });

    baseSetup();

})

function baseSetup(){

    for (let i = 0; i < player.lifePoints; i++) {
        let heart = document.createElement('img');
        heart.src = 'images/heart.png';
        heart.alt = 'Vita';
        lifeCounterBoard.appendChild(heart);
    }

}