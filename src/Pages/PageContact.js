import React, { Component } from 'react';
import Header from './../Components/Layout/Header';
import NavBar from './../Components/Layout/NavBar';
import Footer from './../Components/Layout/Footer';
import TemplateContact from './../Templates/TemplateContact';

class PageContact extends Component {
    render() {
        return (
            <div>
                <Header/>
                <NavBar/>
                <TemplateContact/>
                <Footer/>
            </div>
        );
    }
}

export default PageContact;