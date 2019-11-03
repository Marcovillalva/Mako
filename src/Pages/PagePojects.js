import React, { Component } from 'react';
import Header from './../Components/Layout/Header';
import NavBar from './../Components/Layout/NavBar';
import Footer from './../Components/Layout/Footer';
import TemplateProjects from './../Templates/TemplateProjects';

class PagePojects extends Component {
    render() {
        return (
            <div>
                <Header/>
                <NavBar/>
                <TemplateProjects/>
                <Footer/>
            </div>
        );
    }
}

export default PagePojects;