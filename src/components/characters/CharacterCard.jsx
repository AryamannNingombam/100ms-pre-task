import React from 'react'
import './CharacterCard.scss'
export const CharacterCard = ({callback, id, name, image, dob, nickname, status }) => {
  return (
    <div className="character-card-main-div" onClick={e=>{
      callback(id);
    }}>
      <div className="left-side">
        <img src={image} className="main-image" />
      </div>
      <div className="right-side">
        <div className="main-text"><span className="color-this"> Name : </span>{name}</div>
        <div className="main-text"><span className="color-this">Nickname : </span>{nickname}</div>
        <div className="main-text"><span className="color-this">DOB : </span>{dob}</div>
        
        <div className="main-text"><span className="color-this">Status : </span>{status}</div>
      </div>
    </div>
  )
}
