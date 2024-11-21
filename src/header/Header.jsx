import React from 'react'
import './Header.css'
import logo from '../assets/img/logo.png'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LanguageIcon from '@mui/icons-material/Language';
import BasicMenu from './Profile';
import LabelBottomNavigation from './Bottom';
const Header = () => {
  return (
    <div>
      <div className='navbar'>
      <img src={logo} alt="" className='navbar-logo' />
      <div className="search-bar">
       
       <div  className='search-bar-text' >Any where</div>
        <div  className='search-bar-text'>Any Week</div>
        <div  className='search-bar-text2'>Any Guests</div>
        <div className="search-icon-div"> 
          
                 <SearchRoundedIcon className='search-icon'/>
        </div>
      </div>
      <div className="profile-container">

        <div className='Airbnb-your-home'>Airbnb your home</div>
        <div className='gobal-div'><LanguageIcon/></div>
        <div>
          <BasicMenu/>
        </div>
      
      </div>
         

    </div>
   
    <div>


      <LabelBottomNavigation/>
      </div>
    </div>
    
  )
}

export default Header