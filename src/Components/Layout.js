// import { makeStyles} from "@mui/core/material";
import { makeStyles } from '@mui/styles';
import { Drawer, Toolbar, Typography } from '@mui/material';
import React from "react";
import Colors from './colors';
import { AppBar } from '@mui/material';
import CustomizedSwitches from './Myswitch';

const drawerWidth=340;
const useStyles=makeStyles(theme=>{
    return {root : {
        display: 'flex',
    },
    page : {
        backgroundColor: "#FFFFFF",
        with: "100%",
        
    },
    drawer:{
        width: drawerWidth,
        
    },
    drawerPaper:{
        width: drawerWidth,
        
        justifyContent: 'end',
        alignItems: 'center',
        paddingBottom: '2em',
    },
    // appbar:{},
    // toolbar:theme.mixins.toolbar
}});

function Layout(){
    
    const classes=useStyles();
    return(
        <div className={classes.root}>
           {/* Drawer */}
            <Drawer
            className={classes.drawer}
            
            variant="permanent"
            anchor="left"
            sx={{"& .MuiDrawer-paper": { borderWidth: 0 }
              }}
            classes={{paper:classes.drawerPaper}}
            >
                <Colors/>
            </Drawer>

            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {/* Basics */}
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
                            </div>
                            </div>
                            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '70vh'}}><img src={require('./Images/imgs.png')} /></div></div>
                        </div>
                    </div>
                </div>
                
                <div style={{
                        paddingTop: "10em",
                        paddingLeft: "5em",
                        paddingRight: "5em",
                        overflowX: "auto",
                        width: "100%",
                    }}>
                    <div className='intro-text'><h1>About</h1></div>
                    <div>
                        <div style={{
                                paddingRight: "25em",
                                overflowX: "auto",
                                width: "100%",
                            }}>
                            <div className='intro'><div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}><div>
                            <div style={{
                                    // paddingRight: "20em",
                                    paddingTop: "1.5em",
                                    overflowX: "auto",
                                    width: "100%",
                                }}>
                                <p style={{fontSize: '25px'}}>I am currently a Senior year student in Computer Science and Biosciences Department at IIIT Delhi. Since very early age, I got really interested in computers and tech. I created my first website about tech reviews when I was in 9th standard. During the same time, I got into playing around Adobe Photoshop and that subsequently led me to UI/UX designing. Because of my interests, I got into Computer Science Engineering where I explored Programming, Data Science, Bioinformatics, etc. and my whole perspective about the world of computer science widened beyond what I imagined. My involvement in a bunch of fields gave me varied skillsets in Product design and Software/Web development.</p>
                                
                            </div>
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    
    );
    
}

export default Layout;