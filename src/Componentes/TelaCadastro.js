import { useParams } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"
import axios from "axios";
import { render } from "react-dom";


export default function TelaCadastro(){
    const {id} = useParams();
    const navigate = useNavigate();
    const URL = "http://localhost:5000";

    const [cargos, setCargos] = useState([]);
    const [categorias, setCategorias] = useState([]);

    const [nome,setNome] = useState("Default");
    const [matricula,setMatricula] = useState("Default");
    const [cargo,setCargo] = useState("Default");
    const [categoria,setCategoria] = useState("Default");
    const [telefone,setTelefone] = useState("Default");
    const [aniversario,setAniversario] = useState("Default");
    const [senha, setSenha] = useState("Default");

    const config = {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    } 

    useEffect(() => {
        getInfo();
    }, []);

    async function getInfo(callback){
        try{

            const cargos = await axios.get(`${URL}/cargos`);

            setCargos(cargos.data);

            const categorias = await axios.get(`${URL}/categorias`);

            setCategorias(categorias.data);

        }
        catch(err){
            console.log("Erro ao buscar informações");
            console.log(err);
        }
    }

    function renderSelecCargo(){
        return(
            <select onChange={(e) => {setCargo(e.target.value)}}>
                <option value={""}>Selecionar cargo</option>
                {cargos.map(elemento => {
                    if(elemento !== null){return <option value={elemento.id} >{elemento.nome}</option>}
                })}
            </select>
        )
    }

    function rederSelectCategoria(){
        return(
            <select onChange={(e) => {setCategoria(e.target.value)}}>
                <option value={""}>Selecionar categoria</option>
                {categorias.map(elemento => {
                    return <option value={elemento.id} >{elemento.nome}</option>
                })}
            </select>
        )
    }

    async function submitCadastro(){
        const info = {
            matricula: matricula,
            senha: senha,
            nome: nome,
            idCargo: parseInt(cargo),
            idCategoria: parseInt(categoria),
            telefone: telefone,
            aniversario: aniversario
        }

        console.log(info);

        try{
            const edit = await axios.post(`${URL}/sign-up`, info, config );

            alert("Aluno cadastrado com sucesso");

            navigate("/membros");
        }
        catch(err){
            if(err.response.status === 401){
                alert("Você não tem autorização para fazer essa ação");
                console.log(err)
            }
            else{
                console.log(err);
            }
        }
    }

    const selectCargo = renderSelecCargo;

    const selectCategoria = rederSelectCategoria;

    return(
        <>
            <Header/>
            <Conteudo>
                <form>
                    <input placeholder="Nome" type="text" onChange={(e) => {setNome(e.target.value)}}/>
                    <input placeholder="Matrícula" type="text" onChange={(e) => {setMatricula(e.target.value)}}/>
                    {(!cargos && !cargo)? <p>Carregando...</p> : selectCargo()}
                    {(!categorias && !categoria)? <p>Carregando...</p> : selectCategoria()}                    
                    <input placeholder="Telefone" type="text" onChange={(e) => {setTelefone(e.target.value)}}/>
                    <input placeholder="Aniversário" type="text" onChange={(e) => {setAniversario(e.target.value)}}/>
                    <input placeholder="Senha" type="text" onChange={(e) => {setSenha(e.target.value)}}/>
                </form>

                <button onClick={() => {submitCadastro()}}>Salvar</button>
            </Conteudo>
        </>
    )
}

const Conteudo = styled.main`
    width: 100%;
    height: calc(100vh - 100px);
    margin-top: 100px;

    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;

    ion-icon{
        font-size: 40px;

        color:#126BA5;

        position: absolute;

        top: 0px;
        left:10px;
    }

    form{
        width: 100%;
        height: auto;

        display: flex;
        flex-direction: column;
        align-items: center;

       padding: 50px 0 ;
    }

    input{
        width: 300px;
        height: 50px;

        box-sizing:border-box;

        margin: 5px 0;
    }

    select{
        width: 300px;
        height: 50px;

        box-sizing:border-box;

        margin: 5px 0;
    }

    button{
        width: 300px;
        height: 50px;

        box-sizing:border-box;

        margin: 5px 0;
    }
`