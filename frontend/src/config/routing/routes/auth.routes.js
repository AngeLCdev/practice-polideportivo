import pathAuth from "../path/auth.path";

import Login from "../../../components/Auth/Login"
import Logout from "../../../components/Auth/Logout"
import Register from "../../../components/Auth/Register"
import Activate from "../../../components/Auth/Activate"


export const VIEW_LOGIN = {
    component: Login,
    path: pathAuth.login,
    isPrivate: false
}

export const VIEW_LOGOUT = {
    component: Logout,
    path: pathAuth.logout,
    isPrivate: false
}

export const VIEW_REGISTER = {
    component: Register,
    path: pathAuth.registro,
    isPrivate: false
}

export const VIEW_ACTIVATE = {
    component: Activate,
    path: pathAuth.activate,
    isPrivate: false
}

const rutas = [VIEW_LOGIN, VIEW_LOGOUT, VIEW_REGISTER, VIEW_ACTIVATE]

export default rutas;