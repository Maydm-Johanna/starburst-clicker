controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
    music.play(music.createSoundEffect(WaveShape.Noise, 3196, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 3 3 3 3 3 3 3 3 3 . . . . 
        . . . 3 3 3 3 3 3 3 3 3 . . . . 
        . . . 3 3 3 3 3 3 3 3 3 . . . . 
        . . . 3 3 3 3 3 3 3 3 3 . . . . 
        . . . 3 3 3 3 3 3 3 3 3 . . . . 
        . . . 3 3 3 3 3 3 3 3 3 . . . . 
        . . . 3 3 3 3 3 3 3 3 3 . . . . 
        . . . 3 3 3 3 3 3 3 3 3 . . . . 
        . . . 3 3 3 3 3 3 3 3 3 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, BigStarburst, randint(-100, 100), randint(-100, 100))
})
info.onCountdownEnd(function () {
    game.setGameOverMessage(true, "GAME OVER!")
    game.gameOver(true)
})
let projectile: Sprite = null
let BigStarburst: Sprite = null
BigStarburst = sprites.create(img`
    ..............................
    .......ccccccccccccccccccccc..
    .....ccccccccccccccccccccccb..
    ....ccccccccccccccccccccccbb..
    ...ccccccccccccccccccccccbbb..
    ...333333333333333333333bbbb..
    ...333333333333333333333bbbb..
    ...333333333333333333333bbbb..
    ...333333333fffff3333333bbbb..
    ...3333333fff333ff333333bbbb..
    ...333333ff333333f333333bbbb..
    ...333333f3333333ff33333bbbb..
    ...333333f33333333f33333bbbb..
    ...33333ff33333333333333bbbb..
    ...33333f333333333333333bbbb..
    ...33333fff3333333333333bbbb..
    ...3333333fff33333333333bbbb..
    ...333333333fffff3333333bbbb..
    ...3333333333333ff333333bbbb..
    ...33333333333333ff33333bbbb..
    ...333333333333333f33333bbbb..
    ...333333333333333f33333bbbb..
    ...33333ff33333333f33333bbbb..
    ...333333ff333333ff33333bbbb..
    ...3333333ff3333ff333333bbb...
    ...33333333ffffff3333333bb....
    ...333333333333333333333bb....
    ...333333333333333333333b.....
    ..............................
    ..............................
    `, SpriteKind.Player)
scene.setBackgroundColor(6)
info.startCountdown(10)
