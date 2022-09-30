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
            <img src={Logo} alt="Logo"/>
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

    background-color: #D6D6D8;

    img{
        width: 200px;
        height: 200px;
    }

    form{
        width: auto;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    input{
        width: 303px;
        height: 45px;
        background-color: #FFFFFF;
        margin: 10px;
        border: 1px solid #09072F;
        box-sizing: border-box;
        border-radius: 5px;
        
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #09072F;
    }

    div{
        width: 303px;
        height: 45px;
        background-color: #09072F;
        border-radius: 5px;
        font-style: normal;
        font-weight: 400;
        font-size: 20.976px;
        line-height: 26px;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #D6D6D8;
    }
`