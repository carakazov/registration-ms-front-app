import {updateToken} from "../tokenrequester/tokenRequester";
import {LOGIN_KEY, PASSWORD_KEY, TOKEN_EXPIRATION_TIME_KEY, TOKEN_KEY} from "../constants/tokenConstants";
import jwt_decode from "jwt-decode";

export function setData(login, password, token) {
    sessionStorage.setItem(LOGIN_KEY, login)
    sessionStorage.setItem(PASSWORD_KEY, password)
    sessionStorage.setItem(TOKEN_KEY, token)
    let decodedToken = jwt_decode(token)
    let time = new Date()
    sessionStorage.setItem(TOKEN_EXPIRATION_TIME_KEY, time.setSeconds(time.getSeconds() + decodedToken.expires_in).toString())
}

export async function getToken() {
    await updateToken()
    return sessionStorage.getItem(TOKEN_KEY)
}

export function deleteToken() {
    sessionStorage.removeItem(TOKEN_KEY)
}

export function  isAuthed() {
    return !(sessionStorage.getItem(TOKEN_KEY) === null)
}