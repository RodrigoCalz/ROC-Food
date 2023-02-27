import React from 'react'
import Button from './evento/Button'

const Evento = () => {

    function meuEvento() {
        console.log(`Ativando primeiro evento!`)
    }

    function segundoEvento() {
      console.log("Ativando o segundo evento");
    }

  return (
    <div>
        <p>Clique para disparar um evento!</p>
        <Button text="Primeiro Evento" event={meuEvento}/>
        <Button text="Segundo Evento" event={segundoEvento}/>
    </div>
  )
}

export default Evento