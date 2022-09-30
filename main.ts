let Tocar = false
let P2 = 0
let P1 = 0
input.onPinPressed(TouchPin.P0, function () {
    Tocar = false
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showString("Lets go!")
    basic.pause(randint(1000, 10000))
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P2, function () {
    if (true) {
        Tocar = true
        P2 += 1
        basic.showLeds(`
            . . # # #
            . . # # #
            . . # # #
            . . . # #
            . . . # #
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (true) {
        Tocar = true
        P1 += 1
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            # # . . .
            # # . . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
})
basic.forever(function () {
	
})
basic.forever(function () {
    if (P1 == 3) {
        for (let index = 0; index < 3; index++) {
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . . . .
                . . # . .
                `)
            basic.pause(100)
        }
        basic.showString("Parabéns P1!!")
        P1 = 0
        P2 = 0
    } else if (P2 == 3) {
        for (let index = 0; index < 3; index++) {
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . . . .
                . . # . .
                `)
            basic.pause(100)
        }
        basic.showString("Parabéns P2!!")
        P1 = 0
        P2 = 0
    } else {
    	
    }
})
