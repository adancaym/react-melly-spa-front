import  React, {Suspense} from "react";
import { useRoutes } from "react-router-dom";
import {routes} from "./router/routes";

export default function App() {

    let element = useRoutes(routes);
    return (
        <div>
            <Suspense fallback={<>Loading</>}>
                {element}
            </Suspense>
        </div>
    );
}

