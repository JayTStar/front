import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Header(){
    const [menuState, setMenuState] = useState("none");
    const [menuWidth, setMenuWidth] = useState(0)
    const navigate = useNavigate();

    function changeState(){
        if(menuState === "none"){
            setMenuWidth(20);
            setMenuState("flex");
        }

        if(menuState === "flex"){
            setMenuState("none");
            setMenuWidth(0)
        }
    }
    
    return(
        <Conteudo>
            <ion-icon name="menu-outline" onClick={() => {changeState()}}></ion-icon>
            <p onClick={()=> {navigate("/home")}}>UFFight</p>
            <Hidden state = {menuState} width = {menuWidth}>
                <div>
                    <p>Menu</p>
                    <ion-icon name="chevron-back-outline" onClick={() => {changeState()}}></ion-icon>
                </div>
                <ul>
                    <p onClick={()=> {navigate("/membros")}}>Membros</p>
                    <p onClick={()=> {navigate("/robos")}}>Robôs</p>
                    <p onClick={()=> {navigate("/avisos")}}>Avisos</p>
                    <p onClick={()=> {navigate("/mensalidades")}}>Mensalidades</p>
                </ul>
            </Hidden>
        </Conteudo>
    )
}

const Conteudo = styled.header`
    width: 100%;
    height: 100px;
    
    padding: 0 18px;
    box-sizing: border-box;
    background: #0f0c4f;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    display: flex;
    flex-direction: row;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;

    z-index:3;

    ion-icon{
        font-size: 50px;
        color: #D6D6D8;
    }

    ion-icon: hover{
        border: 2px solid #D6D6D8;
        border-radius: 5px;
        cursor:pointer;
    }
    
    P{
        width: 215px;
        height: 50px;

        display:flex;
        justify-content: center;
        align-items:center;

        position: absolute;
        left: calc(50% - 107.5px);
        top: calc(50% - 25px);

        color:#D6D6D8;

        font-family: 'Rubik Dirt', cursive;
        font-weight: 400;
        font-size: 50px;
        color: #D6D6D8;
    }
    p: hover{
        cursor: pointer;
    }
`

const Hidden = styled.div`
    width: ${props => props.width}%;
    height:100%;
    background-color: #D6D6D8;

    padding: 10px 0;

    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    position: fixed;
    left:0;
    top:0;

    -webkit-transition: width 0.3s ease-in;
    -moz-transition: width 0.3s ease-in;
    -o-transition: width 0.3s ease-in;
    -ms-transition: width 0.3s ease-in;
    transition: width 0.3s ease-in;

    div{

        width: 100%;
        height: 5%;

        display: ${props => props.state};
        position: absolute;
        top: 0;
        left:0;

        border-bottom: 2px dashed #0f0c4f;

        padding: 20px 0;

        p{
            font-family: 'M PLUS Rounded 1c', sans-serif;
            font-weight: 700;
            color: #0f0c4f;
        }

        ion-icon{
            color: #0f0c4f;
        }
    }

    ul{
        width: 100%;
        height: 100%;

        margin-top: 100px;

        display: flex;
        flex-direction: column;
        align-items: center;

        p{
            width: 90%;
            height:10%;

            position: static;
            display: ${props => props.state};

            font-family: 'M PLUS Rounded 1c', sans-serif;
            font-weight: 400;
            font-size: ${props => props.width}px;
            color: #0f0c4f;

            border: 2px solid #0f0c4f;
            border-radius: 10px;

            margin: 10px 0;
        }
        p: hover{
            cursor: pointer;
        }
    }
`