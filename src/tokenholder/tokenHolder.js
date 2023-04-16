import {updateToken} from "../tokenrequester/tokenRequester";
import {LOGIN_KEY, PASSWORD_KEY, TOKEN_EXPIRATION_TIME_KEY, TOKEN_KEY} from "../constants/tokenConstants";
import jwtDecode from "jwt-decode";

export function setData(login, password, token) {
    sessionStorage.setItem(LOGIN_KEY, login)
    sessionStorage.setItem(PASSWORD_KEY, password)
    sessionStorage.setItem(TOKEN_KEY, token)
    let decodedJwt = jwtDecode(token)
    sessionStorage.setItem(TOKEN_EXPIRATION_TIME_KEY, decodedJwt.exp)
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