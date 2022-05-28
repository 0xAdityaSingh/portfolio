import React from 'react'
import Body from '../Body'
import Footer from '../Footer'
import Header from '../Header'
import Colors from './Colors'
import './Home.css'

function Home() {
    // const [isdark, setisDark] = React.useState(false);
  return (
    //   <div><div className='menu'><CustomizedSwitches isdark={isdark} setisDark={setisDark}/></div>
    <div>
    <div className='home'>
        <div>
            <Header/>
        </div>
        <div className='body'>
            <Body/>
        </div>
        {/* <div>
            <Footer/>
        </div> */}

    </div>
    <div className='colors' >

    <Colors/>
    </div>
    </div>
  )
}

export default Home