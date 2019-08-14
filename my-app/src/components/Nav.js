import React from 'react'
import { NavLink } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';

const Navi = (props) => {
    return (
        
        <BrowserRouter>
        <h1>{props.title}</h1>
            <ul className="main-nav li">
                <nav>
                    <ul>
                        <li><NavLink to="/wedding">Wedding</NavLink></li>
                        <li><NavLink to="/lions" >Lions</NavLink></li>
                        <li><NavLink to= "/flowers">Flowers</NavLink></li>
                    </ul>
                </nav>
            </ul>
            </BrowserRouter>     
            )
        }
        
        export default Navi
        //readme to say need to create a api key and put in a config.js file
        //then npm install
        //npm start
        
