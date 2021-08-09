import React, { useEffect, useState } from 'react'
import { getCharacterQuotes } from '../../services/api.service'
import './Quotes.scss'
import { Loader } from '../Loader'
export const Quotes = ({ id }) => {
  const [allQuotes, setAllQuotes] = useState([])
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    getCharacterQuotes(id)
      .then((response) => response.data)
      .then((data) => {
        console.log(data)
        setAllQuotes(data)
        setLoaded(true)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return loaded ? (
    <div className="quotes-section-main-div">
      {allQuotes.length!==0  ? allQuotes.map((quote, index) =>(
          <span className="quote-text" key={index}>
              "{quote.quote}"
          </span>
      )) : <h1 className='no-quotes-heading'>No Quotes!</h1>}
    </div>
  ) : (
    <Loader />
  )
}
