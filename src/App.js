import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import PageHome from './Pages/PageHome';
import PageProjects from './Pages/PagePojects';
import PageBlog from './Pages/PageBlog';
import PageContacto from './Pages/PageContact';


function App() {
  return (
          <BrowserRouter>
                <Redirect from="/" to="/PageHome" />
                <Switch>
                  <Route exact path = "/PageHome" render = {()=><PageHome/>}/>
                  <Route exact path = "/PageProjects" render = {() => <PageProjects/>} />
                  <Route exact path = "/PageBlog" render = {() => <PageBlog/>} />
                  <Route exact path = "/PageContact" render = {() => <PageContacto/>} />
                </Switch>
          </BrowserRouter>
  );
}

export default App;
