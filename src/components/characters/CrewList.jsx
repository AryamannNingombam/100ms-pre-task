import React, { useEffect } from 'react'
import { useState } from 'react'
import { getAllCharacters } from '../../services/api.service'
import { Loader } from '../Loader'
import { CharacterCard } from './CharacterCard'
import './CrewList.scss'
import { useMediaQuery } from 'react-responsive'
import { useNavigate } from 'react-router'
import { FormControl } from 'react-bootstrap'

export const CrewList = ({ callBack }) => {
  const [allCharacters, setAllCharacters] = useState([])
  const [loaded, setLoaded] = useState(false)
  const screenSizeDecreased = useMediaQuery({ query: `(max-width: 1100px)` })
  const [filteredCharacters, setFilteredCharacters] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getAllCharacters()
      .then((response) => response.data)
      .then((data) => {
        console.log(data)
        setLoaded(true)
        setAllCharacters(data)
        setFilteredCharacters(data)
      })
  }, [])
  const onFilterChange = (e)=>{
    const value = e.target.value.toLowerCase();
    console.log(value)
    const filtered = allCharacters.filter(char=>{
      return char.name.toLowerCase().includes(value);
    })
    setFilteredCharacters(filtered);
  }

  let callCallback = (id) => {
    if (screenSizeDecreased) {
      navigate(`/info/${allCharacters[id].char_id}`)
    } else {
      callBack(allCharacters[id])
    }
  }

  return (loaded ? (
    <>
    <FormControl className="search-form-control" placeholder="search" onChange={onFilterChange}/>
    <div className="crew-list-main-div">
      {filteredCharacters.map((character, index) => (
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
    </>
  ) : (
    <Loader />
  ))
}
