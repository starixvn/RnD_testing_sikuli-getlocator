const path = require('path')
const pathImageCompare = path.join(__dirname, '../') + path.sep + "ImageCompare" + path.sep
export const GameLobbyLocator = {
    cvGame : "GameCanvas",
    AccountName : { top : 7, left : 452, width : 81, height : 49, ImageCompare : pathImageCompare + "ImgCompare_GameLobby_AccountName.png" },
    SedieIcon: { x: 500, y: 440 }
}