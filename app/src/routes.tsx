import { Routes , BrowserRouter , Route } from "react-router-dom";

//pages
import Home from "./pages/Home";
import BasePage from "./pages/BasePage";
import NotFoundPage from "./pages/notFoundPage";

export default function SistemRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<BasePage/>}>
                    <Route path="" element={<Home/>}/>
                    <Route path="*" element={<NotFoundPage/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}