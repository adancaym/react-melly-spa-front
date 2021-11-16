
import {PublicLayout} from "../layouts";
import {NoMatch} from "../views/NoMatch";
import {RouteCustom} from "./routes";
import {lazy} from "react";
import {Clients} from "../views/admin/Clients";


const Home = lazy(() => import('../views/public/Home'))


export const AdminRoutes: RouteCustom[] = [
    {
        label: "Inicio",
        path: "/admin/",
        element: <PublicLayout />,
        children: [
            {
                index: true, element: <Home />
            },
            {
                path:"clients", element: <Clients />
            },
            {
                path: "*", element: <NoMatch/>
            }
        ]
    }
];
