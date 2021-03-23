import * as config from './../config/config'
import pixelmatch from 'pixelmatch'
import * as MemberSiteFunc from '../Games/MemberSite_Function'
import * as GameLobbyFunc from '../Games/GameLobby_Function'
const fs = require('fs')
const { createWorker } = require('tesseract.js')
const path = require('path')
const chai = require('chai')
const expect = chai.expect
const PNG = require('pngjs').PNG
const { ImageTarget, DesktopScreenRegion, FileJava, ScreenRegion ,Java } = require ('./../lib/sikuli')
const request = require('request')
const FormData = require('form-data')


// Verify Message is existed
export const FindMessage = async(_mes) => {
    try {
        for(let i = 0; i < wsMessageReceived.length ; i++){
            // console.log(wsMessageReceived[i])
            if(wsMessageReceived[i].includes(_mes)) return true
        }
        return false
    } catch (error) {
        return false
    }
}

export const wsFindMessage = async(_mes) => {
    try {
        let result
        for(let t = 0 ; t< config.setting.loop ; t++){
            if(typeof wsMessageReceived !== 'undefined'){
                // console.log(wsMessageReceived)
                result = await FindMessage(_mes)
                if( result === true ) return { Val : true , Err : { IsErr : false , ErrMess : ""}}
                await page.waitForTimeout(1000)
            }
        }
        return { Val : false , Err : { IsErr : false , ErrMess : ""}}
    } catch (error) {
        return { Val : false , Err : { IsErr : true , ErrMess : "Error: "+ error.message}}
    } 
}
// Check FreeSpin is existed
export const isFreeSpin = async() => {
    try {
        for(let t = 0 ; t< config.setting.loop ; t++){
            if(typeof wsMessageReceived !== 'undefined'){
                for(let i = 0; i < wsMessageReceived.length ; i++){
                    if(wsMessageReceived[i].includes('Authorized')) {
                        let chk = JSON.parse(wsMessageReceived[i])
                        if(typeof chk.user.availSpins === 'undefined' ) return false
                        else if(chk.user.availSpins != 0) return true
                        else return false
                    }
                }
            }
            await sleep(1000)
        }
        return false
    } catch (error) {
        console.log('Error '+error.message)
        return false
    }
}


// Go to Page
export const navigate = async(_url) => {
    try {
        await page.goto(_url, { timeout : config.setting.timeout})
        await page.waitForTimeout(500)
    } catch (error) {
        console.error(error.message)
    }
}

// Reload page
export const reload = async() => {
    try {
        await page.reload()
    } catch (error) {
        console.error(error.message);
    }
}

// Wait Page Load
export const waitForLoadState = async() => {
    try {
        await page.waitForLoadState('load', { timeout : config.setting.timeout })
     } catch (error) {
         console.error(error.message);
         // this.screenFail()
     }
}
// Wait Element 
export const waitEl = async() => {
    try {
        await page.waitForSelector(_el, { timeout : config.setting.timeout})
     } catch (error) {
         console.error(error.message);
         // this.screenFail()
     }
}
// Click Element
export const clickEl = async(_el) => {
    try {
        await page.waitForSelector(_el, { timeout : config.setting.timeout })
        await page.click(_el)
        await page.waitForTimeout(500)
     } catch (error) {
         console.error(error.message);
         // this.screenFail()
     }
}

// Click Position
export const clickPos = async(_x, _y) => {
    try {
        await page.mouse.click(_x,_y)
        await page.waitForTimeout(500)
     } catch (error) {
         console.error(error.message);
         // this.screenFail()
     }
}

// Send message to Element
export const sendKeys = async(_el, _val) => {
    try {
        await page.waitForSelector(_el, { timeout : config.setting.timeout })
        await page.fill(_el, _val)
    } catch (error) {
        console.error(error.message);
        // this.screenFail()
    }
}

// Get value of Attribute
export const getAttribute = async(_el, _val) => {
    try {
        await page.waitForSelector(_el, { timeout : config.setting.timeout })
        return await page.getAttribute(_el, _val, { timeout : config.setting.timeout })
    } catch (error) {
        console.error(error.message);
        // this.screenFail()
    }
}

// Verify value of Attribute is not equal strCompare
export const isValueNotEqualOnAttribute = async(_el, _val, _strCompare) => {
    try {
        let loop = true;
        while(loop){
            if((await getAttribute(_el, _val)).toString() != _strCompare) return { Val : true , Err : { IsErr : false , ErrMess : ""}}
            setTimeout(() => { 
                loop = false
              }, setting.timeout);
        }
        return { Val : false , Err : { IsErr : false , ErrMess : ""}}
    } catch (error) {
        console.log('Error '+error.message)
        return { Val : false , Err : { IsErr : true , ErrMess : "Error: "+ error.message}}
    }
}

