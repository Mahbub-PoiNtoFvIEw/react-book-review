import React from 'react';
import Banner from '../Banner/Banner';
import Books from '../Books/Books';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Am@r bOok | Home</title>
            </Helmet>
            <Banner></Banner>
            <Books></Books>
        </div>
    );
};

export default Home;