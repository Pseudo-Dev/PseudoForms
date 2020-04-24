import React, { Component } from 'react';
import MyForms from './components/webScripts/MyForms';
import EditForm from './components/webScripts/EditForm';
import CreateForm from './components/webScripts/CreateForm';
import FormFiller from './components/webScripts/FormFiller';
import HomePage from './components/webScripts/homePage';
import ViewResponse from './components/webScripts/ViewResponse';
import logoutUser from './components/webScripts/logoutUser';
import PublicForms from './components/webScripts/PublicForms';
import ViewPublic from './components/webScripts/ViewPublic';

import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
    	<BrowserRouter>
	      	<Switch>
	      		<Route exact path='/pseudoforms' component={HomePage}/>
	      		<Route exact path='/pseudoforms/myforms' component={MyForms}/>
	      		<Route exact path='/pseudoforms/create' component={CreateForm}/>
	      		<Route exact path='/pseudoforms/myforms/:slug' component={EditForm}/>
	      		<Route exact path='/pseudoforms/fill/:slug' component={FormFiller}/>
	      		<Route exact path='/pseudoforms/viewresponse/:slug' component={ViewResponse}/>
	      		<Route exact path='/pseudoforms/publicforms' component={PublicForms}/>
	      		<Route exact path='/pseudoforms/publicforms/:slug' component={ViewPublic}/>
	      		<Route exact path='/logoutUser' component={logoutUser}/>
	      	</Switch>
      	</BrowserRouter>
    );
  }
}

export default App;
