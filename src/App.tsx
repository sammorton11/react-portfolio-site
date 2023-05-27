import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navigation from './Navigation';
import About from './About';
import Contact from './Contact';

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <Navigation/>
            </div>
            <Routes>
                <Route path="/about" element={<About />} />
                {/*<Route path="/projects" Component={Projects} />*/}
                <Route path="/contact" Component={Contact} />
            </Routes>
        </Router>
    );
};

export default App;
