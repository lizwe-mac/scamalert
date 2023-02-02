import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Typography, TextField, Stack, Button, Grid, Container } from '@mui/material';
import ActionAreaCard from './components/ActionAreaCard';
import { createTheme, ThemeProvider } from '@mui/system';
import Home from './pages/Home'
import Report from './pages/Report'
import Details from './components/Details';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  
  return (
    
    <Stack sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/report' element={<Report/>}/>
          <Route path='/detail' element={<Details/>}/>

        </Routes>
      </Router>
    </Stack>
  );
}

export default App;
