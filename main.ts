function checkScore () {
    if (info.score() == 5) {
        game.splash("You win!")
    }
}
function evaluateGuess (text: string) {
    match = 0
    for (let index = 0; index <= picnicBasket.length - 1; index++) {
        if (picnicBasket[index] == text) {
            match = 1
        }
    }
    if (match == 1) {
        music.baDing.play()
        info.changeScoreBy(1)
        game.splash("Your score is " + info.score())
    } else {
        music.playMelody("C5 B C5 B - - - - ", 480)
        strikes += 1
    }
    checkScore()
    checkStrikes()
}
function checkStrikes () {
    if (strikes == 3) {
        game.over(false)
    }
}
function whatDidYouSee () {
    input2 = game.askForString("What do you see on Wally's beach?")
    picnicBasket = [
    "sailboat",
    "children",
    "flag",
    "beach bag",
    "clouds",
    "ship",
    "umbrella",
    "aaa",
    "burger"
    ]
}
let picnicBasket: string[] = []
let match = 0
let input2 = ""
let strikes = 0
scene.setBackgroundImage(img`
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    2222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    1111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222111112222211111222221111122222
    `)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setImage(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `)
let list = [sprites.food.smallBurger, sprites.food.smallApple, sprites.food.smallTaco, sprites.food.smallDonut, sprites.food.smallPizza]
for (let index2 = 0; index2 <= list.length - 1; index2++) {
    mySprite.setImage(list[index2])
    mySprite.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
    music.playTone(262, music.beat(BeatFraction.Whole))
}
pause(200)
whatDidYouSee()
info.setScore(0)
strikes = 0
evaluateGuess(input2)
