import React, { lazy, Suspense, useEffect, useState } from "react";
import Header from "./components/Header";
import { createBrowserHistory } from "history";
import {StylesProvider, createGenerateClassName} from "@material-ui/core";
import { Route, Switch, Redirect, Router } from "react-router-dom";
import Progress from "./components/Progress";

const generateClassName = createGenerateClassName({
    productionPrefix: "con"
});

const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthAppLazy = lazy(() => import("./components/AuthApp"));
const DashboardAppLazy = lazy(() => import("./components/DashboardApp"));

const history = createBrowserHistory();

export default () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(() => {
        if (isSignedIn) {
            history.push("/dashboard")
        }
    }, [isSignedIn])

    return <Router history={history}>
        <StylesProvider generateClassName={generateClassName}>
            <Header signedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
            <Suspense fallback={<Progress />}>
                <Switch>
                    <Route path="/auth">
                        <AuthAppLazy setIsSignedIn={setIsSignedIn} />
                    </Route>
                    <Route path="/dashboard">
                        {!isSignedIn  && <Redirect path="/" />}
                        <DashboardAppLazy />
                    </Route>
                    <Route path="/" component={MarketingLazy} />
                </Switch>
            </Suspense>
            
        </StylesProvider>
     </Router>
}