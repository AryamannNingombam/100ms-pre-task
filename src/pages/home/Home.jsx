import React from 'react'
import { useNavigate } from 'react-router'
import './Home.scss'

const Home = () => {
    const navigate = useNavigate();
    const onImageClick = (e)=>{
        e.preventDefault();
        navigate('/characters');
    }

  return (<div className="home-main-div" onClick={onImageClick}>

  </div>)
}

export default Home
