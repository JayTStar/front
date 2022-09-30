import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Header(){
    const navigate = useNavigate();
    
    return(
        <Conteudo>
            <p onClick={()=> {navigate("/home")}}>UFFight</p>
        </Conteudo>
    )
}

const Conteudo = styled.header`
    width: 100%;
    height: 80px;
    padding: 0 18px;
    box-sizing: border-box;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 0;
    top: 0;

    z-index:3;
    
    P{
        width:100%;
        height: 100%;

        display:flex;
        justify-content: center;
        align-items:center;

        color:#D6D6D8;

        font-family: 'Lexend Deca', sans-serif;
        font-size: 30px;
    }
`