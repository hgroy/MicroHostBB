import React from 'react'
import { Link } from 'react-router-dom'
// import Chats from 'chatapp/Chat'
// import Email from 'emailapp/Email'
const Header = () => {
  return (
    <>
      {/* <Chats />
      <Email /> */}
      <div className='navbar'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/chat'>Chats</Link></li>
          <li><Link to='/email'>Email</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Header