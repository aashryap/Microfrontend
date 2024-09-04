import { createApp } from "vue";
import Dashboard from "./components/Dashboard.vue";

const mount = (el) => {
    const app = createApp(Dashboard);
    app.mount(el);
}


// If we are running in isolation

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.getElementById("dashboard-dev-root");
    if (devRoot) {
        mount(devRoot);
    }
}

// If we are running through container

export { mount };
