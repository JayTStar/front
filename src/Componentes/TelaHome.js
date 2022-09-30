import Header from "./Header";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function TelaHome(){
    const navigate = useNavigate();
    return (
        <>
            <Header/>

            <Menu>
                <p onClick={()=> {navigate("/membros")}}>membros</p>
                <p onClick={()=> {navigate("/robos")}}>robôs</p>
                <p onClick={()=> {navigate("/avisos")}}>avisos</p>
                <p onClick={()=> {navigate("/mensalidades")}}>mensalidade</p>
            </Menu>
        </>
    )
}

const Menu = styled.ul`
    width: 100%;
    height: calc(100vh - 200px);
    margin: 100px 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p{
        width: 80%;
        height: 50px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        margin: 30px;

        border: solid 2px #126BA5;
        border-radius: 10px;

        color: #126BA5;

        font-family:'Roboto Mono', monospace;
        font-size: 20px;
    }
`