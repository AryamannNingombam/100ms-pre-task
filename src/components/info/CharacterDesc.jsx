import React, { useEffect, useState } from 'react'
import './CharacterDesc.scss'
import { getCharacterInfo } from '../../services/api.service'
import { Loader } from '../Loader'
export const CharacterDesc = ({ id }) => {
  const [characterInfo, setCharacterInfo] = useState(null)
  const [loaded, setLoaded] = useState(false)

  const returnOccupations = () => {
    const string = characterInfo.occupation.join(' | ')

    return string
  }
  const returnSeasons = () => {
    const string = characterInfo.appearance.join(' | ')
    return string
  }
  useEffect(() => {
    getCharacterInfo(id)
      .then((response) => response.data)
      .then((data) => {
        console.log(data[0])
        setCharacterInfo(data[0])
        setLoaded(true)
      })
      .catch((err) => {
        console.log('EROR')
      })
  }, [])
  return loaded ? (
    <div className="character-desc-main-div">
      <div className="first-section">
        <div className="main-image-section">
          <img src={characterInfo.img} className="main-image" />
          <div className="portrayed-section">
            <span className="color-this">Portrayed By : </span>
            {characterInfo.portrayed}
          </div>
        </div>
      </div>
      <div className="second-section">
        <span className="main-text">
          <span className="color-this">Name : </span>
          {characterInfo.name}
        </span>
        <span className="main-text">
          <span className="color-this">Nickname : </span>
          {characterInfo.nickname}
        </span>
        <span className="main-text">
          <span className="color-this">Birth Date : </span>
          {characterInfo.birthday}
        </span>
        <span className="main-text">
          <span className="color-this">Status : </span>
          {characterInfo.status}
        </span>
        <span className="main-text">
          <span className="color-this">Occupation : </span>
          {returnOccupations()}
        </span>
        <span className="main-text">
          <span className="color-this">Seasons : </span>
          {returnSeasons()}
        </span>
      </div>
    </div>
  ) : (
    <Loader />
  )
}
