const pw = require('playwright')
const path = require('path')
import * as config from '../../config/config'
import * as utils from '../../util/utils'
const fs = require('fs')
const section = "BlackJack"

export const writeLocator = async(Image,theme)=> {
    try {
        if(IsRunBlackJack !== false) {
            await utils.setBalance(config[env].memberId[section],100000)
            // swipe right
            await utils.swipe(config.setting.viewport.width/2, config.setting.viewport.height/2,config.setting.viewport.width/2 - 500, config.setting.viewport.height/2)
            await utils.sleep(1000)
            let loc = await utils.getLocatorImage(Image + "GameLobby" + path.sep +"ImgCompare_" + "GameLobby" + "_" + section +"Icon" + ".png")
            await utils.clickPos(loc.x,loc.y)

            // gen File
            let extFile = "const path = require('path') \n\
const pathImageCompare = path.join(__dirname,\"../../\") + path.sep + \"ImageCompare\" + path.sep + \""+section+"\" + path.sep\n\
export const "+section+"Locator = { \n"
            // Write Odds Locator
            let object = "Odds"
            extFile = extFile + await utils.genCoordinateByImage(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            section,object)
            // Write BetLimit Locator
            object = "BetLimit"
            extFile = extFile + await utils.genCoordinateByImage(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            section,object)
            // Write Total Stake Locator
            let listChip = ['1','5','10','50','100','200','500','1000']
            object = "Stake"
            extFile = extFile + await utils.genCoordinateByImageList(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            section,object,listChip)
            // Write Chip Broad Locator
            object = "ChipBroad"
            extFile = extFile + await utils.genCoordinateByImage(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            section,object)
            // Write Left Arrow Locator
            object = "LeftArrow"
            extFile = extFile + await utils.genXYByImage(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            object)
            // Write Right Arrow Locator
            object = "RightArrow"
            extFile = extFile + await utils.genXYByImage(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            object)
            // Write Chip1 Locator
            object = "Chip1"
            extFile = extFile + await utils.genXYByImage(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            object)
            // Write Chip5 Locator
            object = "Chip5"
            extFile = extFile + await utils.genXYByImage(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            object)
            // Write Chip10 Locator
            object = "Chip10"
            extFile = extFile + await utils.genXYByImage(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            object)
            // Write Chip50 Locator
            object = "Chip50"
            extFile = extFile + await utils.genXYByImage(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            object)
            // Write Chip100 Locator
            object = "Chip100"
            extFile = extFile + await utils.genXYByImage(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            object)
            // Swipe Chip broad
            loc = await utils.getLocatorImage(Image + section + path.sep +"ImgCompare_" + section + "_ChipBroad.png")
            await utils.swipe(loc.x,loc.y,loc.x-500,loc.y)
            // Write Chip200 Locator
            object = "Chip200"
            extFile = extFile + await utils.genXYByImage(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            object)
            // Write Chip500 Locator
            object = "Chip500"
            extFile = extFile + await utils.genXYByImage(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            object)
            // Write Chip1000 Locator
            object = "Chip1000"
            extFile = extFile + await utils.genXYByImage(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            object)
            // Write Chip2000 Locator
            object = "Chip2000"
            extFile = extFile + await utils.genXYByImage(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            object)
            // Select Chip2000
            loc = await utils.getLocatorImage(Image + section + path.sep +"ImgCompare_" + section + "_" + "Chip2000" + ".png")
            await utils.clickPos(loc.x,loc.y)
            await utils.sleep(1000)
            // Write Pos1 Locator
            object = "Pos1"
            extFile = extFile + await utils.genAllInfoByImageList(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            section,object,listChip)
            let pos1loc = await utils.getLocatorImage(Image + section + path.sep +"ImgCompare_" + section + "_" + "Pos1" + ".png")
            // Write Pos2 Locator
            object = "Pos2"
            extFile = extFile + await utils.genAllInfoByImageList(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            section,object,listChip)
            let pos2loc = await utils.getLocatorImage(Image + section + path.sep +"ImgCompare_" + section + "_" + "Pos2" + ".png")
            // Write Pos3 Locator
            object = "Pos3"
            extFile = extFile + await utils.genAllInfoByImageList(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            section,object,listChip)
            let pos3loc = await utils.getLocatorImage(Image + section + path.sep +"ImgCompare_" + section + "_" + "Pos3" + ".png")
            // Bet on Pos1
            await utils.clickPos(pos1loc.x,pos1loc.y)
            await utils.sleep(1000)
            // Write Pos1Stake Locator
            object = "Pos1Stake"
            extFile = extFile + await utils.genCoordinateByImageList(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            section,object,listChip)
            // Write Pos1Cancel Locator
            object = "Pos1Cancel"
            extFile = extFile + await utils.genAllInfoByImage(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            section,object)
            // Cancel on Pos1
            loc = await utils.getLocatorImage(Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png")
            await utils.clickPos(loc.x,loc.y)
            await utils.sleep(1000)
            // Bet on Pos2
            await utils.clickPos(pos2loc.x,pos2loc.y)
            await utils.sleep(1000)
            // Write Pos2Stake Locator
            object = "Pos2Stake"
            extFile = extFile + await utils.genCoordinateByImageList(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            section,object,listChip)
            object = "Pos2Cancel"
            // Write Pos2Cancel Locator
            extFile = extFile + await utils.genAllInfoByImage(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            section,object) 
            // Cancel on Pos2
            loc = await utils.getLocatorImage(Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png")
            await utils.clickPos(loc.x,loc.y)
            await utils.sleep(1000)
            // Bet on Pos3
            await utils.clickPos(pos3loc.x,pos3loc.y)
            await utils.sleep(1000)
            // Write Pos3Stake Locator
            object = "Pos3Stake"
            extFile = extFile + await utils.genCoordinateByImageList(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            section,object,listChip)
            // Write Pos3Cancel Locator
            object = "Pos3Cancel"
            extFile = extFile + await utils.genAllInfoByImage(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            section,object) 
            // Bet on Pos1
            await utils.clickPos(pos1loc.x,pos1loc.y)
            await utils.sleep(1000)
            // Bet on Pos2
            await utils.clickPos(pos2loc.x,pos2loc.y)
            await utils.sleep(1000)
            // Write Deal Locator
            object = "Deal"
            extFile = extFile + await utils.genAllInfoByImage(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            section,object)
            // Write Cancel Locator
            object = "Cancel"
            extFile = extFile + await utils.genAllInfoByImage(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            section,object)
            
            // Click on Deal
            loc = await utils.getLocatorImage(Image + section + path.sep +"ImgCompare_" + section + "_" + "Deal" + ".png")
            await utils.clickPos(loc.x,loc.y)
            // Write Hit Locator
            object = "Hit"
            extFile = extFile + await utils.genAllInfoByImage(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            section,object)
            // Write Stand Locator
            object = "Stand"
            extFile = extFile + await utils.genAllInfoByImage(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            section,object)
            // Hard code for Double Split
            object = "DoubleSplit"
            extFile = extFile + "\t"+ object +" : { " +
            "x : 50, y : 198, top : 285, left : 10, width : 89, height : 110, " +
            "xs : 48, ys : 265, tops : 460, lefts : 10, widths : 85, heights : 70, " +
            "ImageCompareDouble : pathImageCompare + \"ImgCompare_"+ section +"_Double.png\", " +
            "ImageCompareDoubleSplit : pathImageCompare + \"ImgCompare_"+ section +"_DoubleSplit.png\" },\n"
            // Hard code for Split
            object = "Split"
            extFile = extFile + "\t"+ object +" : { " +
            "x : 50, y : 198, top : 285, left : 10, " + 
            "width : 89, " + 
            "height : 110, " +
            "ImageCompare" + object + " : pathImageCompare + \"ImgCompare_"+ section +"_" + object + ".png\" },\n"
            // Click on Stand 3 times to Finish Game
            loc = await utils.getLocatorImage(Image + section + path.sep +"ImgCompare_" + section + "_" + "Stand" + ".png")
            let flag = await utils.findImage(Image + section + path.sep +"ImgCompare_" + section + "_" + "Stand" + ".png",loc.left,loc.top,loc.width,loc.height)
            while(flag.Val === true) {
            await utils.sleep(500)
            await utils.clickPos(loc.x,loc.y)
            await utils.swipe(
                config.setting.viewport.width/2,
                config.setting.viewport.height/2,
                config.setting.viewport.width/2,
                config.setting.viewport.height/2
                )
            flag = await utils.findImage(Image + section + path.sep +"ImgCompare_" + section + "_" + "Stand" + ".png",loc.left,loc.top,loc.width,loc.height)
            }
            // Write Renew Locator
            object = "Renew"
            extFile = extFile + await utils.genAllInfoByImage(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            section,object)
            // Write New Locator
            object = "New"
            extFile = extFile + await utils.genAllInfoByImage(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            section,object)

            // Write Menu Locator
            object = "Menu"
            extFile = extFile + await utils.genAllInfoByImageClickPopup(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + "Icon.png",
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + "Icon.png",
            section,object)
            // Write Home Locator
            object = "Home"
            extFile = extFile + await utils.genXYByImage(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + "Icon.png",
            object)
            // Write History Locator
            object = "History"
            extFile = extFile + await utils.genAllInfoByImageClickPopup(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + "Icon.png",
            section,object)
            // Write History Close Locator
            object = "HistoryClose"
            extFile = extFile + await utils.genXYByImage(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            object)
            // Close History Popup
            loc = await utils.getLocatorImage(Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png")
            await utils.clickPos(loc.x,loc.y)
            // Click on Menu Again
            loc = await utils.getLocatorImage(Image + section + path.sep +"ImgCompare_" + section + "_MenuIcon.png")
            await utils.clickPos(loc.x,loc.y)

            // Write Guide Locator
            object = "Guide"
            extFile = extFile + await utils.genAllInfoByImageClickPopupIndex6(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + "Icon.png",
            section,object)
            // Write Guide Close Locator
            object = "GuideClose"
            extFile = extFile + await utils.genXYByImage(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            object,"")
            // Close Guide Popup
            loc = await utils.getLocatorImage(Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png")
            await utils.clickPos(loc.x,loc.y)

            
            //end file
            extFile = extFile + "}"
            fs.writeFile(path.join(__dirname,"../../") + path.sep + "ExtractLocator" + path.sep + theme + path.sep + section +"_Locator.js", extFile, 
            function (err) {
            if (err) { return console.log(err) }
            })
            // Back to Game Lobby Menu
            loc = await utils.getLocatorImage(Image + section + path.sep +"ImgCompare_" + section + "_" + "Menu" + "Icon.png")
            await utils.clickPos(loc.x,loc.y)
            loc = await utils.getLocatorImage(Image + section + path.sep +"ImgCompare_" + section + "_" + "Home" + "Icon.png")
            await utils.clickPos(loc.x,loc.y)
            await utils.sleep(3000)
        }
    } catch (error) {
    console.log(error)
    await utils.reload()
    // Click on Game Menu
    let loc = await utils.getLocatorImage(Image + section + path.sep +"ImgCompare_" + section + "_" + "Menu" + "Icon.png")
    await utils.clickPos(loc.x,loc.y)
    // Back to Game Lobby Menu
    loc = await utils.getLocatorImage(Image + section + path.sep +"ImgCompare_" + section + "_" + "Home" + "Icon.png")
    await utils.clickPos(loc.x,loc.y)
    await utils.sleep(3000)
    }
}