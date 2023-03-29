const LOGIN_URL = "/oauth/token"

export async function login(loginData) {

    let formBody = [
        encodeURIComponent(process.env.REACT_APP_GRANT_TYPE_KEY) + '=' + encodeURIComponent(process.env.REACT_APP_GRANT_TYPE_VALUE),
        encodeURIComponent(process.env.REACT_APP_CLIENT_ID_KEY) + '=' + encodeURIComponent(loginData.login),
        encodeURIComponent(process.env.REACT_APP_CLIENT_SECRET_KEY) + '=' + encodeURIComponent(loginData.password)
    ]

    let response = await fetch(process.env.REACT_APP_BACKEND_URL + LOGIN_URL, {
        method: 'POST',
        headers: {
            'Content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: formBody.join('&')
    })

    return response.ok ? await response.json() : Promise.reject(response.status)
}