// Verify Title
export const verifyTitle = async(_title) => {
    try {
        await waitForLoadState()
        let _act_title = await page.title()
        if(_act_title == _title) return { Val : true , Err : { IsErr : false , ErrMess : ""}}
        return { Val : false , Err : { IsErr : false , ErrMess : ""}}
    }  catch (error) {
        console.log('Error '+error.message)
        return { Val : false , Err : { IsErr : true , ErrMess : "Error: "+ error.message}}
    }
}

// Select Dropdown List
export const selectDrp = async(_el, _val) => {
    try {
        await page.waitForSelector(
            _el, { state: 'attached'}
        )
        await page.selectOption(_el, { value : _val })
    }  catch (error) {
        console.log('Error '+error.message)
    }
}

// Clear Log Message
export const clearLog = async() =>{
    wsFindMessage = []
}

// ScreenShot
export const screenShotFailed = async() => {
    try {
        await page.screenshot({ path: 'ScreenShot'+ path.sep +'Failed_Screen.png', type : "png" })
    }  catch (error) {
        console.log('Error '+error.message)
    }
}
export const screenShot = async(_title) => {
    try {
        await page.screenshot({ path: 'ScreenShot'+ path.sep +_title+'.png', type : "png" })
    } catch (error) {
        console.log('Error '+error.message)
    }
}

export const sleep = async(_milliseconds) => {
    try {
        await page.waitForTimeout(_milliseconds)
    } catch (error) {
        console.log('Error '+error.message)
    }
}

// Find Image
export const readImageData = async(_path) => {
    try {
        return PNG.sync.read(fs.readFileSync(_path))
    } catch (error) {
        console.log('Error '+error.message)
    }
}
export const CaptureSubImageToFile = async(_x, _y , _w, _h,_path) => {
    try {
        return (await page.screenshot({path: _path , clip : {x: _x, y: _y, width: _w, height : _h} }))
    } catch (error) {
        console.log('Error '+error.message)
    } 
}
export const findImage = async(_subimage, _x, _y, _w, _h) => {
    /* Test Comment*/
    try {
        let flag=null
        let si = readImageData(_subimage)
        let sc
        let diff = new PNG({_w, _h});
        let loop =true;
        while(loop){
            sc = PNG.sync.read(await page.screenshot({ clip : {x: _x, y: _y, width: _w, height : _h} }))
            flag = pixelmatch((await si).data,sc.data, diff.data, _w, _h, { threshold : 0.15 })
            // console.log(Date.now())
            // console.log('a_pixeldiff:'+flag.toString())
            // console.log('e_pixelmatch'+(_w*_h*0.07).toString())
            if(flag<(_w*_h*0.07)) return { Val : true , Err : { IsErr : false , ErrMess : ""}}
            setTimeout(() => { 
                loop = false
              }, config.setting.timeout);
            // fs.writeFileSync('diff.png', PNG.sync.write(diff));
        }
        return { Val : false , Err : { IsErr : false , ErrMess : ""}}
    } catch (error) {
        console.log('Error '+error.message)
        return { Val : false , Err : { IsErr : true , ErrMess : "Error: "+ error.message}}
    }
}

// parse text from image
export const getTextFromImage = async(_path) => {
    try {
        const worker = createWorker()
        await worker.load();
        await worker.loadLanguage('eng');
        await worker.initialize('eng');
        const { data: { text } } = await worker.recognize(_path);
        // console.log(text)
        await worker.terminate();
        return text
    } catch (error) {
        console.log('Error '+error.message)
    }
}
// Parse text to Number
export const parseNumber = async(_text) => {
    try {
        let txtNum = _text.replace(/\,/g,'').replace(/\./g,',')
        return parseFloat(txtNum)
    } catch (error) {
        console.log('Error '+error.message)
    }
}
// swipe to left ( x < 0 ) or right ( x >0 )
export const swipe = async(__fx, _fy,__tx, _ty,) => {
    try {
        await page.mouse.move(__fx,  _fy)
        await page.mouse.down();
        await sleep(500)
        await page.mouse.move(__tx,  _ty)
        await sleep(1000)
        await page.mouse.up()
    } catch (error) {
        console.log('Error '+error.message)
    }
}

// Place bet until get message
export const verifyWsMessageForBetProcess = async(_mes) => {
    try {
        let result
        for(let t = 0 ; t< 4 ; t++){
            if(typeof wsMessageReceived !== 'undefined'){
                if( await FindMessage(_mes) === true ) {
                    return true
                }
                else if(await FindMessage('endBet') === true && result === false) {
                    return false
                }
            }
            await page.waitForTimeout(500)
        }
        return false
    }  catch (error) {
        console.log('Error '+error.message)
        return false
    }
}
export const betProcess = async(_x,_y,_mes) => {
    try{
        let flag
        for(let t = 0; t< config.setting.loop; t++){
            await clickPos(_x,_y)
            if(await verifyWsMessageForBetProcess(_mes) === true) {
                return { Val : true , Err : { IsErr : false , ErrMess : ""}}
            }
            await page.waitForTimeout(1000)
        }
        return { Val : false , Err : { IsErr : false , ErrMess : ""}}
    } catch (error) {
        console.log('Error '+error.message)
        return { Val : false , Err : { IsErr : true , ErrMess : "Error: "+ error.message}}
    }
}


