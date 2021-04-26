import playwright from 'playwright'
import * as config from './config/config'

before(async () => {
    global.wsMessageReceived = []
    global.browser = await playwright[config.setting.browser].launch({
       headless: config.setting.headless ,
       args: ['--disable-dev-shm-usage', '--no-sandbox', '--disable-gpu', '--use-gl=swiftshader','--enable-webgl']
      })
    const page = await browser.newPage();
    global.page = page
    const context = await browser.newContext({
        viewport: {
          width: config.setting.viewport.width,
          height: config.setting.viewport.height
        }
    });
    global.context = context
    global.isHear = false
    global.balance = parseFloat("0.00")
    global.env = process.env.NODE_ENV || 'cf_local'
    global.IsRunGameLobby = false
    global.IsRunBlackJack = false
    global.IsRunSedie = false
    global.IsRunVipSedie = false
    global.IsRunSedieWar = false
    global.IsRunMiniSedie = false
    global.IsRunBigSmall = false
    global.IsRunTurboBigSmall = false
    global.IsRunTurboOddEven = false
    global.IsRunBigSmallSicbo = true
})

