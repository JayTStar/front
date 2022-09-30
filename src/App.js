import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaLogin from "./Componentes/TelaLogin";
import TelaHome from "./Componentes/TelaHome";
import TelaMembros from "./Componentes/TelaMembros";
import TelaEdit from "./Componentes/TelaEdit";
import TelaCadastro from "./Componentes/TelaCadastro";
import TelaRobos from "./Componentes/TelaRobos";
import TelaAvisos from "./Componentes/TelaAvisos";
import TelaMensalidades from "./Componentes/TelaMensalidades";

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TelaLogin/>} />
                <Route path="/home" element={<TelaHome/>} />
                <Route path="/membros" element={<TelaMembros/>} />
                <Route path="/membro/:id/edit" element={<TelaEdit/>} />
                <Route path="/cadastro" element={<TelaCadastro/>} />
                <Route path="/robos" element={<TelaRobos/>} />
                <Route path="/avisos" element={<TelaAvisos/>} />
                <Route path="/mensalidades" element={<TelaMensalidades/>} />
            </Routes>
        </BrowserRouter>
    )
}