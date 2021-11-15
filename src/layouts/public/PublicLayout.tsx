import {Outlet} from "react-router-dom";
import * as React from "react";
import NavigationBar from "./components/NavigationBar";
import {Sidebar} from "./components/Sidebar";
import './publicLayout.css'

export const PublicLayout = () => {
    return (
        <main className="">
            <NavigationBar />
            <div className="container-fluid">
                <div className="row no-gutters">
                    <Sidebar className="col-2 bg-dark v100" />
                    <div className="col-10 bg-secondary">
                        <div className="bg-primary outlet">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </main>

    );
}
