import React from 'react'

const OutraLista = ({itens}) => {
  return (
    <>
        <h3>Listas de coisas boas:</h3>
        {itens.length > 0 ? (
            itens.map((item, i) => (
                <p key={i}>{item}</p>
            ))) : (
                <p>Não há itens na lista</p>
            )
        }
    </>
  )
}

export default OutraLista