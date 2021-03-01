const path = require('path') 
const pathImageCompare = path.join(__dirname,"../../") + path.sep + "ImageCompare" + path.sep + "MiniSedie" + path.sep
export const MiniSedieLocator = { 
	Even : { x : 480, y : 295, top : 281, left : 417, width : 126, height : 29, ImageCompareEven : pathImageCompare + "ImgCompare_MiniSedie_Even.png" },
	Odd : { x : 797, y : 295, top : 280, left : 737, width : 120, height : 30, ImageCompareOdd : pathImageCompare + "ImgCompare_MiniSedie_Odd.png" },
	Red4 : { x : 469, y : 415, top : 387, left : 425, width : 88, height : 56, ImageCompareRed4 : pathImageCompare + "ImgCompare_MiniSedie_Red4.png" },
	Red3 : { x : 586, y : 415, top : 390, left : 544, width : 85, height : 51, ImageCompareRed3 : pathImageCompare + "ImgCompare_MiniSedie_Red3.png" },
	Red1 : { x : 705, y : 415, top : 386, left : 662, width : 86, height : 58, ImageCompareRed1 : pathImageCompare + "ImgCompare_MiniSedie_Red1.png" },
	White4 : { x : 824, y : 412, top : 387, left : 781, width : 87, height : 51, ImageCompareWhite4 : pathImageCompare + "ImgCompare_MiniSedie_White4.png" },
	ChipBroad : { x : 646, y : 530, top : 498, left : 430, width : 432, height : 65, ImageCompareChipBroad : pathImageCompare + "ImgCompare_MiniSedie_ChipBroad.png" },
	LeftArrow : { x : 397, y : 530 },
	RightArrow : { x : 881, y : 529 },
	Chip1 : { x : 464, y : 525 },
	Chip5 : { x : 531, y : 528 },
	Chip10 : { x : 597, y : 530 },
	Chip50 : { x : 668, y : 529 },
	Chip100 : { x : 736, y : 528 },
	Chip200 : { x : 600, y : 530 },
	Chip500 : { x : 678, y : 528 },
	Chip1000 : { x : 746, y : 530 },
	Chip2000 : { x : 814, y : 528 },
	Close : { x : 924, y : 273 },
	Statistic : { x : 364, y : 272, top : 122, left : 455, width : 76, height : 103, ImageCompareStatistic : pathImageCompare + "ImgCompare_MiniSedie_Statistic.png" },
	History : { x : 344, y : 349, top : 95, left : 89, width : 1123, height : 122, ImageCompareHistory : pathImageCompare + "ImgCompare_MiniSedie_History.png" },
	HistoryClose : { x : 1187, y : 121 },
	Guide : { x : 939, y : 351, top : 83, left : 172, width : 933, height : 567, ImageCompareGuide : pathImageCompare + "ImgCompare_MiniSedie_Guide.png", ImageCompareGuide2 : pathImageCompare + "ImgCompare_MiniSedie_Guide_2.png", ImageCompareGuide3 : pathImageCompare + "ImgCompare_MiniSedie_Guide_3.png", ImageCompareGuide4 : pathImageCompare + "ImgCompare_MiniSedie_Guide_4.png", ImageCompareGuide5 : pathImageCompare + "ImgCompare_MiniSedie_Guide_5.png" },
	GuideClose : { x : 1084, y : 111 }
}