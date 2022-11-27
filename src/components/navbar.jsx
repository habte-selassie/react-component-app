import React from 'react';

const Navbar = props=>{
    console.log('Navbar-Render');

    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="l">
               Navbar <span className="badge bg-pill bg-secondary">
                {props.totalCounters}
            </span>
         </a>
        </nav>
    );
}

export default Navbar;