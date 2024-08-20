import React from "react";
import ReactDOM from 'react-dom';
import App from "./App";

const mount = (el) => {
    const root = ReactDOM.render( <App />, el);
}


// If we are running in isolation

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.getElementById("marketing-dev-root");
    if (devRoot) {
        mount(devRoot);
    }
}

// If we are running through container

export { mount };
