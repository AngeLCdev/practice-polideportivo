import pagesAuth from "../path/pages.path";

import Error404 from "../../../components/Pages/Error404"


export const VIEW_ERR404 = {
    component: Error404,
    path: pagesAuth.error404,
    isPrivate: false
}
const routesPages = [VIEW_ERR404]
export default routesPages;