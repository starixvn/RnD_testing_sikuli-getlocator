const pw = require('playwright')
const path = require('path')
import * as config from '../../config/config'
import * as utils from '../../util/utils'
import * as GamelobbyLocator from './../GameLobby_Locator'
const fs = require('fs')
const section = "VipSedie"

export const writeLocator = async(Image,theme) => {
    try {
        if(IsRunVipSedie !== false) {
            await utils.setBalance(config[env].memberId[section])
            // Navigate VipSedie Game
            let loc = await utils.getLocatorImage(Image + "GameLobby" + path.sep +"ImgCompare_" + "GameLobby" + "_" + section +"Icon" + ".png")
            await utils.clickPos(loc.x,loc.y)
            // gen File
            let extFile = "const path = require('path') \n\
const pathImageCompare = path.join(__dirname,\"../../\") + path.sep + \"ImageCompare\" + path.sep + \""+section+"\" + path.sep\n\
export const "+section+"Locator = { \n"
            // Write Dealer Locator
            let object = "Dealer"
            extFile = extFile + await utils.genCoordinateByImage(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            section,object)
            
            // Write Even Choice Locator
            object = "Even"
            extFile = extFile + await utils.genAllInfoByImage(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            section,object)
            // Write Odd Choice Locator
            object = "Odd"
            extFile = extFile + await utils.genAllInfoByImage(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            section,object)
            // Write Red4 Choice Locator
            object = "Red4"
            extFile = extFile + await utils.genAllInfoByImage(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            section,object)
            
            // Write Red3 Choice Locator
            object = "Red3"
            extFile = extFile + await utils.genAllInfoByImage(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            section,object)

            // Write Red2 Choice Locator
            object = "Red2"
            extFile = extFile + await utils.genAllInfoByImage(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            section,object)
            // Write Red1 Choice Locator
            object = "Red1"
            extFile = extFile + await utils.genAllInfoByImage(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            section,object)
            // Write White4 Choice Locator
            object = "White4"
            extFile = extFile + await utils.genAllInfoByImage(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            section,object)
            // Write Balance Locator
            object = "Balance"
            extFile = extFile + await utils.genCoordinateByImage(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            section,object)
            // Write Chip Broad Locator
            object = "ChipBroad"
            extFile = extFile + await utils.genAllInfoByImage(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
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
            // Write Chip10 Locator
            object = "Chip10"
            extFile = extFile + await utils.genXYByImage(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            object)
            // Write Chip20 Locator
            object = "Chip20"
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
            // Write Chip200 Locator
            object = "Chip200"
            extFile = extFile + await utils.genXYByImage(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            object)
            // Swipe Chip broad
            loc = await utils.getLocatorImage(Image + section + path.sep +"ImgCompare_" + section + "_ChipBroad.png")
            await utils.swipe(loc.x,loc.y,loc.x-500,loc.y)
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
            // Write Chip3000 Locator
            object = "Chip3000"
            extFile = extFile + await utils.genXYByImage(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            object)
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
            // Write Guide Locator
            object = "Guide"
            extFile = extFile + await utils.genAllInfoByImageClickPopupIndex5(
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
            loc = await utils.getLocatorImage(Image + section + path.sep +"ImgCompare_" + section + "_" + "Home" + "Icon.png")
            await utils.clickPos(loc.x,loc.y)
            await utils.sleep(3000)
        }
    } catch (error) {
        console.log(error)
        await utils.reload()
        // Back to Game Lobby Menu
        let loc = await utils.getLocatorImage(Image + section + path.sep +"ImgCompare_" + section + "_" + "Home" + "Icon.png")
        await utils.clickPos(loc.x,loc.y)
        await utils.sleep(3000)
    } 
}