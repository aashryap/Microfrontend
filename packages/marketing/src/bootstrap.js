import React from "react";
import ReactDOM from 'react-dom';
import {createMemoryHistory, createBrowserHistory} from "history";
import App from "./App";

const mount = (el, {onNavigate, defaultHistory, initialPathName}) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPathName]
    });
    if (onNavigate) {
        history.listen(onNavigate);
    }
    const root = ReactDOM.render( <App history={history}/>, el);
    return {
        onContainerNavigate: ({pathname: nextPathname}) => {
            const {pathname} = history.location;
            if (pathname !== nextPathname) {
                history.push(nextPathname);
            }
        }
    }
}


// If we are running in isolation

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.getElementById("marketing-dev-root");
    const history = createBrowserHistory(); // when running app in isolation we will use default history
    if (devRoot) {
        mount(devRoot, {
            defaultHistory: history
        });
    }
}

// If we are running through container

export { mount };
