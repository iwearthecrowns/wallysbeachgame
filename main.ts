function evaluateGuess (text: string) {
    match = 0
    for (let index = 0; index <= beachList.length - 1; index++) {
        if (beachList[index] == text) {
            match = 1
        }
    }
    if (match == 1) {
        music.baDing.play()
        info.changeScoreBy(1)
    } else {
        music.wawawawaa.play()
        info.changeLifeBy(-1)
    }
}
let match = 0
let beachList: string[] = []
let input2 = game.askForString("What do you see on Wally's beach?")
beachList = [
"sailboat",
"children",
"flag",
"beach bag",
"clouds",
"ship",
"umbrella",
"aaa"
]
info.setScore(0)
info.setLife(3)
evaluateGuess(input2)
