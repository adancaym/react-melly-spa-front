import {Link} from "react-router-dom";
import * as React from "react";

export const NoMatch = () => {
    return (
        <div>
            <h2>It looks like you're lost...</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
}

