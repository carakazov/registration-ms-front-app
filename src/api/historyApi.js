import {getToken} from "../tokenholder/tokenHolder";

const HISTORY_URL = '/oauth/history'

export async function getHistory() {
    let token = await getToken()

    let result = await fetch(process.env.REACT_APP_BACKEND_URL + HISTORY_URL, {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + token
        }
    })

    if(result.ok) {
        return await result.json()
    }

    return Promise.reject(result.status)
}