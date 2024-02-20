import { createBrowserRouter } from "react-router-dom";
import Cardapio from "./pages/Cardapio";
import Home from "./pages/Home";
import HomeTemplate from "./templates/HomeTemplate";
import Sobre from "./pages/Sobre";

const router = createBrowserRouter([
    {
        element: <HomeTemplate />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/cardapio',
                element: <Cardapio />
            },
            {
                path: '/sobre',
                element: <Sobre />
            }
        ]
    },
])

export default router;