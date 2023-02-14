import React, { useEffect, useState } from 'react';
import api from '../Api';

const Home = () => {
    const [form, setForm] = useState({})
    const [jogadores, setJogadores] = useState([]);


    useEffect( () => {
        api.get(`/jogadores`)
        .then( res => {
            setJogadores(res.data);
        }).catch(err => console.log(err));
    }, [jogadores])

    const handleClick = async (e) =>{
        e.preventDefault();

        api.post(`/jogadores`, form)
        .then( res => {
            console.log(res);
        }).catch(err => console.log(err));
    }

    const changeState = (e) => {
        const {name, value} = e.target;

        setForm(
            (prevState) => ({
                ...prevState,
                [name]: value
            })
        )

        console.log(form);
    }

    
    return(
        <>
            <div>Home</div>

            <form method='POST' onSubmit={(e) => handleClick(e)}>
                <input 
                    onChange={(e) => changeState(e)} 
                    name='nome'
                    placeholder='Digite seu nome aqui:'/>
                <input 
                    onChange={(e) => changeState(e)} 
                    name='time'
                    placeholder='Digite seu time aqui:'/>
                <input 
                    onChange={(e) => changeState(e)} 
                    name='posicao'
                    placeholder='Digite sua posição aqui:'/>

                <button >Criar</button>
            </form>
           <ul  style={{display: "flex", flexDirection: "column", justifyContent: "center"} }>
                 {jogadores.map(jogador => (
                     <li  style={{listStyle: "none"}} key={jogador.id}>
                         <p>Nome: {jogador.nome}</p>
                         <p>Time: {jogador.time}</p>
                         <p>Posição: {jogador.posicao}</p>
                     </li>
                 ))}
                </ul>
            


        </>
        
    )
}

export default Home;