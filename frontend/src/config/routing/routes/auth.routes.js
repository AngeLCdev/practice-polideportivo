import pathAuth from "../path/auth.path";

import Login from "../../../components/Auth/Login"
import Register from "../../../components/Auth/Register"


export const VIEW_LOGIN = {
    component: Login,
    path: pathAuth.login,
    isPrivate: false
}

export const VIEW_LOGOUT = {
    component: "",
    path: pathAuth.logout,
    isPrivate: false
}

export const VIEW_REGISTER = {
    component: Register,
    path: pathAuth.registro,
    isPrivate: false
}



export default [VIEW_LOGIN, VIEW_LOGOUT, VIEW_REGISTER];