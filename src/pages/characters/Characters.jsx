import React, { useState } from 'react'
import './Characters.scss'
import logo from '../../images/breaking_bad_logo.svg'
import { useNavigate } from 'react-router'
import { CrewList } from '../../components/characters/CrewList'
import { CharacterInfo } from '../../components/characters/CharacterInfo'

const Characters = () => {
  const [currentChosenCharacter, setCurrentChosenCharacter] = useState(null)
  const navigate = useNavigate()

  const onBackClick = (e) => {
    e.preventDefault()
    navigate('/')
  }


  return (
    <div className="characters-main-div">
      <div className="left-side">
        <div className="back-section">
          <span className="main-text" onClick={onBackClick}>
            BACK
          </span>
        </div>
        <div className="crew-list-section">
          <div className="main-heading">THE CREW</div>
          <CrewList callBack={setCurrentChosenCharacter}/>
        </div>
      </div>
      <div className="right-side">
        <img src={logo} className="main-logo" />
        {currentChosenCharacter ? <CharacterInfo
        character={currentChosenCharacter}
        />:
        <h1 className="select-heading">CHOOSE CHARACTER</h1>
        }
      </div>
    </div>
  )
}

export default Characters
