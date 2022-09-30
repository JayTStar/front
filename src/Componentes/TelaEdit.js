import { useParams } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"
import axios from "axios";

export default function TelaEdit(){
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

    const config = {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    } 

    console.log(config)

    useEffect(() => {
        getInfo();
    }, []);

    async function getInfo(callback){
        try{
            const usuario = await axios.get(`${URL}/membro/${id}`);

            setInfo(usuario.data);

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
                    if(elemento.id === cargo){
                        return <option value={elemento.id} selected="selected">{elemento.nome}</option>
                    }
                    else{
                        return <option value={elemento.id}>{elemento.nome}</option>
                    }
                
                })}
            </select>
        )
    }

    function rederSelectCategoria(){
        return(
            <select onChange={(e) => {setCategoria(e.target.value)}}>
                <option value={""}>Selecionar categoria</option>
                {categorias.map(elemento => {
                    if(elemento.id === categoria){
                       return <option value={elemento.id} selected="selected">{elemento.nome}</option>
                    }
                    else{
                        return <option value={elemento.id}>{elemento.nome}</option>
                    }
                
                })}
            </select>
        )
    }

    function setInfo(user){
        setNome(user.nome);
        setMatricula(user.matricula);
        setCargo(user.cargo.id);
        setCategoria(user.Categoria.id);
        setTelefone(user.telefone);
        setAniversario(user.aniversario);
    }

    async function submitEdit(){
        const info = {
            nome: nome,
            matricula: matricula,
            idCargo: cargo,
            idCategoria: categoria,
            telefone: telefone,
            aniversario: aniversario
        }
        try{
            const edit = await axios.post(`${URL}/membro/${id}/edit`, info, config );

            alert("Informções atualizadas");

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
                <ion-icon name="arrow-back-outline" onClick={() => {navigate("/membros")}}></ion-icon>
                <form>
                    <input placeholder="Nome" type="text" value={nome} onChange={(e) => {setNome(e.target.value)}}/>
                    <input placeholder="Matrícula" type="text" value={matricula} onChange={(e) => {setMatricula(e.target.value)}}/>
                    {(!cargos && !cargo)? <p>Carregando...</p> : selectCargo()}
                    {(!categorias && !categoria)? <p>Carregando...</p> : selectCategoria()}                    
                    <input placeholder="Telefone" type="text" value={telefone} onChange={(e) => {setTelefone(e.target.value)}}/>
                    <input placeholder="Aniversário" type="text" value={aniversario} onChange={(e) => {setAniversario(e.target.value)}}/>
                </form>

                <button onClick={() => {submitEdit()}}>Salvar</button>
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