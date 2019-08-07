import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
    <header>
        <span className=""></span>
        <ul className="">
            <li><NavLink exact to="/">Sunsets</NavLink></li>
            <li><NavLink exact to="">Waterfalls</NavLink></li>
            <li><NavLink exact to="">Rainbows</NavLink></li>
        </ul>
    </header>
)
export default Header