import { Route, Routes } from "react-router-dom";
import Artigo from "./pages/artigo";
import  Home  from "./pages/home";

export function Router() {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/artigo/:id" element={<Artigo/>}/>
        </Routes>
    )
}