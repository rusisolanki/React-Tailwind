import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Analytics from './components/Analytics';
import News from './components/News';
import Cards from './components/Cards';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Navbar/>
      <Main/>
      <Analytics/>
      <News/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
