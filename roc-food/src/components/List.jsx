import React from 'react'
import Item from './Item'

const List = () => {
  return (
    <>
        <h1>Minha lista</h1>
        <ul>
            <Item marca="Ferrari" ano_lancamento={1985}/>
            <Item marca="Fiat" ano_lancamento={1964}/>
            <Item marca="Ford" />
            <Item marca="Chevrolet" ano_lancamento={1924} />
            <Item />
        </ul>
    </>
  )
}

export default List