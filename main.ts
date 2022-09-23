let P2 = 0
let P1 = 0
input.onPinPressed(TouchPin.P0, function () {
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
})
input.onPinPressed(TouchPin.P1, function () {
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
})
basic.forever(function () {
	
})
