import React from 'react'
import { Link } from 'react-router-dom'

function Navigation(){
    return (
        <nav className="App-nav">
            <Link to="/"> Home </Link>
            <Link to='/add-exercise'> Add Exercise </Link>
            <Link to='/edit-exercise'> Edit Exercise </Link>
        </nav>
    );
}

export default Navigation