import React, { useEffect, useState } from 'react';
import api from '../Api';
import Form from '../components/Form';
import './style.css';


const Home = () => {
    const [jogadores, setJogadores] = useState([]);

    useEffect( () => {
        api.get(`/jogadores`)
        .then( res => {
            setJogadores(res.data);
        }).catch(err => console.log(err));
    }, [jogadores])

    const handleClickRemove = (id) =>{
        api.delete(`/jogadores/${id}`)
        .then( res => {
            console.log(res);
        }).catch(err => console.log(err));
    }

    
    return(
        <div className='content'>
            <Form  />
            <ul>
                 {jogadores.sort((a, b) => {
                    const aId = parseInt(a._id.replace(/[^0-9]/g, ''));
                    const bId = parseInt(b._id.replace(/[^0-9]/g, ''));
                    return bId - aId;
                })
                 .map(jogador => (
                     <li  style={{listStyle: "none"}} key={jogador._id}>
                         <div>Nome <span>{jogador.nome}</span></div>
                         <div>Time <span>{jogador.time}</span></div>
                         <div>Posição <span>{jogador.posicao}</span> </div>
                         <button onClick={() => handleClickRemove(jogador._id)}>
                            Remover
                        </button>
                     </li>
                 ))}
            </ul>
        </div>
        
    )
}

export default Home;