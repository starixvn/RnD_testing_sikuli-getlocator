const pw = require('playwright')
const path = require('path')
const theme = "Vgaming"
const Image = path.join(__dirname,"../") + path.sep + "Image" + path.sep + theme + path.sep
import { dir } from 'console'
import * as config from '../config/config'
import * as utils from '../util/utils'
const game = "Sedie"
const fs = require('fs')
import { GameLobbyLocator } from '../Games/GameLobby_Locator'
import * as genLocatorSedie from '../Games/Sedie/Sedie'
import * as genLocatorVipSedie from '../Games/VipSedie/VipSedie'
import * as genLocatorGameLobby from '../Games/GameLobby'
import * as genLocatorBlackJack from '../Games/BlackJack/BlackJack'
import * as genLocatorSedieWar from '../Games/SedieWar/SedieWar'
import * as genLocatorMiniSedie from '../Games/MiniSedie/MiniSedie'
import * as genLocatorBigSmall from '../Games/BigSmall/BigSmall'
import * as genLocatorTurboBigSmall from '../Games/TurboBigSmall/TurboBigSmall'
import * as genLocatorTurboOddEven from '../Games/TurboOddEven/TurboOddEven'
import * as genLocatorBigSmallSicbo from '../Games/BigSmallSicbo/BigSmallSicbo'
import * as genLocatorVipFishPrawnCrab from '../Games/VipFishPrawnCrab/VipFishPrawnCrab'
import * as genLocatorFishPrawnCrab from '../Games/FishPrawnCrab/FishPrawnCrab'
import * as genLocatorDragonTiger from '../Games/DragonTiger/DragonTiger'
import * as genLocatorKenoProMax from '../Games/KenoProMax/KenoProMax'
import * as genLocatorThreeCards from '../Games/ThreeCards/ThreeCards'
import * as genLocatorVipBaccarat from '../Games/VipBaccarat/VipBaccarat'
const jp = require('jsonpath')

describe('Generate Locator For Saba Game', ()=>{

  before(async function(){
    await utils.Login(env,game);
  })

  afterEach(async function(){
    // if(this.currentTest.state == 'failed'){
    //   var __filename = this.currentTest.title.trim()
    //   await page.screenshot({ path: `./Report/Pictures/${__filename}.png`});
    //   await addContext (this,`./Pictures/${__filename}.png` )
    // }
  })
  it('Test', async() => {
    console.log(Image)
    // let obj = '["BlackJack",{"deal":{"roundId":5245,"totalAmount":100,"uid":"5f743e1d4ee13a001163b48f","dealer":[{"rank":"10","suit":3}],"hands":[{"betwin":0,"cards":[{"rank":"J","suit":3},{"rank":"J","suit":3}],"actions":[],"pos":1,"bet":50,"id":317456,"total":[20]},{"betwin":0,"cards":[{"rank":"6","suit":3},{"rank":"2","suit":1}],"actions":[],"pos":3,"bet":50,"id":317455,"total":[8]}]},"endBet":100,"user":{"red":1807,"scoins":0}}]'
    // console.log(jp.query(JSON.parse(obj),'$..hands[?(@.pos=="3")]'))
  })
 it('Generate GameLobby Locator', async () => {
    await genLocatorGameLobby.writeLocator(Image,theme)
  })  

  it('Generate Sedie Locator', async() =>{
    await genLocatorSedie.writeLocator(Image,theme);    
  })

  it('Generate VipSedie Locator', async() =>{
    await genLocatorVipSedie.writeLocator(Image,theme);  
  })
  it('Generate BlackJack Locator', async() =>{
    await genLocatorBlackJack.writeLocator(Image,theme)
  })
  it('Generate SedieWar Locator', async() => {
    await genLocatorSedieWar.writeLocator(Image,theme)
  })
  it('Generate Mini Sedie Locator', async() => {
    await genLocatorMiniSedie.writeLocator(Image,theme)
  })
  it('Generate Big Small Locator', async() => {
    await genLocatorBigSmall.writeLocator(Image,theme)
  })
  it('Generate Turbo Big Small Locator', async() => {
    await genLocatorTurboBigSmall.writeLocator(Image,theme)
  })
  it('Generate Turbo Odd Even Locator', async() => {
    await genLocatorTurboOddEven.writeLocator(Image,theme)
  })
  it('Generate BigSmall Sibbo Locator', async() => {
    await genLocatorBigSmallSicbo.writeLocator(Image,theme)
  })
  it('Generate Vip Fish Prawn Crab Locator', async() => {
    await genLocatorVipFishPrawnCrab.writeLocator(Image,theme)
  })
  it('Generate Fish Prawn Crab Locator', async() => {
    await genLocatorFishPrawnCrab.writeLocator(Image,theme)
  })
  it('Generate Dragon Tiger Locator', async() => {
    await genLocatorDragonTiger.writeLocator(Image,theme)
  })
  it('Generate Keno Pro Max Locator', async() => {
    await genLocatorKenoProMax.writeLocator(Image,theme)
  })
  it('Generate Three Cards Locator', async() => {
    await genLocatorThreeCards.writeLocator(Image,theme)
  })
  it('Generate VipBaccarat Locator', async() => {
    await genLocatorVipBaccarat.writeLocator(Image,theme)
  })
})
