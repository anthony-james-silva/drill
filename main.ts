enum RadioMessage {
    message1 = 49434
}
namespace SpriteKind {
    export const nothing = SpriteKind.create()
    export const saw = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.nothing, function (sprite, otherSprite) {
    controller.moveSprite(mySprite, 0, 0)
    pause(1000)
    controller.moveSprite(mySprite, 100, 100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.saw, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . 6 6 6 6 6 6 6 6 . . . . 
        . . . 6 6 9 6 6 6 9 6 6 6 . . . 
        . . 6 6 6 6 6 9 6 6 9 1 6 6 . . 
        . . 6 6 6 6 6 6 9 6 1 1 6 6 . . 
        . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
        . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
        . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
        . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
        . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
        . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
        . . . 6 6 6 6 6 6 6 6 6 6 . . . 
        . . . . 6 6 6 6 6 6 6 6 . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.nothing)
    tiles.placeOnTile(mySprite2, location)
    animation.runImageAnimation(
    mySprite2,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . 6 6 6 6 6 6 6 6 . . . . 
        . . . 6 6 9 6 6 6 9 6 6 6 . . . 
        . . 6 6 6 6 6 6 6 6 9 1 6 6 . . 
        . . 6 6 6 6 6 6 9 6 1 1 6 6 . . 
        . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
        . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
        . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
        . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
        . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
        . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
        . . . 6 6 6 6 6 6 6 6 6 6 . . . 
        . . . . 6 6 6 6 6 6 6 6 . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . 6 6 6 6 6 6 6 6 . . . . 
        . . . 6 6 f 6 6 6 f 6 6 6 . . . 
        . . 6 6 6 6 6 f 6 6 f 1 6 6 . . 
        . . 6 6 6 6 6 6 f 6 1 1 6 6 . . 
        . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
        . 6 6 6 f 6 6 6 6 6 6 6 6 6 6 . 
        . 6 6 6 6 f 6 6 6 6 6 f 6 6 6 . 
        . 6 6 6 6 6 6 6 6 6 6 6 f 6 6 . 
        . . 6 6 6 f 6 6 f 6 6 6 6 6 . . 
        . . 6 6 6 6 f 6 6 f 6 6 6 6 . . 
        . . . 6 6 6 6 6 6 6 6 6 6 . . . 
        . . . . 6 6 6 6 6 6 6 6 . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . 6 6 6 6 6 6 6 6 . . . . 
        . . . 6 6 f 6 6 6 f 6 6 6 . . . 
        . . 6 6 f 6 6 f 6 6 f 1 6 6 . . 
        . . 6 6 6 6 6 f f 6 f 1 6 6 . . 
        . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
        . 6 6 6 f 6 6 6 6 6 6 f 6 6 6 . 
        . 6 6 6 6 f 6 6 6 6 6 f 6 6 6 . 
        . 6 6 6 6 6 6 6 6 6 6 6 f 6 6 . 
        . . 6 6 6 f 6 6 f f 6 6 6 6 . . 
        . . 6 6 6 6 f 6 6 f 6 6 6 6 . . 
        . . . 6 6 6 6 f 6 6 6 6 6 . . . 
        . . . . 6 6 6 6 6 6 6 6 . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
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
        `],
    1000,
    false
    )
    win += 1
    info.changeScoreBy(1)
    if (win == 18) {
        pause(1000)
        lvl += 1
        doSomething()
    }
})
scene.onOverlapTile(SpriteKind.saw, assets.tile`myTile5`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    info.setLife(0)
})
function doSomething () {
    if (lvl == 1) {
        tiles.setCurrentTilemap(tilemap`level4`)
    } else if (lvl == 2) {
        info.setScore(0)
        tiles.setCurrentTilemap(tilemap`level6`)
        info.setLife(3)
    } else if (lvl == 3) {
        info.setLife(3)
        info.setScore(0)
        tiles.setCurrentTilemap(tilemap`level10`)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile1`)
        lavalvl = 18
    }
}
function destroy () {
    for (let value of sprites.allOfKind(SpriteKind.saw)) {
        sprites.destroy(value)
    }
    doSomething()
}
let mySprite3: Sprite = null
let lavalvl = 0
let win = 0
let mySprite2: Sprite = null
let mySprite: Sprite = null
let lvl = 0
lvl = 1
doSomething()
scene.setBackgroundImage(img`
    fffffffcbccffffffffffcfbddddddddddd.........................................................................................................bffcddffffffcfcfffff
    fffffffccffffcffffffbfddddddddd..............................................................................................................fccdbffffffffffffff
    fffffffcffffffbffffffddddddddd..............................................................................................................cffcbfffffffffffcdcf
    ffffffcffffffffbdffffddddddd..................................................................................................................ccffffffdfbfffffff
    fcfffffffcdcdffdffdccdddddd....................................................................................................................bbffffffdffffffff
    fffffffffdbddcfffffcddddd...............................................1.......................................................................cfcfffffcfffbfff
    fcffffbffbffffffffbbddddd..........................................d...........................................................................bdcfffffffffbffff
    fcbffffffcfffffffcdddd..........................................................................................................................ccffffffffffffff
    fdcccffffdbffcffccdddd.............................................d............................................................................cfffffffffffffff
    fffffffffffffffcdddd.............................................................................................................................fcfffffffffffff
    ffffffffffffffcbddd.........................................................1....................................................................cffffffffffffff
    fffffffddcfffdddddd...............................................................................................................................ffffffffffffff
    fffffffdddbffbddd...............................................................................................................................bcfffcffffffffff
    ffffffcbfcccddddd................................................................................................................................ccfffffffffffff
    fffffffffcfddddd...................................................................................................................................cffffffffffff
    ffffffffdfcdddd.......d.....d.....................................................................................................................cfbfffcfffffff
    ffffffffcfbddd..................................................................d1.................................................................bfffdffffffff
    fffffffcdcdddd......................................................................................................................................ffffffffffff
    fffffbfffcddd.....................................................................................................................................bcffffffffffff
    fccffdcbfbddd.....................................................................................................................................bcffffffffffff
    fffcffcdfbdd............................................1.........................................................................................bcffffffffffff
    ffddfffbbbdd............................................1.........11...............................................................................cfccfffffffff
    cfdffffbcdd........................................................................................................................................bfcdfffffffff
    ffffffccdd.........................................................................................................................................ccfbfffffffff
    ffcfffbdb...........................................................................................................................................cfdbffffffff
    fffffcddddd...........................1..1..d1......................................................................................................bfcfffffffff
    fffffbdddd............................1..1...1......................................................................................................cfcfffffffff
    ffffcbddddd..........................................................................1.............................................................bcfffffffffff
    fffccddddd........................................................................................................................................bbffffffffffff
    ffdcbddddd.........................................................................................................................................bffffffffffcf
    ffccddddddd.......................................................................................................................................bcffffffffffff
    ffcbdddddd......................................b.............................bb..............................................bb..................bccfffffffffff
    ffcbddddd.....................................b................................b...............................................bb..................fffffffffffff
    fcbbdddddd.............b.......................................................b...............................................bbb..................cfffffffffff
    fcddddddd..............b........................bb..bbb........................b.................................................b................cfffffffffffff
    ccddddddd...............b.......................bb...bb...........................................................................................ffffffffffffff
    ddddddddd.......................1..................................................b.............................................................ccfffffffffffff
    dddddddd........................1...............1111...............................b...1.........................b...............................ccfffffffffffff
    dddddddd..................b....................1111111.............................b...1........................bb...............................ccfffffffffffff
    dddddddd......................................1111b1111..........................dbb1...........................b...............................ccffffffffffffff
    dddddddddd.........................1bb........1111bb111................b.........dbb...........................b................................cbffffffffffffff
    dddddddddd....................................111111111...........bb.............db1...........................................................ccfffffffffffffff
    dddddddddd........................b..bb.......1111111b1...........bbbb...........db1...1......................................................cbbcffffffffffffff
    ddddddddd1d.......................bb.bb.......1111111b1.............b..................1.....................................................ccbcfffffffffffffff
    ddddddddd1d..b....................b..b........111111bb1........................................................................................cffffffffffffffff
    ddddddddd1d..b................................1111111bb......................................................................................ccfffffffffffffffff
    dddddddddddddbbd.bb...............111d1.......d1d1111bb..........................1............................................................ccffffffffffffffff
    dddddddddddddbbd.b................ddb...........1ddddb..........................11...........................................................cffffffffffffffffff
    ddddddddddddddbd.b..bb..........................b.................b.d........................................................................cffffffffffffffffff
    ddddddddddddddbb.b..bb............................................d....b.......11............................................................cffffffffffffffffff
    dddddddddddddddb.b.db1.................................................d.......11.............................................................cfffffffffffffffff
    ddddddddddddddddbb.bbd............................................b....d.....................................................................cffffffffffffffffff
    ddddddddddddddddbb.bbd............................................b....d....................................................................cfcffffffffffffffcff
    ddddddddddddddddbb.b11.....................................................................................................................ccfffffffffffffffffff
    ddddddddddddddddbddbd1..................................................d.......1..........................................................cfcffffffffffffffffff
    ddddddddddddddddbbb111............................................1..............................................b.........................ffffffffffffffffffcff
    ddddddddddddddddbbd111............................................d1............................................bb........................cfffffffffffffffffffff
    ddddddddddddddddbbdd1d............................................111...............1...........................bb........................cfffffffcfffffffffffff
    dddddddbbdddddbbbbdddd............................................111............................................b.b.......................fffffffffffffffffffff
    dbddddddddbbbbbbbbbbbb......................................b.....b11........................................................b..........bbcfffffffffffffffffffff
    ddbddbddbbbbbbbbbbbbbb.............................b..............d11...................................................................bcffffffffffffffffffffff
    dbbbbbbbbbbbbbbbbbbbbb............................................111.................................................................bbbcdfffffffffffffffffffff
    bbbbbbbbbbbbbbbbbbbbbb..............................................1...........................................................b....bccfddfffffffffffffffffffff
    dbbbbbbbbbbbbbbbbbbbbbb...............................................................................................b.............bcffffffffffffffffffffffffff
    bbbbbbbbbbbbbbbbbbbbbb..............................................................................................................ccffffffffffffffffffffffffff
    bbbbbbbb..bbbbbbbbbbbb...............................................................................b......................b.....bbbffbdfffffffffffffffffffffff
    bbbbbbb.....bbbbbbbbbb.......................................................................b........b...........................bddfcbfdffffffffffffffffffffff
    bbbb..............bbbb............................................................................................................bdffdffbcfffffffffffffffffffff
    bbb............bbbbbbb....................................................d...........b....b......................................cffcdfffffffffffffffffcfffffff
    bb.............bbbbbbb.............................................b............................................................bcdffdfcdfffffffffffffffffffffff
    b..............bdbbbb..........................................b.bbb.b............b..................................b..........bfcffffcffffffffffffffffffffffff
    ................bdbbb.........................................bb.....c.b....bb....bb...........b...................b............cbdffffffffffbfffffcffffffffcbff
    .b.b........b.b.bbbb..................................b...b.bbdb.........................b......................................cffffffffffffffffffffffffcfffddf
    ......b........bbbbb...............................bb.b..bbbb.b...........bbb..................................................bffffffffffffffffffffffffcdfffcff
    ............b.bbbbbb..............................bbbbbb.......b............b..................................................cfffffffffffffffffffffffffffdffff
    .............bbbbbb.............................bbbc....b.bc...c................b...b..........b...............................ccfffffffffffffffffffffffffffffff
    ............bbbbbbb...........................bb........b.b....b.........................bbb..................................cfcffffffffffffffffcffffffffffffff
    b.b......b..bbbbbb..........................b....bb...................b............................b.b.......................bffffffffcffffffffffffffffcfcffffff
    .b..b.......bbbb............................b.b.......................b........b.cb..........................................cfffffffffffffffffffffffffffcffffff
    .................b.b.....................b..cbbc...b............c.b....................b.....................................fffbffffffffffffffffffffffffffcffff
    ............c......bb................b.b.b......b.bc..........................cb............b...............................cfffdfffffffffffffffffffffffffffffff
    ...........bc.....b...bb.......b...bbbbb....b....b.b.......................................................bb..............bffffcfffffffffffffffffffffffffffffff
    b.........c.........b.bbb.bbb.bbb...b....b................b................bc...c..........................cc..............bddfffffffffffcffffffffffffffffcccfff
    ............b....b...bb.b.b..bdb..........b.......b.....c............b................b........b...........................cdfffffffffffffffffffffffffffffccfffc
    ...c.................c.......bdbbb...b............cc.....b........c........c........................................c......cffffffffffffffffffffffffffffffffffff
    ...b.................c.......cb....bb......c.b..b...........bcbbb.cb......cb............................b..................cfffffffffffffffcffffffffffffffffffff
    b...........................b..b.bcb.bb....b.............bbbbbbcbbbbc.bb....b..bc................b.........................cffffbdcffffffffcffffffffffcfffffffff
    ...........................bb.....bc.......b....c.bb.bbbbcccbbccccbcbcbbbbbbbbccbcbbb.bbbb..........................bbbb...cffffcfbfffffffffffffffffffffffffffff
    ...................b.....cbb......bb.......bb....bbbbbccccccccccccccccccccccccccccbccbcbbccb.bb...................bbbbbb..bccfddfffffffffffbbfffffffffffffffffff
    bbb.......b............b..c..b.....bb..bccbcccbbcbbbcbccccccccccccccccccccccccccbcccccccccccccbbb.............bbbbccccbb..ccfffffcffffffffffffffffffffffffffffff
    cccb......................b.....bbbcbcccccbcccccccccccccccccccccccccccccccccccccccccccccccccccbccccb.b...b.bbbcccbccbbb...bfffffdfffffffffffffffffffffffffffffff
    cccc..b...........c....ccbbbccbbcbbccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccb.....fffffffffffffffcfffffffffffffffffffff
    ccbbbbb..........bc...cccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccbb......bfffffffffffffffffffffffffffffffffffff
    ccccccbcbbb.....bcccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccb........bfffffffffffffffffffffffffffffffffffff
    cccccccbccbbbcbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcb.........bcffffffffffffffffcbfffffffffffffffffff
    cccccccccccbcbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccbb.....b...bcfffffffffffffffffffffffffffffffffffff
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcbbcccccccccccccbbbb..........bcffcffffffffffffffffffffffffffffffffff
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccbbcccccbbcccccccbbbb...........bccffffffffffffffffffffffffffffffffffff
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcb......bbcbbbdbccccbb.....b.........cffdffdffffffffffffffffffffffffffffffff
    cccccccccccccccccccccccccccccccbbccccccccccccccccccccccccccccccccccccccccbcccbbbbbb..............bbbbbb.....c...........bcfffffffffffffffffffffffffffffffffffffc
    cccccccccccccccccccccccccccccbbddcbccccbccccccccccccccccccccccccccccccb.bbbb....b.....b......................cc.........cfffffffffffffffffffffffffffffffffffffff
    cccccccccccccccccccccccccccbbbcddbbcbbbbbccbbcccccccccccccccccccccbbb....bb.....b.cc..b...............................bcffffffffffffffffffffcfffffffffffffffffff
    ccccccccccccccccccccccccccbddddddbbbbddbbbbdbccccccccccccccccccbc..........b..cb.ccb................................cbfdffffffffffffffffffffffffffffffffffffffff
    cccccccccccccccbccccccccbcdddddddddbddddddbbb..bbbbcccccccccccc.b...........b......................................cfcfffffffffffffffffcbffffffffffffffcffffffff
    cccccccccccccccccccccfccccbddddddddddddddbcbc.....bbbcccccbbbc.......b...........................................c.ffbffffffffffffffffffbffffffffffffcbcffffffff
    ccccccccccccccccccfccffffccbdddddddddddddddbdb......c.bcb.......................................................bcfffdffcfffffbfffffffffdccfffffffffffffffffffff
    cccccccccccccccffcffcccffffccdddddddddddddccc.....b.b..b.......................................................bcffffffddfffffffffffffffddffffffffffffffffffffff
    cccccccfccffffcffffffcdfffffcfddddddddddddbccb....b..........................................................bcfffffffffdfffffffffcffffffffffffffbffffffffffffff
    ccfcccfffffffffffffffffffffcfccddddddddddbdc.............................................bccbbccbcbbb.bbb.bfffdffffffffffffffffcfffffffffffffddfffffffffffffffff
    cffcccffffffffffffffffffffffbcfcdddddddddccb.b.......................................b..fccccbfcfffffcbcfffcffcffffffffffccfffcffffffffffffffdbfffffffffffffffff
    fcfffffffffffffffffffffffffffffbcbbdddddbcbc.bbbcb.b..............................bbccffffffffffffffffcbfffffffffffdffffcfffffffffffffffffffccffffffffffffffffff
    fffffffffffffffffffffffffffffffcfffcdcfffcbcfcbccfccb............................bbbcfffffffffffffffffffcdbffffffffffffcdfdfffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffcffffffdffdfcffffcc........................b.ccfffffffffffffffffffffcffffcffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffdfffffbfbfffffbcfbffffffcccbcbcb.............ccccffffffffffffffffffffffffffffffffffffffffffcfffffffccfffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffccffffffffffffffdfdcfffffddffcffccccffb.bbb...cfdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffff
    fffffffffffffffffffcffffffffffffffffffffffffffffffffddfcfbfffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffcfffffdcfffddffffffffffffffffbffffcbffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffcfffff
    ffffffffffffffffffffffdfffffffffcfffffffbffffffffffdffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffbffffdfffcddcfffffffffffffffff
    fffffffffffffffffffffffffffffffffbffffffbffffffffffffffffffffffbfcffffcfffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffdddffffffffffccffffff
    `)
