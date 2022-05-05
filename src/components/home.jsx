import React from 'react';

import Navbar from './navbar';

import Intro from './intro';

import Features from './features';

import Footer from './footer';


const Home = () => {
    return(
        <div>
            <Navbar />
            <Intro />
            <Features />
            <Footer />
        </div>
    )
}
export default Home;