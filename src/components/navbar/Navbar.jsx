import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import {Link} from "react-router-dom"
import './navbar.scss'
import { useState } from 'react'

const Navbar = () => {
  const [IsScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return ()=> window.onscroll = null
  }
  return (
    <div className={IsScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
            <div className="left">
                <Link to="/">
                  <img src= "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="netflix"/>
                </Link>
                <Link to= "/" className='link'>
                  <span>Homepage</span>
                </Link>              
                <Link to="/series" className='link'>
                  <span>Series</span>
                </Link>
                <Link to="/movies" className='link'>
                  <span>Películas</span>
                </Link>                
                
                <span>Novedades populares</span>
                <span>Mi lista</span>
                <span>Explora por idiomas</span>
            </div>
            <div className="right">
                <Search className='icon'/>
                <span>Niños</span>
                <Notifications className='icon'/>
                <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="log"/>
                <div className='profile'>
                  <ArrowDropDown className='icon'/>
                  <div className='options'>
                    <span>Settings</span>
                    <span>Logout</span>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar