radio.onReceivedNumber(function (receivedNumber) {
    if (0 == receivedNumber) {
        if (0 == driving) {
            driving += 1
        } else {
            driving += 0
        }
    }
    if (1 == receivedNumber) {
        if (1 == driving) {
            maqueen.motorStop(maqueen.Motors.M2)
            basic.pause(100)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, speed)
        } else {
            maqueen.motorStop(maqueen.Motors.All)
        }
    }
    if (2 == receivedNumber) {
        if (1 == driving) {
            maqueen.motorStop(maqueen.Motors.M1)
            basic.pause(100)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, speed)
        } else {
            maqueen.motorStop(maqueen.Motors.All)
        }
    }
})
let driving = 0
let speed = 0
radio.setGroup(1)
speed = 10
driving = 0
basic.forever(function () {
    if (1 == driving) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, speed)
    } else {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
