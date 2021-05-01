import path from "../path/home.path";

import Home from "../../../components/Home/Home"
import Reserva from "../../../components/Reservas/Reserva"

export const VIEW_HOME = {
    component: Home,
    path: path.home,
    isPrivate: false
}

export const VIEW_RESERVAR = {
    component: Reserva,
    path: path.reservas,
    isPrivate: false
}


const rutasHome = [VIEW_RESERVAR,VIEW_HOME]


export default rutasHome;