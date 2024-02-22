import { createBrowserRouter } from "react-router-dom";
import Cardapio from "./pages/Cardapio";
import Home from "./pages/Home";
import HomeTemplate from "./templates/HomeTemplate";
import Sobre from "./pages/Sobre";
import Prato from "./pages/Prato";
import NotFound from "./pages/NotFound";

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
    {
        path: '/prato/:id',
        element: <Prato />
    },
    {
        path: '*', 
        element: <NotFound />
    }
])

export default router;