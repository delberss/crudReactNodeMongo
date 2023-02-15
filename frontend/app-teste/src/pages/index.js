import React, { useEffect, useState } from 'react';
import api from '../Api';
import Form from '../components/Form';


const Home = () => {
    const [jogadores, setJogadores] = useState([]);


    useEffect( () => {
        api.get(`/jogadores`)
        .then( res => {
            setJogadores(res.data);
        }).catch(err => console.log(err));
    }, [jogadores])

    
    return(
        <>
            <div>Home</div>
            <Form  />

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