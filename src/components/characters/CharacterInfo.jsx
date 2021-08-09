import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import './CharacterInfo.scss'
export const CharacterInfo = ({ character }) => {
  const navigate = useNavigate()

  const returnOccupations = () => {
    const string = character.occupation.join(' | ')

    return string
  }
  const returnSeasons = () => {
    const string = character.appearance.join(' | ')
    return string
  }
  const onButtonClick = (e) => {
    e.preventDefault()
    navigate(`/info/${character.char_id}`)
  }
  return (
    <div className="character-info-main-div">
      <div className="first-section">
        <div className="main-image-section">
          <img src={character.img} className="main-image" />
        </div>
        <div className="main-content-section">
          <span className="main-content">
            <span className="color-this">Name : </span>
            {character.name}
          </span>
          <span className="main-content">
            <span className="color-this">Portrayed : </span>
            {character.portrayed}
          </span>
          <span className="main-content">
            <span className="color-this">DOB : </span>
            {character.birthday}
          </span>
          <span className="main-content">
            <span className="color-this">Status : </span>
            {character.status}
          </span>
        </div>
      </div>
      <div className="second-section">
        <span className="main-content">
          <span className="color-this">Occupation : </span>
          {returnOccupations()}
        </span>
        <span className="main-content">
          <span className="color-this">Seasons : </span>
          {returnSeasons()}
        </span>
        <span className="main-content">
          <span className="color-this">Category : </span>
          {character.category}
        </span>
      </div>
      <div className="button-section">
        <Button className="main-button" onClick={onButtonClick}>More</Button>
      </div>
    </div>
  )
}
