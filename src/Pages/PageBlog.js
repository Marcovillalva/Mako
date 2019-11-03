import React, { Component } from 'react';
import Header from './../Components/Layout/Header';
import NavBar from './../Components/Layout/NavBar';
import Footer from './../Components/Layout/Footer';
import TemplateBlog from './../Templates/TemplateBlog';

class PageBlog extends Component {
    render() {
        return (
            <div>
                <Header/>
                <NavBar/>
                <TemplateBlog/>
                <Footer/>
            </div>
        );
    }
}

export default PageBlog;