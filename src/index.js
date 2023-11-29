import App from "./App";
import React,{createRoot} from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
const root = createRoot(document.querySelector(".root"));
root.render(
    <Router>
        <App />
    </Router>
)