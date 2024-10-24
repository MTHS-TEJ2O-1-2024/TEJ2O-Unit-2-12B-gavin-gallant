/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Gavin Gallant
 * Created on: oct 2024
 * This program tell the distance in cm to the sonar
*/
// Variables
let distanceToObject: number = 0
let neopixelStrip: neopixel.Strip = null;
let lightLevel = input.lightLevel()

// Cleanup
basic.clearScreen();
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB);
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black));
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black));
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black));
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black));
neopixelStrip.show();
//setup
basic.showIcon(IconNames.Happy)
// find distance from sonar
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    distanceToObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )
    //show distance
    basic.showNumber(distanceToObject)
    basic.showIcon(IconNames.Happy)
    if(distanceToObject < 9){
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red));
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red));
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red));
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red));
        neopixelStrip.show();
    } else {
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green));
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green));
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green));
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green));
        neopixelStrip.show();
        basic.pause(1000)
        //turn all lights off
        neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB);
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black));
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black));
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black));
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black));
        neopixelStrip.show();
    }
})