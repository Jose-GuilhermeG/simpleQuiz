import { Routes , BrowserRouter , Route } from "react-router-dom";

//pages
import Home from "./pages/Home";
import BasePage from "./pages/BasePage";
import NotFoundPage from "./pages/notFoundPage";
import SelectQuizTheme from "./pages/selectQuizTheme";
import QuizPage from "./pages/quizPage";

export default function SistemRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<BasePage/>}>
                    <Route path="" element={<Home/>}/>
                    <Route path="/theme/select/" element={<SelectQuizTheme/>}/>
                    <Route path="/quiz/:theme/" element={<QuizPage/>}/>
                    <Route path="*" element={<NotFoundPage/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}