// Check Websocket Mesage
export const wshear = async(ws) =>{
    if(isHear ===true) {
        ws.on('framereceived', async msg => {
            if(isHear ===true) {
                wsMessageReceived.push(msg.payload)
            } else { wsMessageReceived = [] }
        });
    }
}

// Open Listener Websocket Message
export const wsHearMessageOn = async() => {
    isHear = true
    page.on('websocket', async ws => wshear(ws))
    
}

// Off Listener Websocket Message
export const wsHearMessageOff = async() => {
    isHear = false
}


// Login
export const Login = async(_env,_game) => {
    await wsHearMessageOff()
    let flag
    if(_env != 'cf_local') {
        // Login Member Site
        await MemberSiteFunc.login(_env,_game)
        // Navigate Sabaclub
        await navigate(config[_env].gamelobbyurl)
    } else {
        // Navigate Sabaclub from Simulator
        await MemberSiteFunc.login_local(_env,_game)
    }
    // // Verify go to Game Lobby Successfully
    // flag = await GameLobbyFunc.verifyLoginSuccessfully()
    // expect(flag.Val,"Fail on Login GameLobby").to.be.true
    // await sleep(5000)
}

export const getLocatorImage = async(img,_score=0.9)=> {
    try {  
        console.log(img)
        let targetImage = await new ImageTarget(new FileJava(img))
        let screen = Java.newInstanceSync("org.sikuli.api.DesktopScreenRegion")
        let r = await Java.callMethodSync(screen,"wait",targetImage,60000)
        while(r === null){
            r = await Java.callMethodSync(screen,"wait",targetImage,60000)
        }
        while(Java.callMethodSync(r,"getScore")<_score){
            console.log("Score: "+ Java.callMethodSync(r,"getScore"))
            r = await Java.callMethodSync(screen,"wait",targetImage,60000)
        }
        console.log(r.toString())
        // Return Locator
        return {
            x: await Java.callMethodSync(await Java.callMethodSync(r,"getCenter"),"getX") - 18,
            y: await Java.callMethodSync(await Java.callMethodSync(r,"getCenter"),"getY") - 90,
            top: await Java.callMethodSync(r,"getY") - 90,
            left: await Java.callMethodSync(r,"getX") - 18,
            width: await Java.callMethodSync(r,"getWidth"),
            height: await Java.callMethodSync(r,"getHeight")}
    } catch (error) {
        console.error(error.message);
        return null
    }
}

export const genCoordinateByImage = async(img,section,object,extratext=",")=> {
    try {
        const info = await getLocatorImage(img)
        // Write Object Locator
        let file = "\t"+ object +" : { " +
        "top : " + info.top + ", " +
        "left : " + info.left + ", " + 
        "width : " + info.width + ", " + 
        "height : " + info.height + ", " +
        "ImageCompare : pathImageCompare + \"ImgCompare_"+ section +"_" + object + ".png\" }" + extratext + "\n"
        return file
    } catch (error) {
        console.error(error.message);
        return ""
    }
}

export const genCoordinateByImageIndex5 = async(img,section,object,extratext=",")=> {
    try {
        const info = await getLocatorImage(img)
        // Write Object Locator
        let file = "\t"+ object +" : { " +
        "top : " + info.top + ", " +
        "left : " + info.left + ", " + 
        "width : " + info.width + ", " + 
        "height : " + info.height + ", " +
        "ImageCompare1 : pathImageCompare + \"ImgCompare_"+ section +"_" + object + "_1.png\", " +
        "ImageCompare2 : pathImageCompare + \"ImgCompare_"+ section +"_" + object + "_2.png\", " +
        "ImageCompare3 : pathImageCompare + \"ImgCompare_"+ section +"_" + object + "_3.png\", " + 
        "ImageCompare4 : pathImageCompare + \"ImgCompare_"+ section +"_" + object + "_4.png\", " + 
        "ImageCompare5 : pathImageCompare + \"ImgCompare_"+ section +"_" + object + "_5.png\" }" + extratext + "\n"
        return file
    } catch (error) {
        console.error(error.message);
        return ""
    }
}
export const genCoordinateByImageIndex6 = async(img,section,object,extratext=",")=> {
    try {
        const info = await getLocatorImage(img)
        // Write Object Locator
        let file = "\t"+ object +" : { " +
        "top : " + info.top + ", " +
        "left : " + info.left + ", " + 
        "width : " + info.width + ", " + 
        "height : " + info.height + ", " +
        "ImageCompare1 : pathImageCompare + \"ImgCompare_"+ section +"_" + object + "_1.png\", " +
        "ImageCompare2 : pathImageCompare + \"ImgCompare_"+ section +"_" + object + "_2.png\", " +
        "ImageCompare3 : pathImageCompare + \"ImgCompare_"+ section +"_" + object + "_3.png\", " + 
        "ImageCompare4 : pathImageCompare + \"ImgCompare_"+ section +"_" + object + "_4.png\", " +  
        "ImageCompare5 : pathImageCompare + \"ImgCompare_"+ section +"_" + object + "_5.png\", " + 
        "ImageCompare6 : pathImageCompare + \"ImgCompare_"+ section +"_" + object + "_6.png\" }" + extratext + "\n"
        return file
    } catch (error) {
        console.error(error.message);
        return ""
    }
}
export const genXYByImage = async(img,object,extratext=",")=> {
    try {
        const info = await getLocatorImage(img)
        // Write Object Locator
        let file =  "\t"+ object +" : { " +
        "x : " + info.x + ", " +
        "y : " + info.y + " }" + extratext + "\n"
        return file
    } catch (error) {
        console.error(error.message);
        return ""
    }
}

