let secondDice = 0
let dice = 0
radio.onReceivedNumber(function (receivedNumber) {
    secondDice = randint(1, 6)
    if (secondDice < receivedNumber) {
        basic.showIcon(IconNames.Sad)
    } else if (secondDice > receivedNumber) {
        basic.showIcon(IconNames.Happy)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("STRING")
    basic.showString("SEND")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    dice = randint(1, 6)
    radio.sendNumber(dice)
    basic.showNumber(dice)
})
