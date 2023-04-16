import {getToken} from "../tokenholder/tokenHolder";

const CHANGE_STATUS_URL = '/auth/{clientId}/changeStatus'
const GET_CLIENTS_URL = '/auth/clients'
const CLIENT_ID_PLACEHOLDER = '{clientId}'

export async function changeClientStatus(systemId) {
    let token = await getToken()
    let response = await fetch(process.env.REACT_APP_BACKEND_URL + CHANGE_STATUS_URL.replace(CLIENT_ID_PLACEHOLDER, systemId), {
        method: 'PUT',
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
    if(response.ok) {
        return Promise.resolve()
    } else {
        return Promise.reject()
    }
}

export async function getClients() {
    let token = await getToken()
    let response = await fetch(process.env.REACT_APP_BACKEND_URL + GET_CLIENTS_URL, {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + token
        }
    })

    if(response.ok) {
        return await response.json()
    }

    return Promise.reject(response.status)
}