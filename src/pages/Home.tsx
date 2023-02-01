import React from 'react'
import yello from '../assets/images/yello.jpg'
import shield from '../assets/images/shield.png'
import { Box, Typography, Button, Icon } from '@mui/material'
import "@fontsource/montserrat"
import { PermScanWifiOutlined} from '@mui/icons-material'
import { Link } from 'react-router-dom'

function Home() {
  return (
    // <Box style={{backgroundImage:`url(${yello})`,
    // backgroundSize: "cover",
    // backgroundPosition:'center',
    // height: "100vh",
    // width:'100vw',
    // display:'flex',
    // flexDirection:'column',
    // alignItems:'center',}}>
    <Box style={{backgroundColor:'#fec200',
    height:'100vh',
    width:'100vw',
    display:'flex', flexDirection:'column', alignItems:'center'}}>
        <Typography color='#070d25' align='center' fontWeight={800} fontFamily='montserrat' mt={1.3} variant="h1" component="h2">Instalert!</Typography>
        <Typography color='#070d25' align='center' fontWeight={600} fontFamily='montserrat' mt={0.2} variant="h5" component="h5">Building a database of scam businesses, fake jobs, fly-by-night institutions</Typography>
        <Box mt={2} style={{backgroundImage:`url(${shield})`, backgroundSize:'cover', backgroundPosition:'center', width:'256px', height:'256px',}}></Box>
        <Link to='/report'><Button variant="contained"  sx={{fontFamily:'montserrat', mt:5, bgcolor:'#070d25'}}>get started</Button></Link>
    </Box>
  )
}

export default Home