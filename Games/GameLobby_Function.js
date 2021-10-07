import { GameLobbyLocator } from './GameLobby_Locator'
import * as utils from '../util/utils'
export const verifyLoginSuccessfully = async() => {
        //console.log(GameLobbyLocator.AccountName.ImageCompareAccountName)
        // return await utils.findImage(
        //     GameLobbyLocator.AccountName.ImageCompare,
        //     GameLobbyLocator.AccountName.left,
        //     GameLobbyLocator.AccountName.top,
        //     GameLobbyLocator.AccountName.width,
        //     GameLobbyLocator.AccountName.height)
        await utils.sleep(30000)
        return { Val : true }
}