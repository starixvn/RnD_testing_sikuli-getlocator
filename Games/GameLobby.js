const pw = require('playwright')
const path = require('path')
import * as config from '../config/config'
import * as utils from '../util/utils'
import * as GamelobbyLocator from './GameLobby_Locator'
const fs = require('fs')
const section = "GameLobby"


export const writeLocator = async(Image,theme) => {
    try {
        if(IsRunGameLobby !== false){
            await utils.setBalance(config[env].memberId[section])
            // gen File
            let extFile = "const path = require('path') \n\
const pathImageCompare = path.join(__dirname,\"../\") + path.sep + \"ImageCompare\" + path.sep \n\
export const GameLobbyLocator = { \n\
\tcvGame : \"GameCanvas\",\n"
            // Write AccountName Locator
            let object = "AccountName"
            extFile = extFile + await utils.genCoordinateByImage(
                Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
                section,object)
            // Write Vip Sedie Icon Locator
            object = "VipSedieIcon"
            extFile = extFile +  await utils.genXYByImage(
                Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
                object)
            // Write Sedie Icon Locator
            object = "SedieIcon"
            extFile = extFile +  await utils.genXYByImage(
                Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
                object)
            // Write Sedie War Icon Locator
            object = "SedieWarIcon"
            extFile = extFile +  await utils.genXYByImage(
                Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
                object)
            // Write Mini Sedie Icon Locator
            object = "MiniSedieIcon"
            extFile = extFile +  await utils.genXYByImage(
                Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
                object)
            // Write Big Small Sicbo Icon Locator
            object = "BigSmallSicboIcon"
            extFile = extFile +  await utils.genXYByImage(
                Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
                object)
            // Write Big Small Icon Locator
            object = "BigSmallIcon"
            extFile = extFile +  await utils.genXYByImage(
                Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
                object)
            // Write Turbo Big Small Icon Locator
            object = "TurboBigSmallIcon"
            extFile = extFile +  await utils.genXYByImage(
                Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
                object)
            // Write Turbo Odd Even Icon Locator
            object = "TurboOddEvenIcon"
            extFile = extFile +  await utils.genXYByImage(
                Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
                object)
            // Write Keno ProMax Icon Locator
            object = "KenoProMaxIcon"
            extFile = extFile +  await utils.genXYByImage(
                Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
                object)
            // Write Keno ProViet Icon Locator
            object = "KenoProVietIcon"
            extFile = extFile +  await utils.genXYByImage(
                Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
                object)
            // Write Vip Baccarat Icon Locator
            object = "VipBaccaratIcon"
            extFile = extFile +  await utils.genXYByImage(
                Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
                object)
            // Write Baccarat Icon Locator
            object = "BaccaratIcon"
            extFile = extFile +  await utils.genXYByImage(
                Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
                object)

            // swipe right
            await utils.swipe(config.setting.viewport.width/2, config.setting.viewport.height/2,config.setting.viewport.width/2 - 500, config.setting.viewport.height/2)
            await utils.sleep(1000)
            // Write Vip Fish Prawn Crab Icon Locator
            object = "VipFishPrawnCrabIcon"
            extFile = extFile +  await utils.genXYByImage(
                Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
                object)
            // Write Fish Prawn Crab Icon Locator
            object = "FishPrawnCrabIcon"
            extFile = extFile +  await utils.genXYByImage(
                Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
                object)
            // Write Dragon Tiger Icon Locator
            object = "DragonTigerIcon"
            extFile = extFile +  await utils.genXYByImage(
                Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
                object)
            // Write BlackJack Icon Locator
            object = "BlackJackIcon"
            extFile = extFile +  await utils.genXYByImage(
                Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
                object)
            // Write Roulette Icon Locator
            object = "RouletteIcon"
            extFile = extFile +  await utils.genXYByImage(
                Image + section + path.sep +"ImgCompare_" + section + "_" + object + ".png",
                object,"") // End file should send "" param

            //end file
            extFile = extFile + "}"
            fs.writeFile(path.join(__dirname,"../") + path.sep + "ExtractLocator" + path.sep + theme + path.sep +"GameLobby_Locator.js", extFile, 
            function (err) {
                if (err) { return console.log(err) }
            })
            // swipe  again
            await utils.swipe(config.setting.viewport.width/2, config.setting.viewport.height/2,config.setting.viewport.width/2 + 500, config.setting.viewport.height/2)
            await utils.sleep(1000)
        }
    } catch (error) {
        console.log(error)
        await utils.reload()
    }
}