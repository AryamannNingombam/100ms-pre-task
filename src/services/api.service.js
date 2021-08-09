import axios from 'axios';
import {
    BACKEND_API
} from '../constants';



export const getAllCharacters = () => {
    return axios.get(`${BACKEND_API}/characters`);
}

export const getCharacterInfo = (id) => {
    return axios.get(`${BACKEND_API}/characters/${id}`)
}

export const getCharacterQuotes = async(id) => {
    const name = (await getCharacterInfo(id)).data[0].name;
    const nameList = name.split(' ');
    return axios.get(`${BACKEND_API}/quote?author=${nameList[0]}+${nameList[1]}`)
}