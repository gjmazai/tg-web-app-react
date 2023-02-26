import React from 'react'
import "./Header.css";
import { useTelegram } from '../hooks/useTelegram';

const Header = (props) => {
	const {user} = useTelegram();

  return (
	 <header className='Header'>
		<p>Здесь вы можете записаться на стирку</p> 
	 	<span className='username'>{user?.username}</span>
	 </header>
  )
}

export default Header;