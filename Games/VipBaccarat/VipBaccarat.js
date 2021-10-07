const pw = require('playwright')
const path = require('path')
import * as config from '../../config/config'
import * as utils from '../../util/utils'
import * as GamelobbyLocator from './../GameLobby_Locator'
const fs = require('fs')
const section = "VipBaccarat"

export const writeLocator = async(Image,theme) => {
    try {
        if(IsRunVipBaccarat !== false) {
            // await utils.setBalance(config[env].memberId[section])

            // swipe right
            await utils.swipe(config.setting.viewport.width/2 + 100 , config.setting.viewport.height/2, 0, config.setting.viewport.height/2)
            await utils.sleep(1000)

            // Navigate VipBaccarat Game
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
            
            // Write Big Choice Locator
            object = "Big"
            extFile = extFile + await utils.genAllInfoByImage(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            section,object)
            // Write PlayerPair Choice Locator
            object = "PlayerPair"
            extFile = extFile + await utils.genAllInfoByImage(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            section,object)
            // Write Player Choice Locator
            object = "Player"
            extFile = extFile + await utils.genAllInfoByImage(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            section,object)
            
            // Write Tie Choice Locator
            object = "Tie"
            extFile = extFile + await utils.genAllInfoByImage(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            section,object)

            // Write Banker Choice Locator
            object = "Banker"
            extFile = extFile + await utils.genAllInfoByImage(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            section,object)
            // Write Small Choice Locator
            object = "Small"
            extFile = extFile + await utils.genAllInfoByImage(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            section,object)
            // Write BankerPair Choice Locator
            object = "BankerPair"
            extFile = extFile + await utils.genAllInfoByImage(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            section,object)
            // Write Chip Broad Locator
            let list = ['1','2']
            object = "ChipBroad"
            extFile = extFile + await utils.genAllInfoByImageList(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            section,object,list)
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
            // // Swipe Chip broad
            // loc = await utils.getLocatorImage(Image + section + path.sep +"ImgCompare_" + section + "_ChipBroad.png")
            // await utils.swipe(loc.x,loc.y,loc.x-500,loc.y)
            // // Write Chip500 Locator
            // object = "Chip500"
            // extFile = extFile + await utils.genXYByImage(
            // Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            // object)
            // // Write Chip1000 Locator
            // object = "Chip1000"
            // extFile = extFile + await utils.genXYByImage(
            // Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            // object)
            // // Write Chip2000 Locator
            // object = "Chip2000"
            // extFile = extFile + await utils.genXYByImage(
            // Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            // object)
            // // Write Chip3000 Locator
            // object = "Chip3000"
            // extFile = extFile + await utils.genXYByImage(
            // Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            // object)
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