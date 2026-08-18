import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Layout from './Pages/Layout';
import Homepage from './Pages/Homepage/Homepage';

function App(){
    return(
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
