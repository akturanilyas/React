import React from "react";

import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import ROUTES, {RenderRoutes} from "./routes";


function App() {
    return (
        <RenderRoutes routes={ROUTES} />
    );
}

export default App;

