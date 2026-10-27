import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Layout from './Pages/Layout';
import Homepage from './Pages/Homepage/Homepage';
import Contact from './Pages/Contact/Contact';

function App(){
    return(
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Homepage />} />

                    <Route path="/contacto/" element={<Contact />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
