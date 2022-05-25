// import { makeStyles} from "@mui/core/material";
import { makeStyles } from '@mui/styles';
import { Drawer, Toolbar, Typography } from '@mui/material';
import React from "react";
import Colors from './colors';
import { AppBar } from '@mui/material';

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

function Layout({children}){
    
    const classes=useStyles();
    return(
        <div className={classes.root}>
            {/* <AppBar
            className={classes.appbar} style={{width: `calc(100% - ${drawerWidth}px)` ,
            background : '#FFFFFF'}} elevation={0}>
            <Toolbar>
                <Typography>Welcome here I am Aditya SIngh</Typography>
            </Toolbar>
            </AppBar> */}
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
            {children}
            </div>
        </div>
    );
    
}

export default Layout;