import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName='Correia'>
        <Member name='Lucas'/>
        <Member name='Luzia'/>
        <Member name='Sheili'/>
    </Family>
, document.getElementById('app'))