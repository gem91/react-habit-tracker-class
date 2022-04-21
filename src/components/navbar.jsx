import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
    render() {
        console.log('navbar.jsx');
        return (
            <nav className='navbar'>
               <h1 className='logo'><i className="fa-solid fa-circle-check"></i></h1>
               <span className='nav-title'>Habit Lists</span>
               <span className='nav-count'>{this.props.totalCount}</span>
            </nav>
        );
    }
}

export default Navbar;