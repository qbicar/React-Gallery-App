import React from 'react'
import { NavLink } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';

const Navi = () => (
    <BrowserRouter>
        <ul className="main-nav li">
            <nav>
                <ul>
                    <li><NavLink exact to="/search/wedding">Wedding</NavLink></li>
                    <li><NavLink exact to="/search/lions">Lions</NavLink></li>
                    <li><NavLink exact to="/search/rainbow">Rainbows</NavLink></li>
                </ul>
            </nav>
        </ul>
    </BrowserRouter>

)

export default Navi
//readme to say need to create a api key and put in a config.js file
//then npm install
//npm start

