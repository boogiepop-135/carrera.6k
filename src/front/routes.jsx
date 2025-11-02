import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";

// Router configuration for San Cosme Orgánico
export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />} errorElement={<h1>Página no encontrada</h1>}>
            <Route path="/" element={<Home />} />
        </Route>
    )
);