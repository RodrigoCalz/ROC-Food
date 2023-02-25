import React from 'react'
import { useState } from 'react';

const Form = () => {
    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(`Usuario: ${name} cadastrado com sucesso com a senha: ${password}`);
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

  return (
    <div>
        <h1>Meu Cadastro:</h1>
        <form onSubmit={cadastrarUsuario}>
            <div>
                <label htmlFor="name">Nome: </label>
                <input 
                    type="text" 
                    id='name' 
                    name='name' 
                    placeholder='Nome' 
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password" >Senha: </label>
                <input 
                    type="password" 
                    placeholder='Senha' 
                    id='password' 
                    name='password'
                    onChange={(e) => setPassword(e.target.value)}
                    
                />
            </div>
            <div>
                <input type="submit" value="Cadastrar" />
            </div>
        </form>
    </div>
  )
}

export default Form