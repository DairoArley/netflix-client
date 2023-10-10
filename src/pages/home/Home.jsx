import Featured from '../../components/featured/Featured'
import Navbar from '../../components/navbar/Navbar'
import List from '../../components/list/List'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './home.scss'


const Home = ({type}) => {
  //const [lists, setLists] =  useState([])
  //const [genre, setGenre] = useState(null)
  
  return (
    <div className='home'>        
        <Navbar/>        
        <Featured type={type}/>
        <List/>
        <List/>
        <List/>       
    </div>
  )
}

export default Home