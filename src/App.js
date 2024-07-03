import * as React from 'react'
import './app.css'
import { useState } from "react";
import Sidebar from './components/Sidebar.jsx';
import { ThemeProvider} from "@mui/material/styles";
import Grid from '@mui/material/Grid';
import { Outlet } from 'react-router';
import theme from "./theme/theme";

function App() {

  const [chat,setChat] = useState([]);
  const [menuOpen,setMenuOpen] = useState(false);

  
  return (
    
      <ThemeProvider theme={theme}>
        <Grid container sx={{background:'liner-gradient(rgba(215,199,244,0.2),rgba(151,133,186,0.2)'}}>
         <Grid
          item xs={12}
          md={2.5}
          sx={{
            bgcolor:'primary.light',
            '@media(max-width:800px)':{
              width:'70%',
              transform: menuOpen?'translateX(0)':'translateX(-100%)',
              transition:'transform 400ms ease',
            },
          }}
          position={{xs:'fixed',md:'relative'}}
          height={'100vh'}
          zIndex={{xs:9999,md:1}}
          boxShadow={{xs:menuOpen?10:0,md:0}}
          >
            <Sidebar setChat={setChat} closeMenu={()=>setMenuOpen(false)}/>
         </Grid>
         <Grid item xs={12} md={9.5}>
           <Outlet context={{chat:chat ,setChat:setChat ,handleMobileMenu:setMenuOpen}}/>
         </Grid>
        </Grid>
      </ThemeProvider>
  );
}

export default App;
