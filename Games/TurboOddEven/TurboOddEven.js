const pw = require('playwright')
const path = require('path')
import * as config from '../../config/config'
import * as utils from '../../util/utils'
const fs = require('fs')
const section = "TurboOddEven"

export const writeLocator = async(Image,theme)=> {
    try {
        
        if(IsRunTurboOddEven !== false) {
            await utils.setBalance(config[env].memberId[section])
            // Navigate Sedie Game
            let loc = await utils.getLocatorImage(Image + "GameLobby" + path.sep +"ImgCompare_" + "GameLobby" + "_" + section +"Icon" + ".png")
            await utils.clickPos(loc.x,loc.y)
            // gen File
            let extFile = "const path = require('path') \n\
const pathImageCompare = path.join(__dirname,\"../../\") + path.sep + \"ImageCompare\" + path.sep + \""+section+"\" + path.sep\n\
export const "+section+"Locator = { \n"

            // Write Title Locator
            let object = "Title"
            extFile = extFile + await utils.genCoordinateByImage(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            section,object)        

            // Write Even Locator
            object = "Even"
            extFile = extFile + await utils.genCoordinateByImage(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            section,object)
            // Write Odd Locator
            object = "Odd"
            extFile = extFile + await utils.genCoordinateByImage(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            section,object)
            // Write Odds Locator
            object = "Odds"
            extFile = extFile + await utils.genCoordinateByImage(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            section,object)

            // // Write Pos Even Locator
            let listChip = ['1','5','10','50','100','200','500','1000']
            object = "PosEven"
            extFile = extFile + await utils.genAllInfoByImageLeftBotList(
                Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
                Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
                section,object,listChip)
            // Write Stake Even Locator
            // object = "StakeEven"
            // extFile = extFile + await utils.genAllInfoByImageLeftBotList(
            //     Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            //     Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            //     section,object,listChip)
            // // Write Pos Odd Locator
            object = "PosOdd"
            extFile = extFile + await utils.genAllInfoByImageRightBotList(
                Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
                Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
                section,object,listChip)
            // // Write Stake Odd Locator
            // object = "StakeOdd"
            // extFile = extFile + await utils.genAllInfoByImageRightBotList(
            //     Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            //     Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            //     section,object,listChip)

            // Click on Pos Even to show ChipBroad
            loc = await utils.getLocatorImage(Image + section + path.sep +"ImgCompare_" + section + "_" + "PosEven" + ".png")
            await utils.clickPos(loc.x,loc.y)
            await utils.sleep(1000)

            // Write Chip Broad Locator
            object = "ChipBroad"
            extFile = extFile + await utils.genCoordinateByImage(
            Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            section,object)
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
            
            // Write Chip Broad Accept Locator
            object = "ChipBroadAccept"
            extFile = extFile + await utils.genAllInfoByImage(
                Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
                Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
                section,object)

            // Write Chip Broad Clear Locator
            object = "ChipBroadClear"
            extFile = extFile + await utils.genAllInfoByImage(
                Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
                Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
                section,object)
            
            // Write Chip Broad Close Locator
            object = "ChipBroadClose"
            extFile = extFile + await utils.genAllInfoByImage(
                Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
                Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
                section,object)

            // Close Chip Broad Popup
            loc = await utils.getLocatorImage(Image + section + path.sep +"ImgCompare_" + section + "_" + "ChipBroadClose" + ".png")
            await utils.clickPos(loc.x,loc.y)
            await utils.sleep(1000)

            // Write Preset Locator
            object = "Preset"
            extFile = extFile + await utils.genAllInfoByImageClickPopup(
                Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
                Image + section + path.sep +"ImgCompare_" + section + "_" + object + "Icon.png",
                section,object
            )

            // Write Preset Title Locator
            object = "PresetTitle"
            extFile = extFile + await utils.genAllInfoByImage(
                Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
                Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
                section,object)

            // Write Preset Value Locator
            object = "PresetValue"
            extFile = extFile + await utils.genAllInfoByImage(
                Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
                Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
                section,object)
            // Write Preset Chip1 Locator
            object = "PresetChip1"
            extFile = extFile + await utils.genXYByImage(
                Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
                object)
            // Write Preset Chip5 Locator
            object = "PresetChip5"
            extFile = extFile + await utils.genXYByImage(
                Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
                object)
            // Write Preset Chip10 Locator
            object = "PresetChip10"
            extFile = extFile + await utils.genXYByImage(
                Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
                object)
            // Write Preset Chip50 Locator
            object = "PresetChip50"
            extFile = extFile + await utils.genXYByImage(
                Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
                object)
            // Write Preset Chip100 Locator
            object = "PresetChip100"
            extFile = extFile + await utils.genXYByImage(
                Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
                object)
            // Write Preset Chip200 Locator
            object = "PresetChip200"
            extFile = extFile + await utils.genXYByImage(
                Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
                object)
            // Write Preset Chip500 Locator
            object = "PresetChip500"
            extFile = extFile + await utils.genXYByImage(
                Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
                object)
            // Write Preset Chip1000 Locator
            object = "PresetChip1000"
            extFile = extFile + await utils.genXYByImage(
                Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
                object)
            
            // Write Preset Accept Locator
            object = "PresetAccept"
            extFile = extFile + await utils.genAllInfoByImage(
                Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
                Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
                section,object)

            // Write Preset Clear Locator
            object = "PresetClear"
            extFile = extFile + await utils.genAllInfoByImage(
                Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
                Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
                section,object)
            
            // Write Preset Close Locator
            object = "PresetClose"
            extFile = extFile + await utils.genAllInfoByImage(
                Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
                Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
                section,object)
            
            // Close Preset Popup
            loc = await utils.getLocatorImage(Image + section + path.sep +"ImgCompare_" + section + "_" + "PresetClose" + ".png")
            await utils.clickPos(loc.x,loc.y)
            await utils.sleep(1000)

            // // Write Statistic Locator
            // object = "Statistic"
            // extFile = extFile + await utils.genAllInfoByImageClickPopup(
            //     Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            //     Image + section + path.sep +"ImgCompare_" + section + "_" + object + "Icon.png",
            //     section,object
            // )
            
            // // Write Statistic Result Locator
            // object = "StatisticResult"
            // extFile = extFile + await utils.genAllInfoByImage(
            //     Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            //     Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            //     section,object
            // )

            // // Write Statistic Point Locator
            // object = "StatisticPoint"
            // extFile = extFile + await utils.genAllInfoByImage(
            //     Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            //     Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            //     section,object
            // )
            
            // // Write Statistic Left Arrow Locator
            // object = "StatisticLeftArrow"
            // extFile = extFile + await utils.genXYByImage(
            //     Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            //     object
            // )

            // // Write Statistic Right Arrow Locator
            // object = "StatisticRightArrow"
            // extFile = extFile + await utils.genXYByImage(
            //     Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            //     object
            // )
            // // Write Statistic Close Locator
            // object = "StatisticClose"
            // extFile = extFile + await utils.genXYByImage(
            //     Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
            //     object)
            
            // // Close Statistic
            // loc = await utils.getLocatorImage(Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png")
            // await utils.clickPos(loc.x,loc.y)
            // await utils.sleep(1000)

            // Write History Locator
            object = "History"
            extFile = extFile + await utils.genAllInfoByImageClickPopup(
                Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
                Image + section + path.sep +"ImgCompare_" + section + "_" + object + "Icon.png",
                section,object
            )
            // Write History Close Locator
            object = "HistoryClose"
            extFile = extFile + await utils.genXYByImage(
                Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
                object)
            // Close History Popup
            loc = await utils.getLocatorImage(Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png")
            await utils.clickPos(loc.x,loc.y)
            await utils.sleep(1000)
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
                object)
            // Close Guide Popup
            loc = await utils.getLocatorImage(Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png")
            await utils.clickPos(loc.x,loc.y)

            // Write Close Locator
            object = "Close"
            extFile = extFile + await utils.genXYByImage(
                Image + section + path.sep +"ImgCompare_" + section + "_" + object + "Icon.png",
                object,"")

            //end file
            extFile = extFile + "}"
            fs.writeFile(path.join(__dirname,"../../") + path.sep + "ExtractLocator" + path.sep + theme + path.sep + section +"_Locator.js", extFile, 
            function (err) {
            if (err) { return console.log(err) }
            })
            // Back to Game Lobby Menu
            loc = await utils.getLocatorImage(Image + section + path.sep +"ImgCompare_" + section + "_" + "CloseIcon" + ".png")
            await utils.clickPos(loc.x,loc.y)
            await utils.sleep(3000)
        }
    } catch (error) {
        console.log(error)
        await utils.reload()
        await utils.sleep(3000)
    } 
}