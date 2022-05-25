import { Switch } from '@mui/material';
import './App.css';
import Layout from "./Components/Layout";
import CustomizedSwitches from './Components/Myswitch';

function App() {
  return (
    <div>
      <Layout>
        <div style={{
       padding: "5em 5em",
       overflowX: "auto",
       width: "100%",
     }}>
      <div>
      <div className='intro'><div className='intro-text'><h1>Aditya Singh</h1></div><CustomizedSwitches/></div>
      <div style={{
       
       paddingRight: "25em",
       overflowX: "auto",
       width: "100%",
     }}>
     <div className='intro'><div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '70vh'}}><div><h1>I'm a Software developer who builds immersive and user-friendly applications.</h1>
     <div style={{
       
       paddingRight: "20em",
       paddingTop: "1.5em",
       overflowX: "auto",
       width: "100%",
     }}>
    <p style={{fontSize: '25px'}}>Find me on <a href="https://twitter.com/c9addy" target="_blank">Twitter</a> / <a href="https://github.com/c9addy" target="_blank">GitHub</a> / <a href="https://www.linkedin.com/in/c9addy/" target="_blank">LinkedIn</a> , or just <a href="mailto:singh.aditya44@gmail.com">send me an email</a> saying hi.</p>
  </div>
  </div></div><div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '70vh'}}><img src={require('./Images/imgs.png')} /></div></div>
     </div>
     </div>
      </div>
      </Layout>
    </div>

  );
}

export default App;
