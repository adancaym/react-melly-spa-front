import * as React from "react";


import type {RouteObject} from "react-router-dom";

import {PublicRoutes} from "./publicRoutes";

export interface RouteCustom extends RouteObject {
    label: string
    path: string,
}


export const routes: RouteCustom[] = [
    ...PublicRoutes
];
