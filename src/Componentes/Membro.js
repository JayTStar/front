import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Membro({info}){
    const {nome, matricula, cargo, Categoria, id} = info;

    const navigate = useNavigate();

    return(
        <Conteudo>
            <ion-icon name="create" onClick={()=> {navigate(`/membro/${id}/edit`)}}></ion-icon>
            <p>Nome: {nome}</p>
            <p>Matrícula: {matricula}</p>
            <p>Cargo: {cargo.nome}</p>
            <p>Categoria: {Categoria.nome}</p>
        </Conteudo>
    )
}

const Conteudo = styled.div`
    width:200px;
    height:250px;

    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: space-around;

    background-color: #FFFFFF;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 20px 5px;
    margin: 30px; 
    position:relative;

    color: #126BA5;

    
`