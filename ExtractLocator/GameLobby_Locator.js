const path = require('path') 
const pathImageCompare = path.dirname(__dirname) + path.sep + "ImageCompare" + path.sep 
export const GameLobbyLocator = { 
	cvGame : "GameCanvas",
	AccountName : { top : 15, left : 480, width : 80, height : 47, ImageCompareAccountName : pathImageCompare + "ImgCompare_GameLobby_AccountName.jpg" },
	VipSedieIcon : { x : 305, y : 274 }, 
	SedieIcon : { x : 306, y : 450 }, 
	SedieWarIcon : { x : 478, y : 275 }, 
	MiniSedieIcon : { x : 480, y : 445 }, 
	BigSmallSicboIcon : { x : 653, y : 275 }, 
	BigSmallIcon : { x : 655, y : 446 }, 
	TurboBigSmallIcon : { x : 827, y : 273 }, 
	TurbOddEvenIcon : { x : 826, y : 450 }, 
	KenoProMaxIcon : { x : 998, y : 274 }, 
	KenoProVietIcon : { x : 998, y : 446 }, 
	VipBaccaratIcon : { x : 1173, y : 271 }, 
	BaccaratIcon : { x : 1174, y : 448 } 
}