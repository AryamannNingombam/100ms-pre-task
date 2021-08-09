import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import './Info.scss'

import { CharacterDesc } from '../../components/info/CharacterDesc'
import { Quotes } from '../../components/info/Quotes'

const Info = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  

  const onBackClick = (e) => {
    e.preventDefault()
    navigate('/characters')
  }

  return (
    <div className="info-main-div">
      <div className="back-section">
        <span className="main-text" onClick={onBackClick}>
          BACK
        </span>
      </div>
      <div className="info-section">
        <CharacterDesc id={id} />
      </div>
      <div className="quotes-section">
        <div className="main-heading">QUOTES</div>
        <Quotes id={id} />
      </div>
    </div>
  )
}

export default Info
