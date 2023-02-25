import React from 'react'

const Pessoa = ({nome, idade, ocupacao, foto}) => {
  return (
    <div>
        <img src={foto} alt={nome} />
        <h2>Nome: {nome}</h2>
        <p>Idade: {idade}</p>
        <p>Ocupação: {ocupacao}</p>
    </div>
  )
}

export default Pessoa