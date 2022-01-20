import {getAll} from "../urls/urls";

const userUrl = () => {
    return fetch(`${getAll.users}`)
        .then(value => value.json())
}

export const userService = {
    userUrl
}
