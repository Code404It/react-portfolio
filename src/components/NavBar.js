import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    const {click, setClick} = useState(false);
    
    const handleClick = () => setClick(!click);

  return (
   <>
     <nav className="navbar">
       <div className="navbar-container">
        <Link to="/" className="navbar-logo">
         Code404It <i className="fas fa-coins"></i>
        </Link>
        <div className='menu-icon' onClick={ handleClick }>
          <i className={ click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={ click ? 'nav-menu active' : 'nav-menu'}>
        
        </ul>
      </div>
     </nav>
   </>
  );
}

export default NavBar;
