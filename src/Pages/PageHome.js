import React, { Component } from 'react';
import Header from './../Components/Layout/Header';
import NavBar from './../Components/Layout/NavBar';
import Footer from './../Components/Layout/Footer';
import TemplateHome from './../Templates/TemplateHome';

class PageHome extends Component {
    render() {
        return (
            <div>
                <Header/>
                <NavBar/>
                <TemplateHome/>
                <Footer/>
               
            </div>
        );
    }
}

export default PageHome;