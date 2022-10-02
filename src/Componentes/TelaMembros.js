import { useState, useEffect } from "react"
import axios from "axios";
import styled from "styled-components";
import Header from "./Header";
import Membro from "./Membro";
import { useNavigate } from "react-router-dom";

export default function TelaMembros(){
    const navigate = useNavigate();

    const [membros, setMembros] = useState([]);

    useEffect(()=>{
        getMembros();
    },[]);
    
    async function getMembros(){
        try{
            const req = await axios.get("http://localhost:5000/membros");

            setMembros(req.data)

            console.log(req.data)
        }
        catch(err){
            console.log("Erro ao buscar membros");
            console.log(err)
        }
    }

    function renderMembros(){
        if(membros.length === 0 ){
            return(
                <p>Não há membros cadastrados</p>
            )
        }
        else{
            return(
                <ul>
                    {membros.map(element => {return <Membro info = {element} />})}
                </ul>
            )
        }
    }

    const membro = renderMembros();
    
    return(

        <>
            <Header/>
            
            <Conteudo>
                {membro}
                <ion-icon id="add" name="add-circle" onClick={() => {navigate("/cadastro")}}></ion-icon>
            </Conteudo>
        </>
    )
}

const Conteudo = styled.main`
    width: 100%;
    height: auto;

    background-color:#F2F2F2;
    background-size:100%;

    box-sizing: border-box;

    margin-top: 80px;

    padding: 0 20px;

    z-index:0;

    position: relative;

    #back{
        font-size: 40px;

        color:#126BA5;

        position: absolute;

        top: 0px;
        left:10px;
    }

    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
    }

    div ion-icon{
        position: absolute;

        right:10px;
        top:10px;
        left:170px;

        font-size:25px;

        color: #126BA5;
    }

    ul{
        display: flex;
        justify-content:space-around;
        align-items: center;
        flex-wrap: wrap;
    }

    #add{
        font-size: 70px;

        color:#126BA5;

        position: fixed;

        bottom: 30px;
        right:10px;
    }
`