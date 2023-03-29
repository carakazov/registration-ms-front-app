import {login} from "../api/authApi"
import {LOGIN_KEY, PASSWORD_KEY, TOKEN_KEY, TOKEN_EXPIRATION_TIME_KEY} from "../constants/tokenConstants";

export async function updateToken() {
    if(new Date() >= Date.parse(sessionStorage.getItem(TOKEN_EXPIRATION_TIME_KEY))) {
        await login({
            login: sessionStorage.getItem(LOGIN_KEY),
            password: sessionStorage.getItem(PASSWORD_KEY)
        }).then(result => sessionStorage.setItem(TOKEN_KEY, result.access_token))
    }
}