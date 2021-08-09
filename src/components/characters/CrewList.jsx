import React, { useEffect } from 'react'
import { useState } from 'react'
import { getAllCharacters } from '../../services/api.service'
import { Loader } from '../Loader'
import { CharacterCard } from './CharacterCard'
import './CrewList.scss'

export const CrewList = ({callBack}) => {
  const [allCharacters, setAllCharacters] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    getAllCharacters()
      .then((response) => response.data)
      .then((data) => {
        console.log(data)
        setLoaded(true);
        setAllCharacters(data);
      })
  }, [])

  const callCallback = (id)=>{
    callBack(allCharacters[id]);
  }

  return loaded ? (
    <div className="crew-list-main-div">
      {allCharacters.map((character,index) => (
        <CharacterCard
          callback={callCallback}
          id={index}
          name={character.name}
          dob={character.birthday}
          image={character.img}
          status={character.status}
          nickname={character.nickname}
        />
      ))}
    </div>
  ) : (
    <Loader />
  )
}
