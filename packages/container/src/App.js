import React from "react";
import MarketingApp from "./components/MarketingApp"
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";

export default () => {
    return <>
     {/* <h1>CONTAINER !!!</h1>
     <hr /> */}
     <BrowserRouter>
        <Header />
        <MarketingApp />
     </BrowserRouter>
    </>
}