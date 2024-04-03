import React from 'react';
import './Home.css';
import Image from '../../components/Image/Image';
import About from '../../components/About/About';
import Examples from '../../components/Examples/Examples';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';

function Home() {
    return (
        <div className='home'>
            <Image/>
            <About/>
            <Examples/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default Home;