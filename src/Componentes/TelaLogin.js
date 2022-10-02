import styled from "styled-components";
import { useState} from "react";
import axios from "axios";
import Logo from "../Midias/Logo.jpg";
import { useNavigate } from "react-router-dom"

export default function TelaLogin(){
    const[matricula, setMatricula] = useState(undefined);
    const[senha, setSenha] = useState(undefined);

    const navigate = useNavigate();


    function confirmacaoLogin(){
        const URL = "http://localhost:5000/sign-in"
        const infoUsuario = {
                matricula: matricula,
                senha: senha
            }
        
        const requisicao = axios.post(URL, infoUsuario);

        requisicao.then(resposta => {
            localStorage.setItem("token", resposta.data);

            navigate("/home");

        })

        requisicao.catch(resposta => {

            {(resposta.response.status === 401) ? alert("Senha ou Matricula incorretos") : console.log(resposta.response);}
        })
    }


    return(<>
        <Conteudo>
            <h1>UFFight</h1>
            <form>
                <input placeholder="matricula" type="email" onChange={(e) => {setMatricula(e.target.value)}}/>
                <input placeholder="senha" type="password" onChange={(e) => {setSenha(e.target.value)}}/>
            </form>

            <div onClick={confirmacaoLogin}>Entrar</div>
        </Conteudo>
    </>)
}

const Conteudo = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    background: rgb(15,12,79);
    background: linear-gradient(45deg, rgba(15,12,79,1) 0%, rgba(67,63,140,1) 20%, rgba(214,214,216,1) 100%); 

    h1{
        width: auto;
        height: auto;

        display: flex;
        flex-direction: center;
        align-items: center;

        font-family: 'Rubik Dirt', cursive;
        font-weight: 400;
        font-size: 100px;
        color: #09072F;
    }

    form{
        width: auto;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    input{
        width: 400px;
        height: 50px;

        background-color: #FFFFFF;
        margin: 10px;
        border: 2px solid #09072F;
        box-sizing: border-box;
        border-radius: 5px;
        
        font-family: 'M PLUS Rounded 1c', sans-serif;
        font-weight: 400;
        font-size: 25px;
        color: #09072F;
    }

    div{
        width: 303px;
        height: 45px;
        background-color: #D6D6D8;
        border-radius: 5px;

        font-family: 'M PLUS Rounded 1c', sans-serif;
        font-weight: 400;
        font-size: 25px;

        display: flex;
        justify-content: center;
        align-items: center;
        color: #09072F;
    }

    div:hover{
        background-color: #09072F;
        color: #D6D6D8;
    }
`