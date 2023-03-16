import React from 'react';
import { createRoot } from 'react-dom/client'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from './src/About';
import Home from './src/Home';
import Root from './src/Root';

const App = () => {
    return (
            <BrowserRouter>
                <Routes>
                    <Route element={<Root />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                    </Route>
                </Routes>
            </BrowserRouter>
    )
}
 
if(document.getElementById('root')){
    createRoot(document.getElementById('root')).render(<App />)
}
