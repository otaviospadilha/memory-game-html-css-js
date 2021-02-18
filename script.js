const decks = [
    {
        title: 'One Piece',
        cards: 
            {
            backCard: "images/onePiece/back-card-one-piece.PNG",
            frontCard: [
                {
                    name: "luffy",
                    image: "images/onePiece/Monkey_D._Luffy's_Current_Wanted_Poster.png"
                },
                {
                    name: "zoro",
                    image: "images/onePiece/Roronoa_Zoro's_Current_Wanted_Poster.png"
                },
                {
                    name: "nami",
                    image: "images/onePiece/Nami's_Current_Wanted_Poster.png"
                },
                {
                    name: "usopp",
                    image: "images/onePiece/God_Usopp's_Wanted_Poster.png"
                },
                {
                    name: "sanji",
                    image: "images/onePiece/Sanji's_Current_Wanted_Poster.png"
                },
                {
                    name: "chopper",
                    image: "images/onePiece/Tony_Tony_Chopper's_Current_Wanted_Poster.png"
                },

                {
                    name: "luffy",
                    image: "images/onePiece/Monkey_D._Luffy's_Current_Wanted_Poster.png"
                },
                {
                    name: "zoro",
                    image: "images/onePiece/Roronoa_Zoro's_Current_Wanted_Poster.png"
                },
                {
                    name: "nami",
                    image: "images/onePiece/Nami's_Current_Wanted_Poster.png"
                },
                {
                    name: "usopp",
                    image: "images/onePiece/God_Usopp's_Wanted_Poster.png"
                },
                {
                    name: "sanji",
                    image: "images/onePiece/Sanji's_Current_Wanted_Poster.png"
                },
                {
                    name: "chopper",
                    image: "images/onePiece/Tony_Tony_Chopper's_Current_Wanted_Poster.png"
                },
            ]
            },

        background: "linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.4)), url('images/background/board-background-one-piece.jpg')"
    },
    {
        title: 'Pokemon',
        cards: {
            backCard: "images/pokemon/back-card-pokemon.jpg",
            frontCard: [
                {
                    name: "Charmander",
                    image: "images/pokemon/Charmander.png"
                },
                {
                    name: "Squirtle",
                    image: "images/pokemon/Squirtle.png"
                },
                {
                    name: "Bulbasaur",
                    image: "images/pokemon/Bulbasaur.png"
                },
                {
                    name: "Pikachu",
                    image: "images/pokemon/Pikachu.png"
                },
                {
                    name: "Meowth",
                    image: "images/pokemon/Meowth.png"
                },
                {
                    name: "Onix",
                    image: "images/pokemon/Onix.png"
                },

                {
                    name: "Charmander",
                    image: "images/pokemon/Charmander.png"
                },
                {
                    name: "Squirtle",
                    image: "images/pokemon/Squirtle.png"
                },
                {
                    name: "Bulbasaur",
                    image: "images/pokemon/Bulbasaur.png"
                },
                {
                    name: "Pikachu",
                    image: "images/pokemon/Pikachu.png"
                },
                {
                    name: "Meowth",
                    image: "images/pokemon/Meowth.png"
                },
                {
                    name: "Onix",
                    image: "images/pokemon/Onix.png"
                },
            ]
        },
        background: "linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.4)), url('images/background/board-background-pokemon.jpg')"
    },
    {
        title: 'Yu-Gi-Oh',
        cards: {
            backCard: "images/YuGiOh/back-card-yu-gi-oh.png",
            frontCard: [
                {
                    name: "Baby Dragon",
                    image: "images/YuGiOh/BabyDragon.png"
                },
                {
                    name: "Feral Imp",
                    image: "images/YuGiOh/FeralImp.png"
                },
                {
                    name: "Hitotsume Giant",
                    image: "images/YuGiOh/HitotsumeGiant.png"
                },
                {
                    name: "Mystica lElf",
                    image: "images/YuGiOh/MysticalElf.png"
                },
                {
                    name: "Winged Dragon",
                    image: "images/YuGiOh/WingedDragon.png"
                },
                {
                    name: "Blue eyes White Dragon",
                    image: "images/YuGiOh/BlueeyesWhiteDragon.png"
                },

                {
                    name: "Baby Dragon",
                    image: "images/YuGiOh/BabyDragon.png"
                },
                {
                    name: "Feral Imp",
                    image: "images/YuGiOh/FeralImp.png"
                },
                {
                    name: "Hitotsume Giant",
                    image: "images/YuGiOh/HitotsumeGiant.png"
                },
                {
                    name: "Mystica lElf",
                    image: "images/YuGiOh/MysticalElf.png"
                },
                {
                    name: "Winged Dragon",
                    image: "images/YuGiOh/WingedDragon.png"
                },
                {
                    name: "Blue eyes White Dragon",
                    image: "images/YuGiOh/BlueeyesWhiteDragon.png"
                },
            ]   
        },

        background: "linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.4)), url('images/background/board-background-yu-gi-oh.png')"
    }
]

const Game = {
    start(deck) {
        const index = decks.findIndex(item => {
            return item.title === deck
        })
        document.body.style.background = `${decks[index].background}`

        document.querySelector('.memory-game').classList.remove('disable')
        document.querySelector('.menu').classList.add('disable')

        const backCard = decks[index].cards.backCard
        const cardsRandom = Board.shuffle(decks[index].cards.frontCard)
    
        DOM.renderBoard(backCard, cardsRandom)

        const cards = document.querySelectorAll('.card')
        cards.forEach(card => {
            card.addEventListener('click', flipCard)
        })

        let hasFlippedCard = false
        let firstCard, secondCard
        let lockBoard = false
        let checkEndGame = 0

        function flipCard() {
            if(lockBoard) return
            if(this === firstCard) return
            
            this.classList.add('flip')
            if(!hasFlippedCard){
                hasFlippedCard = true
                firstCard = this
                return 
            }
            secondCard = this
            hasFlippedCard = false
            checkForMath()
        }

        function checkForMath() {
            if(firstCard.dataset.card === secondCard.dataset.card){
                disableCards()
                checkEndGame++
                if(checkEndGame === cards.length / 2){
                    console.log('acabou')
                    checkEndGame = 0
                } 
                return
            }
            unflipCards()
        }

        function disableCards() {
            firstCard.removeEventListener('click', flipCard)
            secondCard.removeEventListener('click', flipCard)
        
            resetBoard()
        }
        
        function unflipCards() {
            lockBoard = true
        
            setTimeout(() => {
                firstCard.classList.remove('flip')
                secondCard.classList.remove('flip')
                
                resetBoard()
            }, 1000)
        }
        
        function resetBoard() {
            [hasFlippedCard, lockBoard] = [false, false]
            [firstCard, secondCard] = [null, null]
        }
    },

}

const boardTemplate = function(card, backcard) {
    return `
    <div class="card" data-card = ${card.name}>
            <img class="front-card" src= ${card.image} alt="frente da carta">
            <img class="back-card" src= ${backcard} alt="verso da carta" >
    </div>
    `
}

const DOM = {

    renderBoard(backCard, cards) {
            const $screen = document.querySelector('.memory-game')
            $screen.innerHTML = cards.map(card => {
                return boardTemplate(card, backCard)
            }).join('')
    },

}



const Board = {
    shuffle(cards) {
        cards = cards.sort(() => {
            return (Math.round(Math.random())-0.5)
        })
        return cards
    },


}
