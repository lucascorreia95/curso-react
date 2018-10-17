import React from 'react'
import ReactDOM from 'react-dom'

import Multi from './componentes/multiplos'
import Saudacao from './componentes/saudacao'
import Pai from './componentes/pai'
import Filho from './componentes/filho'

ReactDOM.render(
    <div>
        <Multi.BoaTarde nome='Lucas' />
        <Multi.BoaNoite nome='Lucas2' />
        <Saudacao tipo="Bom dia" nome="Lusca" />
        <Pai nome="Paulo" sobrenome="Silva">
            <Filho nome="Pedro" sobrenome="Silva" />
            <Filho nome="Paulo" sobrenome="Silva" />
            <Filho nome="Carla" sobrenome="Silva" />
        </Pai>
    </div>
, document.getElementById('root'))