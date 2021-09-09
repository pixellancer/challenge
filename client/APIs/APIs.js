const baseURL = 'http://localhost:3000'

export const getUsers = () => {
    return fetch([baseURL, "users"].join('/'), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
}

export const getItems = () => {
    return fetch([baseURL, "items"].join('/'), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
}

export const getListOfAgesOfUsersWith = () => {
    return fetch([baseURL,"users", "age",":item"].join('/'), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
}
