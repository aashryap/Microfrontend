import React, { lazy, Suspense, useState } from "react";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import {StylesProvider, createGenerateClassName} from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import Progress from "./components/Progress";

const generateClassName = createGenerateClassName({
    productionPrefix: "con"
});

const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthAppLazy = lazy(() => import("./components/AuthApp"));

export default () => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    return <BrowserRouter>
        <StylesProvider generateClassName={generateClassName}>
            <Header signedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
            <Suspense fallback={<Progress />}>
                <Switch>
                    <Route path="/auth">
                        <AuthAppLazy setIsSignedIn={setIsSignedIn} />
                    </Route>
                    <Route path="/" component={MarketingLazy} />
                </Switch>
            </Suspense>
            
        </StylesProvider>
     </BrowserRouter>
}