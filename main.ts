// Created by: Alexander James
// 
// Date: September 27th 2022
// 
// This code displays the value of the variable on the LED screen
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(counter)
})
// Created by: Alexander James
// 
// Date: September 27th 2022
// 
// This code decreases the variable by 1
input.onButtonPressed(Button.B, function () {
    counter += -1
})
let counter = 0
counter = 0
