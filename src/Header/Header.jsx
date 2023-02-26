import React from 'react'
import "./Header.css";

const Header = (props) => {
  return (
	 <header className='Header'>Здесь вы можете записаться на стирку
	 <span className='username'>{props.tg.initDataUnsafe?.user?.username}</span>
	 </header>
  )
}

export default Header;