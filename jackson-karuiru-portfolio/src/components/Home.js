import React from 'react'
// import NavBar from './NavBar';
import ContactPage from './ContactPage';
import About from './About';
import Stacks from './Stacks';
import Projects from './Projects';

function Home() {
  return (
    <div className='bg-slate-500 h-full'>
      {/* <NavBar /> */}
      <About />
      <Stacks />
      <Projects />
      <ContactPage />
    </div>
  )
}

export default Home;