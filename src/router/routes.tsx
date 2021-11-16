import type {RouteObject} from "react-router-dom";

import {PublicRoutes} from "./publicRoutes";
import {AdminRoutes} from "./adminRoutes";

export interface RouteCustom extends RouteObject {
    label: string
    path: string,
}


export const routes: RouteCustom[] = [
    ...PublicRoutes,
    ...AdminRoutes
];
