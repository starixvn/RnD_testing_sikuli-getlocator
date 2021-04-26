const pw = require('playwright')
const path = require('path')
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants'
import * as config from '../../config/config'
import * as utils from '../../util/utils'
const fs = require('fs')
const section = "BigSmallSicbo"

export const writeLocator = async(Image,theme)=> {
  try {
    if(IsRunBigSmallSicbo !== false) {
      await utils.setBalance(config[env].memberId[section])
      // Navigate BigSmallSicbo Game
      let loc = await utils.getLocatorImage(Image + "GameLobby" + path.sep +"ImgCompare_" + "GameLobby" + "_" + section +"Icon" + ".png")
      await utils.clickPos(loc.x,loc.y)
      // gen File
      let extFile = "const path = require('path') \n\
const pathImageCompare = path.join(__dirname,\"../../\") + path.sep + \"ImageCompare\" + path.sep + \""+section+"\" + path.sep\n\
export const "+section+"Locator = { \n"
      // Write Specific1 Locator
      let object = "Specific1"
      extFile = extFile + await utils.genAllInfoByImage(
        Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
        Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
        section,object)
      
      // Write Specific2 Choice Locator
      object = "Specific2"
      extFile = extFile + await utils.genAllInfoByImage(
        Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
        Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
        section,object)
      // Write Specific3 Choice Locator
      object = "Specific3"
      extFile = extFile + await utils.genAllInfoByImage(
        Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
        Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
        section,object)
      // Write Specific4 Choice Locator
      object = "Specific4"
      extFile = extFile + await utils.genAllInfoByImage(
        Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
        Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
        section,object)
      
      // Write Specific5 Choice Locator
      object = "Specific5"
      extFile = extFile + await utils.genAllInfoByImage(
        Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
        Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
        section,object)

      // Write Specific6 Choice Locator
      object = "Specific6"
      extFile = extFile + await utils.genAllInfoByImage(
        Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
        Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
        section,object)
      // Write Total4 Choice Locator
      object = "Total4"
      extFile = extFile + await utils.genAllInfoByImage(
        Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
        Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
        section,object)
      // Write Total5 Choice Locator
      object = "Total5"
      extFile = extFile + await utils.genAllInfoByImage(
        Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
        Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
        section,object)
      // Write Total6 Choice Locator
      object = "Total6"
      extFile = extFile + await utils.genAllInfoByImage(
        Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
        Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
        section,object)
      // Write Total7 Choice Locator
      object = "Total7"
      extFile = extFile + await utils.genAllInfoByImage(
        Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
        Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
        section,object)
      // Write Total8 Choice Locator
      object = "Total8"
      extFile = extFile + await utils.genAllInfoByImage(
        Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
        Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
        section,object)
      // Write Total9 Choice Locator
      object = "Total9"
      extFile = extFile + await utils.genAllInfoByImage(
        Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
        Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
        section,object)
      // Write Total10 Choice Locator
      object = "Total10"
      extFile = extFile + await utils.genAllInfoByImage(
        Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
        Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
        section,object)
      // Write Total11 Choice Locator
      object = "Total11"
      extFile = extFile + await utils.genAllInfoByImage(
        Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
        Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
        section,object)
      // Write Total12 Choice Locator
      object = "Total12"
      extFile = extFile + await utils.genAllInfoByImage(
        Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
        Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
        section,object)
      // Write Total13 Choice Locator
      object = "Total13"
      extFile = extFile + await utils.genAllInfoByImage(
        Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
        Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
        section,object)
      // Write Total14 Choice Locator
      object = "Total14"
      extFile = extFile + await utils.genAllInfoByImage(
        Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
        Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
        section,object)
      // Write Total15 Choice Locator
      object = "Total15"
      extFile = extFile + await utils.genAllInfoByImage(
        Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
        Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
        section,object)
      // Write Total16 Choice Locator
      object = "Total16"
      extFile = extFile + await utils.genAllInfoByImage(
        Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
        Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
        section,object)
      // Write Total17 Choice Locator
      object = "Total17"
      extFile = extFile + await utils.genAllInfoByImage(
        Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
        Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
        section,object)
      // Write Big Choice Locator
      object = "Big"
      extFile = extFile + await utils.genAllInfoByImage(
        Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
        Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
        section,object)
      // Write AnyTriple Choice Locator
      object = "AnyTriple"
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
      // Write Chip Broad Locator
      let list = ['1','2']
      object = "ChipBroad"
      extFile = extFile + await utils.genAllInfoByImageList(
        Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
        Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
        section,object,list)
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
      // Write Menu Locator
      object = "Menu"
      extFile = extFile + await utils.genXYByImage(
        Image + section + path.sep +"ImgCompare_" + section + "_" + object + "Icon.png",
        object)
      // Click on Menu
      loc = await utils.getLocatorImage(Image + section + path.sep +"ImgCompare_" + section + "_MenuIcon.png")
      await utils.clickPos(loc.x,loc.y)
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
      
      await utils.sleep(3000)
      // Click on Menu Again
      loc = await utils.getLocatorImage(Image + section + path.sep +"ImgCompare_" + section + "_MenuIcon.png")
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
      await utils.sleep(3000)
      // Click on Menu Again
      loc = await utils.getLocatorImage(Image + section + path.sep +"ImgCompare_" + section + "_MenuIcon.png")
      await utils.clickPos(loc.x,loc.y)
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