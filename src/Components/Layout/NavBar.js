import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class NavBar extends Component {
    render() {
        return (
            <div className="NavBarWraper">
                <ul>
                    <li>
                        <Link to="/PageHome">Home </Link>
                    </li>
                    <li>
                        <Link to="/PageProjects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/PageBlog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/PageContact">Contact</Link>
                    </li>
 
                    </ul>
            </div>
        );
    }
}


export default NavBar;