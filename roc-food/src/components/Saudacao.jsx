import React from 'react'

const Saudacao = ({nome}) => {
    function gerarSaudacao(algumNome) {
        return `Olá ${algumNome}, tudo bem?`
    }

  return (
    <div>
        { nome && <p>{gerarSaudacao(nome)}</p>} 
    </div>
  )
}

export default Saudacao