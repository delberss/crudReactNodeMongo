import Button from '../Button/index';
import Input from '../Input/index';
import React, { useEffect, useState } from 'react';
import api from '../../Api';

const Form = ({onSubmit}) => {
    const [form, setForm] = useState({});

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

    const handleClick = async (e) =>{
        e.preventDefault();

        api.post(`/jogadores`, form)
        .then( res => {
            console.log(res);
        }).catch(err => console.log(err));
    }

  return (
    <form method='POST' onSubmit={(e) => handleClick(e)}>
        <Input onChange={(e) => changeState(e)} 
            required
            name='nome'
            type='text'
            placeholder='Digite seu nome aqui:'/>

        <Input 
            onChange={(e) => changeState(e)} 
            required
            name='time'
            type='text'
            placeholder='Digite seu time aqui:'/>

        <Input 
            onChange={(e) => changeState(e)} 
            required
            name='posicao'
            type='text'
            placeholder='Digite sua posição aqui:'/>

        <Button> 
            Criar
        </Button>
    </form>
  )
}
export default Form;