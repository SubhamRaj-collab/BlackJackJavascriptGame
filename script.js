// let featuredPosts = [
//     'I have studied Nursery in Red Rose Nursery School',
//     'I have completed my Matriculation from M.G.M',
//     'I have done my Intermediate also from M.G.M', 
//     'I have done my Bachelors in Technology from Heritage Institute of Technology'
// ]

// let experience = [
//     "CEO at Scrimba",
//     "FrontEnd Developer at Xeneta",
//     'People Counter for Norstat'
// ]

// console.log(experience[1])
// console.log(experience[2])
// console.log(experience[0])

// console.log(featuredPosts)

// console.log(featuredPosts.length)
// console.log(experience.length)

// let myBio = ["Subham Raj", 22, "Final year of B Tech", "Looking for a job", true]

// console.log(myBio)

// myBio.push('Not going for a date today')

// console.log(myBio)

// console.log(myBio.pop())

// console.log(myBio)

// for(let count = 10; count < 101; count+=10)
// {
//     console.log(count)
// }

// let player1Time = 102
// let player2Time = 107

// function fastestRaceTime()
// {
//     if(player1Time < player2Time)
//     {
//         return player1Time
//     }
//     else if(player2Time < player1Time)
//     {
//         return player2Time
//     }
//     else
//     {
//         return player1Time
//     }
// }

// let fastestTime = fastestRaceTime()

// console.log(fastestTime)

// function totalRaceTime()
// {
//     return player1Time+player2Time
// }

// let raceTme = totalRaceTime()
// console.log(raceTme)

// let a = 2
// let b = 5

// let sum = a+b

// console.log(sum)

// let num = Math.random()*6;

// console.log(Math.ceil(num))

// function rollDice()
// {
//     return Math.ceil(Math.random()*6)
// }

// console.log(rollDice())

// let hasSolvedChallenge = false
// let hintsLeft = false

// if(hasSolvedChallenge === false && hintsLeft === false)
// {
//     showSolution()
// }
// function showSolution()
// {
//     console.log("Showing Solution.......")
// }

// let likesDocumentries = false
// let likesStartUps = false

// if(likesDocumentries ===true || likesStartUps === true)
// {
//     recommendMovie()
// }

// function recommendMovie()
// {
//     console.log("Movie Recommended....")
// }

// let course = {
//     title: "Learn CSS Grid for free",
//     lessons: 16,
//     creator: "Per Harald Borgen",
//     length: 63,
//     level: 2,
//     isFree: true,
//     tags: ["html", "css"]
// }

// console.log(course.creator)
// console.log(course["title"])

// let hotel = {
//     gist: "Live Like a King in my Castle",
//     pricePerNight: 250,
//     isCastle: true,
//     design: [8, 3]
// }

// console.log(hotel["isCastle"])
// console.log(hotel.design)



let cards = []

let sum = 0
let hasBlackJack = false
let isAlive = false

let msg = ""

console.log("Is Alive? "+isAlive+". Has BlackJack? "+hasBlackJack)

let player = {
    name: "Per",
    chips: 145
}

let playerEl = document.getElementById('player-el')

playerEl.textContent = player.name+": $"+player.chips

function getRandomCard()
{
    // return Math.ceil(Math.random()*10)
    let num = Math.floor(Math.random()*13)+1

    if(num > 10)
    {
        return 10
    }
    else if(num === 1)
    {
        return 11
    }
    else
    {
        return num
    }
}

function startGame()
{
    isAlive = true

    cards = []
    sum = 0

    cards[0] = getRandomCard()
    cards[1] = getRandomCard()

    sum = cards[0]+cards[1]

    renderGame()
}

function renderGame()
{
    if(sum <= 20)
    {
        msg = "Do you want to draw a new Card?"
    }
    else if(sum === 21)
    {
        hasBlackJack = true
        msg = "Congrats!! You have got a BlackJack"
    }
    else
    {
        msg = "Sorry! You are out of the game."
        isAlive = false
    }

    let cardsEl = document.getElementById("cards-el")

    cardsEl.innerText = "Cards: "

    for(let i = 0; i < cards.length; i+=1)
    {
        cardsEl.textContent += cards[i]+" "
    }
    // document.getElementById("sum-el").innerText = "Sum: "+sum
    document.querySelector('#sum-el').textContent = 'Sum: '+sum

    document.getElementById("message-el").textContent = msg
    console.log(msg+" hasBlackJack: "+hasBlackJack+", isAlive: "+isAlive)
}

function drawCard()
{
    if(isAlive && !hasBlackJack)
    {
        console.log('Drawing a new card from the Deck')

        let card = getRandomCard()

        cards.push(card)

        sum += card

        renderGame()
    }
    else
    {
        console.log("Turnes Completed!!!")
    }
    
}

