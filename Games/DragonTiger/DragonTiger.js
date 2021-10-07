const pw = require('playwright')
const path = require('path')
import * as config from '../../config/config'
import * as utils from '../../util/utils'
const fs = require('fs')
const section = "DragonTiger"

export const writeLocator = async(Image,theme)=> {
  try {
    if(IsRunDragonTiger !== false) {
        await utils.setBalance(config[env].memberId[section])
      
        // swipe right
        await utils.swipe(config.setting.viewport.width/2 + 100 , config.setting.viewport.height/2, 0, config.setting.viewport.height/2)
        // Navigate DragonTiger Game
        let loc = await utils.getLocatorImage(Image + "GameLobby" + path.sep +"ImgCompare_" + "GameLobby" + "_" + section +"Icon" + ".png")
        await utils.clickPos(loc.x,loc.y)
        // gen File
        let extFile = "const path = require('path') \n\
const pathImageCompare = path.join(__dirname,\"../../\") + path.sep + \"ImageCompare\" + path.sep + \""+section+"\" + path.sep\n\
export const "+section+"Locator = { \n"
      
        // Write Dragon Choice Locator
        let object = "Dragon"
        extFile = extFile + await utils.genAllInfoByImage(
        Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
        Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
        section,object)
        // Write Tiger Choice Locator
        object = "Tiger"
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
        // Write Chip Broad Locator
        let list = ['1','2']
        object = "ChipBroad"
        extFile = extFile + await utils.genAllInfoByImageList(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            section,object,list)
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
        // Write Close Locator
        object = "Close"
        extFile = extFile + await utils.genXYByImage(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            object)
        // // Write Statistic Locator
        // object = "Statistic"
        // extFile = extFile + await utils.genAllInfoByImage(
        //     Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
        //     Image + section + path.sep +"ImgCompare_" + section + "_" + object + "Icon.png",
        //     section,object)
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
        loc = await utils.getLocatorImage(Image + section + path.sep +"ImgCompare_" + section + "_" + "Close" + ".png")
        await utils.clickPos(loc.x,loc.y)
        await utils.sleep(3000)
    }
  } catch (error) {
    console.log(error)
    await utils.reload()
    await utils.sleep(3000)
  } 
}