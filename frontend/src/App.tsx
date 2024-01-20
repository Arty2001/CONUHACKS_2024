import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import StoryLine from './pages/StoryLine';
import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import './App.css'

const theme = createTheme({
  /** Your theme override here */
});


function App() {
  return (
    <MantineProvider theme={theme}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/storyline" element={<StoryLine />} />
      </Routes>
    </Router>
    </MantineProvider>
  );
}

export default App;