scene.setBackgroundColor(15)
mySprite = sprites.create(img`
    . . . . . . . f f f . . . . . . . . . . 
    . . . . f f f f f 5 f . . . . . . . . . 
    . . f f 5 5 5 5 5 5 5 f f . . . . . . . 
    . f f 5 5 5 5 5 5 5 5 5 f f . . . . . . 
    . f 5 5 5 5 f f f 5 5 5 5 f . . . . . . 
    . f f f f f 5 5 5 5 5 5 5 5 f . . . . . 
    f f f 5 5 5 5 f f f f f 5 5 f . b b . . 
    f f f f f f f f f e e e f f f b b b . . 
    f e f e 4 4 e b b f 4 4 e e f b b c . . 
    . f e e 4 d 4 b b f d d e f . b c c b . 
    . . f e e e 4 d d d d d f e e b c b b b 
    . . . f 2 2 2 2 2 2 2 e e d d b c c b . 
    . . . f 4 4 4 4 4 5 e 4 4 d d b b c . . 
    . . . f f f f f f f f e e e e b b b . . 
    . . . f f f . . . f f . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
game.onUpdate(function () {
    if (lvl == 3) {
        for (let index = 0; index <= 64; index++) {
            tiles.setWallAt(tiles.getTileLocation(index, lavalvl), false)
            tiles.setTileAt(tiles.getTileLocation(index, lavalvl), sprites.dungeon.hazardLava1)
        }
    }
})
game.onUpdate(function () {
    if (info.score() >= 17 && lvl == 2) {
        lvl += 1
        destroy()
    }
})
game.onUpdate(function () {
    if (info.score() >= 14 && lvl == 3) {
        game.gameOver(true)
    }
})
game.onUpdateInterval(12000, function () {
    if (lvl == 3) {
        for (let value of tiles.getTilesByType(sprites.dungeon.darkGroundNorthWest1)) {
            tiles.setTileAt(value, sprites.dungeon.hazardLava1)
        }
        lavalvl = lavalvl - 1
    }
})
forever(function () {
    if (mySprite.vx <= -1) {
        mySprite.setImage(img`
            . . . . . . . . . . f f f . . . . . . . 
            . . . . . . . . . f 5 f f f f f . . . . 
            . . . . . . . f f 5 5 5 5 5 5 5 f f . . 
            . . . . . . f f 5 5 5 5 5 5 5 5 5 f f . 
            . . . . . . f 5 5 5 5 f f f 5 5 5 5 f . 
            . . . . . f 5 5 5 5 5 5 5 5 f f f f f . 
            . . b b . f 5 5 f f f f f 5 5 5 5 f f f 
            . . b b b f f f e e e f f f f f f f f f 
            . . c b b f e e 4 4 f b b e 4 4 e f e f 
            . b c c b . f e d d f b b 4 d 4 e e f . 
            b b b c b e e f d d d d d 4 e e e f . . 
            . b c c b d d e e 2 2 2 2 2 2 2 f . . . 
            . . c b b d d 4 4 e 5 4 4 4 4 4 f . . . 
            . . b b b e e e e f f f f f f f f . . . 
            . . . . . . . . . f f . . . f f f . . . 
            `)
    } else {
        mySprite.setImage(img`
            . . . . . . . f f f . . . . . . . . . . 
            . . . . f f f f f 5 f . . . . . . . . . 
            . . f f 5 5 5 5 5 5 5 f f . . . . . . . 
            . f f 5 5 5 5 5 5 5 5 5 f f . . . . . . 
            . f 5 5 5 5 f f f 5 5 5 5 f . . . . . . 
            . f f f f f 5 5 5 5 5 5 5 5 f . . . . . 
            f f f 5 5 5 5 f f f f f 5 5 f . b b . . 
            f f f f f f f f f e e e f f f b b b . . 
            f e f e 4 4 e b b f 4 4 e e f b b c . . 
            . f e e 4 d 4 b b f d d e f . b c c b . 
            . . f e e e 4 d d d d d f e e b c b b b 
            . . . f 2 2 2 2 2 2 2 e e d d b c c b . 
            . . . f 4 4 4 4 4 5 e 4 4 d d b b c . . 
            . . . f f f f f f f f e e e e b b b . . 
            . . . f f f . . . f f . . . . . . . . . 
            `)
    }
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile1`)
    for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
        mySprite3 = sprites.create(img`
            . . . . . . c c c c . . . . . . 
            . . . . . . c c c c . . . . . . 
            . . . . . . c c c c . . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . . c c c c c . . . . . 
            . . . . . c c c c c c . . . . . 
            . . . c c b b b b b b c . c . . 
            c c c c c b b b b b b c c c c c 
            c c c c c b b b b b b c c c c c 
            c c c c c b b b b b b c c c c c 
            . . c . c b b b b b b c c . . . 
            . . . . . c c c c c c . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . . c c c c c . . . . . 
            . . . . . . c c c c . . . . . . 
            . . . . . . c c c c . . . . . . 
            `, SpriteKind.saw)
        tiles.placeOnTile(mySprite3, value)
        animation.runImageAnimation(
        mySprite3,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . c c . . . . . . . . . c c . . 
            . c c c c . . . . . . c c c . . 
            . . c c c c . . . . c c c c . . 
            . . c c c c c . . c c c c c . . 
            . . . c c c c b b c c c c . . . 
            . . . . c c b b b b c c . . . . 
            . . . . . b b b b b b . . . . . 
            . . . . c c b b b b c c . . . . 
            . . . c c c c b b c c c c c . . 
            . . c c c c . . . c c c c c c . 
            . c c c c . . . . . . c c c c . 
            . c c . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . c c c c . . . . . . 
            . . . . . . c c c c . . . . . . 
            . . . . . . c c c c . . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . . c c c c c . . . . . 
            . . . . . c c c c c c . . . . . 
            . . . c c b b b b b b c . c . . 
            c c c c c b b b b b b c c c c c 
            c c c c c b b b b b b c c c c c 
            c c c c c b b b b b b c c c c c 
            . . c . c b b b b b b c c . . . 
            . . . . . c c c c c c . . . . . 
            . . . . . c c c c c . . . . . . 
            . . . . . . c c c c c . . . . . 
            . . . . . . c c c c . . . . . . 
            . . . . . . c c c c . . . . . . 
            `],
        200,
        true
        )
    }
})
