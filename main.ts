function custom1 () {
    music.ringTone(262)
}
function custom0 () {
    music.ringTone(262)
}
// Code for commands.
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    if (parseFloat(serial.readLine().charAt(8)) == 1 && serial.readUntil(serial.delimiters(Delimiters.NewLine)).includes("ledtest")) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (parseFloat(serial.readLine().charAt(8)) == 0 && serial.readUntil(serial.delimiters(Delimiters.NewLine)).includes("ledtest")) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (serial.readLine().includes("deviceinfo")) {
        serial.writeLine("Device Name: " + control.deviceName())
        serial.writeLine("Device Serial Number: " + control.deviceSerialNumber())
    }
    if (parseFloat(serial.readLine().charAt(8)) == 1 && serial.readUntil(serial.delimiters(Delimiters.NewLine)).includes("function")) {
        custom0()
    }
    if (parseFloat(serial.readLine().charAt(8)) == 0 && serial.readUntil(serial.delimiters(Delimiters.NewLine)).includes("function")) {
        custom1()
    }
    if (serial.readLine().includes("reset")) {
        control.reset()
    }
    if (serial.readLine().includes("reset")) {
    	
    }
})
