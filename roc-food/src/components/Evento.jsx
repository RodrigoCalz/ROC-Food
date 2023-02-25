import React from 'react'
import Button from './evento/Button'

const Evento = ({ numero }) => {

    // function meuEvento() {
    //     console.log(`Fui ativado! ${numero}`)
    // }

  return (
    <div>
        <p>Clique para disparar um evento!</p>
        <Button text="Primeiro Evento" />
        {/* <button onClick={meuEvento}>Ativar!</button> */}
    </div>
  )
}

export default Evento