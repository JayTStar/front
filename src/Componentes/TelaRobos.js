import Header from "./Header";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function TelaRobos (){
    const navigate = useNavigate();
    alert("em breve você poderá ver os projetos aqui");
    return (
        <>
            <Header/>
            <Conteudo>
                <p>Nenhum robô cadastrado</p>
            </Conteudo>
            
        </>
        
    )
}

const Conteudo = styled.main`
    width: 100%;
    height: calc(100vh - 200px);
    margin-top: 100px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    position: relative;

    padding-top: 50px;

    ion-icon{
        font-size: 40px;

        color:#126BA5;

        position: absolute;

        top: 0px;
        left:10px;
    }

    p{
        font-family:'Roboto Mono', monospace;
        font-size: 20px;
    }
`