export const genAllInfoByImage = async(imgCoordinate,imgXY,section,object,extratext=",")=> {
    try {
        let info = await getLocatorImage(imgXY)
        // Write Object Locator
        let file = "\t"+ object +" : { " +
        "x : " + info.x + ", " +
        "y : " + info.y + ", " 
        info = await getLocatorImage(imgCoordinate)
        file = file +
        "top : " + info.top + ", " +
        "left : " + info.left + ", " + 
        "width : " + info.width + ", " + 
        "height : " + info.height + ", " +
        "ImageCompare : pathImageCompare + \"ImgCompare_"+ section +"_" + object + ".png\" }" + extratext + "\n"
        return file
    } catch (error) {
        console.error(error.message);
        return ""
    }
}
export const genAllInfoByImageList = async(imgCoordinate,imgXY,section,object,arr,extratext=",")=> {
    try {
        let info = await getLocatorImage(imgXY)
        // Write Object Locator
        let file = "\t"+ object +" : { " +
        "x : " + info.x + ", " +
        "y : " + info.y + ", " 
        info = await getLocatorImage(imgCoordinate)
        file = file +
        "top : " + info.top + ", " +
        "left : " + info.left + ", " + 
        "width : " + info.width + ", " + 
        "height : " + info.height 
        arr.forEach(el => {
            file = file + ", " + "ImageCompare" + el + " : pathImageCompare + \"ImgCompare_"+ section +"_" + object + el + ".png\""
        });
        file = file + " }" + extratext + "\n"
        return file
    } catch (error) {
        console.error(error.message);
        return ""
    }
}
export const genAllInfoByImageLeftCenter = async(imgCoordinate,imgXY,section,object,extratext=",")=> {
    try {
        let info = await getLocatorImage(imgXY)
        while(info.x > config.setting.viewport.width/2){
            info = await getLocatorImage(imgXY)
        }
        // Write Object Locator
        let file = "\t"+ object +" : { " +
        "x : " + info.x + ", " +
        "y : " + info.y + ", " 
        info = await getLocatorImage(imgCoordinate)
        while(info.x > config.setting.viewport.width/2){
            info = await getLocatorImage(imgCoordinate)
        }
        file = file +
        "top : " + info.top + ", " +
        "left : " + info.left + ", " + 
        "width : " + info.width + ", " + 
        "height : " + info.height + ", " +
        "ImageCompare : pathImageCompare + \"ImgCompare_"+ section +"_" + object + ".png\" }" + extratext + "\n"
        return file
    } catch (error) {
        console.error(error.message);
        return ""
    }
}
export const genAllInfoByImageLeftTop = async(imgCoordinate,imgXY,section,object,extratext=",")=> {
    try {
        let info = await getLocatorImage(imgXY)
        while(info.x > config.setting.viewport.width/2){
            info = await getLocatorImage(imgXY)
        }
        // Write Object Locator
        let file = "\t"+ object +" : { " +
        "x : " + info.x + ", " +
        "y : " + info.y + ", " 
        info = await getLocatorImage(imgCoordinate)
        while(info.x > config.setting.viewport.width/2 || info.y > config.setting.viewport.height/2){
            info = await getLocatorImage(imgCoordinate)
        }
        file = file +
        "top : " + info.top + ", " +
        "left : " + info.left + ", " + 
        "width : " + info.width + ", " + 
        "height : " + info.height + ", " +
        "ImageCompare : pathImageCompare + \"ImgCompare_"+ section +"_" + object + ".png\" }" + extratext + "\n"
        return file
    } catch (error) {
        console.error(error.message);
        return ""
    }
}
export const genAllInfoByImageLeftTopList = async(imgCoordinate,imgXY,section,object,arr,extratext=",")=> {
    try {
        let info = await getLocatorImage(imgXY)
        while(info.x > config.setting.viewport.width/2){
            info = await getLocatorImage(imgXY)
        }
        // Write Object Locator
        let file = "\t"+ object +" : { " +
        "x : " + info.x + ", " +
        "y : " + info.y + ", " 
        info = await getLocatorImage(imgCoordinate)
        while(info.x > config.setting.viewport.width/2 || info.y > config.setting.viewport.height/2){
            info = await getLocatorImage(imgCoordinate)
        }
        file = file +
        "top : " + info.top + ", " +
        "left : " + info.left + ", " + 
        "width : " + info.width + ", " + 
        "height : " + info.height
        arr.forEach(el => {
            file = file + ", " + "ImageCompare" + el + " : pathImageCompare + \"ImgCompare_"+ section +"_" + object + el + ".png\""
        });
        file = file + " }" + extratext + "\n"
        return file
    } catch (error) {
        console.error(error.message);
        return ""
    }
}
export const genAllInfoByImageLeftBot = async(imgCoordinate,imgXY,section,object,extratext=",")=> {
    try {
        let info = await getLocatorImage(imgXY)
        while(info.x > config.setting.viewport.width/2){
            info = await getLocatorImage(imgXY)
        }
        // Write Object Locator
        let file = "\t"+ object +" : { " +
        "x : " + info.x + ", " +
        "y : " + info.y + ", " 
        info = await getLocatorImage(imgCoordinate)
        while(info.x > config.setting.viewport.width/2 || info.y < config.setting.viewport.height/2){
            info = await getLocatorImage(imgCoordinate)
        }
        file = file +
        "top : " + info.top + ", " +
        "left : " + info.left + ", " + 
        "width : " + info.width + ", " + 
        "height : " + info.height + ", " +
        "ImageCompare : pathImageCompare + \"ImgCompare_"+ section +"_" + object + ".png\" }" + extratext + "\n"
        return file
    } catch (error) {
        console.error(error.message);
        return ""
    }
}
export const genAllInfoByImageLeftBotList = async(imgCoordinate,imgXY,section,object,arr,extratext=",")=> {
    try {
        let info = await getLocatorImage(imgXY)
        while(info.x > config.setting.viewport.width/2){
            info = await getLocatorImage(imgXY)
        }
        // Write Object Locator
        let file = "\t"+ object +" : { " +
        "x : " + info.x + ", " +
        "y : " + info.y + ", " 
        info = await getLocatorImage(imgCoordinate)
        while(info.x > config.setting.viewport.width/2 || info.y < config.setting.viewport.height/2){
            info = await getLocatorImage(imgCoordinate)
        }
        file = file +
        "top : " + info.top + ", " +
        "left : " + info.left + ", " + 
        "width : " + info.width + ", " + 
        "height : " + info.height
        arr.forEach(el => {
            file = file + ", " + "ImageCompare" + el + " : pathImageCompare + \"ImgCompare_"+ section +"_" + object + el + ".png\""
        });
        file = file + " }" + extratext + "\n"
        return file
    } catch (error) {
        console.error(error.message);
        return ""
    }
}
export const genAllInfoByImageLeftCenterList = async(imgCoordinate,imgXY,section,object,arr,extratext=",")=> {
    try {
        let info = await getLocatorImage(imgXY)
        while(info.x > config.setting.viewport.width/2){
            info = await getLocatorImage(imgXY)
        }
        // Write Object Locator
        let file = "\t"+ object +" : { " +
        "x : " + info.x + ", " +
        "y : " + info.y + ", " 
        info = await getLocatorImage(imgCoordinate)
        while(info.x > config.setting.viewport.width/2){
            info = await getLocatorImage(imgCoordinate)
        }
        file = file +
        "top : " + info.top + ", " +
        "left : " + info.left + ", " + 
        "width : " + info.width + ", " + 
        "height : " + info.height
        arr.forEach(el => {
            file = file + ", " + "ImageCompare" + el + " : pathImageCompare + \"ImgCompare_"+ section +"_" + object + el + ".png\""
        });
        file = file + " }" + extratext + "\n"
        return file
    } catch (error) {
        console.error(error.message);
        return ""
    }
}
export const genAllInfoByImageCenterRight = async(imgCoordinate,imgXY,section,object,extratext=",")=> {
    try {
        let info = await getLocatorImage(imgXY)
        while(info.x <= config.setting.viewport.width/2){
            info = await getLocatorImage(imgXY)
        }
        // Write Object Locator
        let file = "\t"+ object +" : { " +
        "x : " + info.x + ", " +
        "y : " + info.y + ", " 
        info = await getLocatorImage(imgCoordinate)
        while(info.x <= config.setting.viewport.width/2){
            info = await getLocatorImage(imgCoordinate)
        }
        file = file +
        "top : " + info.top + ", " +
        "left : " + info.left + ", " + 
        "width : " + info.width + ", " + 
        "height : " + info.height + ", " +
        "ImageCompare : pathImageCompare + \"ImgCompare_"+ section +"_" + object + ".png\" }" + extratext + "\n"
        return file
    } catch (error) {
        console.error(error.message);
        return ""
    }
}
export const genAllInfoByImageRightTop = async(imgCoordinate,imgXY,section,object,extratext=",")=> {
    try {
        let info = await getLocatorImage(imgXY)
        while(info.x <= config.setting.viewport.width/2){
            info = await getLocatorImage(imgXY)
        }
        // Write Object Locator
        let file = "\t"+ object +" : { " +
        "x : " + info.x + ", " +
        "y : " + info.y + ", " 
        info = await getLocatorImage(imgCoordinate)
        while(info.x <= config.setting.viewport.width/2 || info.y > config.setting.viewport.height/2){
            info = await getLocatorImage(imgCoordinate)
        }
        file = file +
        "top : " + info.top + ", " +
        "left : " + info.left + ", " + 
        "width : " + info.width + ", " + 
        "height : " + info.height + ", " +
        "ImageCompare : pathImageCompare + \"ImgCompare_"+ section +"_" + object + ".png\" }" + extratext + "\n"
        return file
    } catch (error) {
        console.error(error.message);
        return ""
    }
}
export const genAllInfoByImageRightTopList = async(imgCoordinate,imgXY,section,object,arr,extratext=",")=> {
    try {
        let info = await getLocatorImage(imgXY)
        while(info.x <= config.setting.viewport.width/2){
            info = await getLocatorImage(imgXY)
        }
        // Write Object Locator
        let file = "\t"+ object +" : { " +
        "x : " + info.x + ", " +
        "y : " + info.y + ", " 
        info = await getLocatorImage(imgCoordinate)
        while(info.x <= config.setting.viewport.width/2 || info.y > config.setting.viewport.height/2){
            info = await getLocatorImage(imgCoordinate)
        }
        file = file +
        "top : " + info.top + ", " +
        "left : " + info.left + ", " + 
        "width : " + info.width + ", " + 
        "height : " + info.height
        arr.forEach(el => {
            file = file + ", " + "ImageCompare" + el + " : pathImageCompare + \"ImgCompare_"+ section +"_" + object + el + ".png\""
        });
        file = file + " }" + extratext + "\n"
        return file
    } catch (error) {
        console.error(error.message);
        return ""
    }
}
export const genAllInfoByImageRightBot = async(imgCoordinate,imgXY,section,object,extratext=",")=> {
    try {
        let info = await getLocatorImage(imgXY)
        while(info.x <= config.setting.viewport.width/2){
            info = await getLocatorImage(imgXY)
        }
        // Write Object Locator
        let file = "\t"+ object +" : { " +
        "x : " + info.x + ", " +
        "y : " + info.y + ", " 
        info = await getLocatorImage(imgCoordinate)
        while(info.x <= config.setting.viewport.width/2 || info.y < config.setting.viewport.height/2){
            info = await getLocatorImage(imgCoordinate)
        }
        file = file +
        "top : " + info.top + ", " +
        "left : " + info.left + ", " + 
        "width : " + info.width + ", " + 
        "height : " + info.height + ", " +
        "ImageCompare : pathImageCompare + \"ImgCompare_"+ section +"_" + object + ".png\" }" + extratext + "\n"
        return file
    } catch (error) {
        console.error(error.message);
        return ""
    }
}
export const genAllInfoByImageRightBotList = async(imgCoordinate,imgXY,section,object,arr,extratext=",")=> {
    try {
        let info = await getLocatorImage(imgXY)
        while(info.x <= config.setting.viewport.width/2){
            info = await getLocatorImage(imgXY)
        }
        // Write Object Locator
        let file = "\t"+ object +" : { " +
        "x : " + info.x + ", " +
        "y : " + info.y + ", " 
        info = await getLocatorImage(imgCoordinate)
        while(info.x <= config.setting.viewport.width/2 || info.y < config.setting.viewport.height/2){
            info = await getLocatorImage(imgCoordinate)
        }
        file = file +
        "top : " + info.top + ", " +
        "left : " + info.left + ", " + 
        "width : " + info.width + ", " + 
        "height : " + info.height
        arr.forEach(el => {
            file = file + ", " + "ImageCompare" + el + " : pathImageCompare + \"ImgCompare_"+ section +"_" + object + el + ".png\""
        });
        file = file + " }" + extratext + "\n"
        return file
    } catch (error) {
        console.error(error.message);
        return ""
    }
}
export const genAllInfoByImageCenterRightList = async(imgCoordinate,imgXY,section,object,arr,extratext=",")=> {
    try {
        let info = await getLocatorImage(imgXY)
        while(info.x <= config.setting.viewport.width/2){
            info = await getLocatorImage(imgXY)
        }
        // Write Object Locator
        let file = "\t"+ object +" : { " +
        "x : " + info.x + ", " +
        "y : " + info.y + ", " 
        info = await getLocatorImage(imgCoordinate)
        while(info.x <= config.setting.viewport.width/2){
            info = await getLocatorImage(imgCoordinate)
        }
        file = file +
        "top : " + info.top + ", " +
        "left : " + info.left + ", " + 
        "width : " + info.width + ", " + 
        "height : " + info.height
        arr.forEach(el => {
            file = file + ", " + "ImageCompare" + el + " : pathImageCompare + \"ImgCompare_"+ section +"_" + object + el + ".png\""
        });
        file = file + " }" + extratext + "\n"
        return file
    } catch (error) {
        console.error(error.message);
        return ""
    }
}
export const genAllInfoSubImage = async(img,subimg,section,object,extratext=",")=> {
    try {
        let info = await getLocatorImage(img)
        let infosub = await getLocatorImage(subimg)
        while( (info.top <= infosub.top && info.left <= infosub.left && info.width >= infosub.width && info.height >= infosub.height) !== true ){
            infosub = await getLocatorImage(subimg)
        }
        // Write Object Locator
        let file = "\t"+ object +" : { " +
        "x : " + infosub.x + ", " +
        "y : " + infosub.y + ", " +
        "top : " + infosub.top + ", " +
        "left : " + infosub.left + ", " + 
        "width : " + infosub.width + ", " + 
        "height : " + infosub.height + ", " +
        "ImageCompare : pathImageCompare + \"ImgCompare_"+ section +"_" + object + ".png\" }" + extratext + "\n"
        return file
    } catch (error) {
        console.error(error.message);
        return ""
    }
}
export const genAllInfoByImageIndex5 = async(imgCoordinate,imgXY,section,object,extratext=",")=> {
    try {
        let info = await getLocatorImage(imgXY)
        // Write Object Locator
        let file = "\t"+ object +" : { " +
        "x : " + info.x + ", " +
        "y : " + info.y + ", " 
        info = await getLocatorImage(imgCoordinate)
        file = file +
        "top : " + info.top + ", " +
        "left : " + info.left + ", " + 
        "width : " + info.width + ", " + 
        "height : " + info.height + ", " +
        "ImageCompare1 : pathImageCompare + \"ImgCompare_"+ section +"_" + object + "_1.png\", " +
        "ImageCompare2 : pathImageCompare + \"ImgCompare_"+ section +"_" + object + "_2.png\", " +
        "ImageCompare3 : pathImageCompare + \"ImgCompare_"+ section +"_" + object + "_3.png\", " +
        "ImageCompare4 : pathImageCompare + \"ImgCompare_"+ section +"_" + object + "_4.png\", " +
        "ImageCompare5 : pathImageCompare + \"ImgCompare_"+ section +"_" + object + "_5.png\" }" + extratext + "\n"
        return file
    } catch (error) {
        console.error(error.message);
        return ""
    }
}
export const genAllInfoByImageIndex6 = async(imgCoordinate,imgXY,section,object,extratext=",")=> {
    try {
        let info = await getLocatorImage(imgXY)
        // Write Object Locator
        let file = "\t"+ object +" : { " +
        "x : " + info.x + ", " +
        "y : " + info.y + ", " 
        info = await getLocatorImage(imgCoordinate)
        file = file +
        "top : " + info.top + ", " +
        "left : " + info.left + ", " + 
        "width : " + info.width + ", " + 
        "height : " + info.height + ", " +
        "ImageCompare1 : pathImageCompare + \"ImgCompare_"+ section +"_" + object + "_1.png\", " +
        "ImageCompare2 : pathImageCompare + \"ImgCompare_"+ section +"_" + object + "_2.png\", " +
        "ImageCompare3 : pathImageCompare + \"ImgCompare_"+ section +"_" + object + "_3.png\", " +
        "ImageCompare4 : pathImageCompare + \"ImgCompare_"+ section +"_" + object + "_4.png\", " +
        "ImageCompare5 : pathImageCompare + \"ImgCompare_"+ section +"_" + object + "_5.png\", " +
        "ImageCompare6 : pathImageCompare + \"ImgCompare_"+ section +"_" + object + "_6.png\" }" + extratext + "\n"
        return file
    } catch (error) {
        console.error(error.message);
        return ""
    }
}
export const genAllInfoByImageClickPopup = async(imgCoordinate,imgXY,section,object,extratext=",")=> {
    try {
        let info = await getLocatorImage(imgXY)
        // Write Object Locator
        let file = "\t"+ object +" : { " +
        "x : " + info.x + ", " +
        "y : " + info.y + ", " 
        console.log("X: "+info.x)
        console.log("Y: "+info.y)
        await clickPos(info.x,info.y)
        info = await getLocatorImage(imgCoordinate)
        file = file +
        "top : " + info.top + ", " +
        "left : " + info.left + ", " + 
        "width : " + info.width + ", " + 
        "height : " + info.height + ", " +
        "ImageCompare : pathImageCompare + \"ImgCompare_"+ section +"_" + object + ".png\" }" + extratext + "\n"
        return file
    } catch (error) {
        console.error(error.message);
        return ""
    }
}
export const genAllInfoByImageClickPopupIndex5 = async(imgCoordinate,imgXY,section,object,extratext=",")=> {
    try {
        let info = await getLocatorImage(imgXY)
        // Write Object Locator
        let file = "\t"+ object +" : { " +
        "x : " + info.x + ", " +
        "y : " + info.y + ", " 
        console.log("X: "+info.x)
        console.log("Y: "+info.y)
        await clickPos(info.x,info.y)
        info = await getLocatorImage(imgCoordinate)
        file = file +
        "top : " + info.top + ", " +
        "left : " + info.left + ", " + 
        "width : " + info.width + ", " + 
        "height : " + info.height + ", " +
        "ImageCompare1 : pathImageCompare + \"ImgCompare_"+ section +"_" + object + "_1.png\", " +
        "ImageCompare2 : pathImageCompare + \"ImgCompare_"+ section +"_" + object + "_2.png\", " +
        "ImageCompare3 : pathImageCompare + \"ImgCompare_"+ section +"_" + object + "_3.png\", " +
        "ImageCompare4 : pathImageCompare + \"ImgCompare_"+ section +"_" + object + "_4.png\", " +
        "ImageCompare5 : pathImageCompare + \"ImgCompare_"+ section +"_" + object + "_5.png\" }" + extratext + "\n"
        return file
    } catch (error) {
        console.error(error.message);
        return ""
    }
}
export const genAllInfoByImageClickPopupIndex6 = async(imgCoordinate,imgXY,section,object,extratext=",")=> {
    try {
        let info = await getLocatorImage(imgXY)
        // Write Object Locator
        let file = "\t"+ object +" : { " +
        "x : " + info.x + ", " +
        "y : " + info.y + ", " 
        console.log("X: "+info.x)
        console.log("Y: "+info.y)
        await clickPos(info.x,info.y)
        info = await getLocatorImage(imgCoordinate)
        file = file +
        "top : " + info.top + ", " +
        "left : " + info.left + ", " + 
        "width : " + info.width + ", " + 
        "height : " + info.height + ", " +
        "ImageCompare1 : pathImageCompare + \"ImgCompare_"+ section +"_" + object + "_1.png\", " +
        "ImageCompare2 : pathImageCompare + \"ImgCompare_"+ section +"_" + object + "_2.png\", " +
        "ImageCompare3 : pathImageCompare + \"ImgCompare_"+ section +"_" + object + "_3.png\", " +
        "ImageCompare4 : pathImageCompare + \"ImgCompare_"+ section +"_" + object + "_4.png\", " +
        "ImageCompare5 : pathImageCompare + \"ImgCompare_"+ section +"_" + object + "_5.png\", " +
        "ImageCompare6 : pathImageCompare + \"ImgCompare_"+ section +"_" + object + "_6.png\" }" + extratext + "\n"
        return file
    } catch (error) {
        console.error(error.message);
        return ""
    }
}

export const genCoordinateByImageList = async (img,section,object,arr,extratext=",")=> {
    try {
        const info = await getLocatorImage(img)
        // Write Object Locator
        let file = "\t"+ object +" : { " +
        "top : " + info.top + ", " +
        "left : " + info.left + ", " + 
        "width : " + info.width + ", " + 
        "height : " + info.height 
        arr.forEach(el => {
            file = file + ", " + "ImageCompare" + el + " : pathImageCompare + \"ImgCompare_"+ section +"_" + object + el + ".png\""
        });
        file = file + " }" + extratext + "\n"
        return file
    } catch (error) {
        console.error(error.message);
        return ""
    }
}
export const setBalance = async(custid,balance=0)=> {
    try {
        request({
            url: "http://owapi-simulator.lumigame.com/SabaClub/CreateCustomer?memId=4839058",
            body: 'ObCustId='+custid+'&Balance='+balance,
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                'Accept-Language': 'vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5',
                'Accept-Encoding': 'gzip, deflate'
            }
            
        }, function(error, response, body){
            if(error) {
                console.log(error);
            } else {
                console.log(response.statusCode);
            }})

    } catch (error) {
        console.error(error.message);
    }
}