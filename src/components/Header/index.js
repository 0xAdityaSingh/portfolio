import React from 'react'
import './Header.css'
import CustomizedSwitches from './Switch'

function Header() {
  const [isdark, setisDark] = React.useState(false);
  return (
    <div className='header'>
      <div className='logo'>
        Aditya Singh
      </div>
      <div className='menu'>
        <CustomizedSwitches isdark={isdark} setisDark={setisDark}/>
        <div>{isdark && <h1>Hello</h1>}</div>
      </div>
      
    </div>
  )
}

export default Header