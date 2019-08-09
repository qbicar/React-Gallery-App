import React from 'react'


const Header = () => (
    <header className="App-header">
        <h1>React Gallery App</h1>
        <span className="main-nav ul"></span>
        <ul className="main-nav li">
            <button className="wed-button" onClick >Wedding</button>
            <button className="wed-button">Lions</button>
            <button className="wed-button">Waterfalls</button>
            {/* <li><NavLink exact to="">Waterfalls</NavLink></li>
            <li><NavLink exact to="">Rainbows</NavLink></li> */}
        </ul>
    </header>

)

export default Header