import {Outlet} from "react-router-dom";
import NavigationBar from "./components/navigationBar/NavigationBar";
import {Sidebar} from "./components/sidebar/Sidebar";
import './publicLayout.css'


export const PublicLayout = () => {
    return (
        <main className="">
            <NavigationBar />
            <div className="container-fluid">
                <div className="row no-gutters">
                    <div className="col-12">
                        <div className=" outlet">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </main>

    );
}
