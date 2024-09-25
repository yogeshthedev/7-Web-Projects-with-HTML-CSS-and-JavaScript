let cardArray = [
    {
        'name': "HTML",
        'img': 'assets/html.png'
    },
    {
        'name': "CSS",
        'img': 'assets/css.png'
    },
    {
        'name': "Angular",
        'img': 'assets/angular.png'
    },
    {
        'name': "JS",
        'img': 'assets/js.png'
    },
    {
        'name': "Node",
        'img': 'assets/node.png'
    },
    {
        'name': "Phython",
        'img': 'assets/python.png'
    }
]

const parentDiv = document.querySelector('#card-section');

const gameCard = cardArray.concat(cardArray);

// const gameCardShuffle = (array) => {
//     for (let i = array.length - 1; i > 0; i--) {

//         let j = Math.floor(Math.random() * (i + 1))

//         let temp = array[i];
//         array[i] = array[j];
//         array[j] = temp

//     }
//     return array
// }

let shuffledChild = Array.from(gameCard).sort(() => 0.5 - Math.random());

for (let i = 0; i < shuffledChild.length; i++) {
    const childDiv = document.createElement('div');
    childDiv.classList.add('card');

    childDiv.dataset.name = shuffledChild[i].name;
    // childDiv.style.backgroundImage = `url(${shuffledChild[i].img})`;

    const frontDiv = document.createElement('div');
    frontDiv.classList.add('front-card')

    const backDiv = document.createElement('div');
    backDiv.classList.add('back-card')

    backDiv.style.backgroundImage = `url(${shuffledChild[i].img})`;

    parentDiv.appendChild(childDiv);

    childDiv.appendChild(frontDiv)
    childDiv.appendChild(backDiv)

}

let clickCount = 0;
let firstCard = "";
let secondCard = "";

const card_matches = () => {
    let card_selected = document.querySelectorAll('.card-section');
    card_selected.forEach((curEle) => {
        curEle.classList.add('card_match')
    })
}

const resetgame = () => {
    clickCount = 0;
    firstCard = "";
    secondCard = '';

    let card_selected = document.querySelectorAll('.active');
    card_selected.forEach((curEle) => {
        curEle.classList.remove('active')
    })

}

parentDiv.addEventListener('click', (event) => {
    let curCard = event.target;
    clickCount++;
    if (clickCount < 3) {

        if (clickCount === 1) {
            firstCard = curCard.parentNode.dataset.name;
            curCard.parentNode.classList.add("active")
        } else {
            secondCard = curCard.parentNode.dataset.name;
            curCard.parentNode.classList.add("active")
        }

        if (firstCard !== "" && secondCard !== "") {
            if (firstCard === secondCard) {
                // curCard.classList.add('card_match')
                setTimeout(() => {
                    card_matches();
                    resetgame();
                }, 1000);

            } else {
                setTimeout(() => {
                    resetgame();
                }, 1000);
            }
        }
    }

})


// Add global click listener to detect clicks outside cards
document.addEventListener('click', (event) => {
    let curCard = event.target.closest('.card');
    if (!curCard) {
        document.body.classList.remove('active');
    } else {
        // If the click is on a card, remove the class from the body
        document.body.classList.remove('body-clicked');
    }
});