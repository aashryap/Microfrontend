import React, { lazy, Suspense } from "react";
// import MarketingApp from "./components/MarketingApp"
import Header from "./components/Header";
// import AuthApp from "./components/AuthApp";
import { BrowserRouter } from "react-router-dom";
import {StylesProvider, createGenerateClassName} from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import Progress from "./components/Progress";

const generateClassName = createGenerateClassName({
    productionPrefix: "con"
})

const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthAppLazy = lazy(() => import("./components/AuthApp"));

export default () => {
    return <BrowserRouter>
        <StylesProvider generateClassName={generateClassName}>
            <Header />
            <Suspense fallback={<Progress />}>
                <Switch>
                    <Route path="/auth" component={AuthAppLazy} />
                    <Route path="/" component={MarketingLazy} />
                </Switch>
            </Suspense>
            
        </StylesProvider>
     </BrowserRouter>
}