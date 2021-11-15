
import {PublicLayout} from "../layouts";
import {NoMatch} from "../views/NoMatch";
import {RouteCustom} from "./routes";
import {lazy} from "react";


const Home = lazy(() => import('../views/public/Home'))


export const PublicRoutes: RouteCustom[] = [
    {
        label: "Inicio",
        path: "/",
        element: <PublicLayout />,
        children: [
            {
                index: true, element: <Home />
            },
            {
                path: "*", element: <NoMatch/>
            }
        ]
    }
];
