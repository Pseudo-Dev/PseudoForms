import React, { Component } from 'react';
import 'whatwg-fetch';
import cookie from 'react-cookies';
import { Link } from 'react-router-dom';
import '../styleSheets/HomePage.css';
import opensourceimage from '../media/open-source.png'
import shield from '../media/shield.png'
import merger from '../media/merger.png'

const sessionCookie = cookie.load('csrftoken');


class HomePage extends Component {

  state = {
    currentUser: ""
  }


componentDidMount(){
  const script = document.createElement("script");
  script.src = "https://kit.fontawesome.com/0467bd4fc9.js";
  script.async = true;
  document.body.appendChild(script);
  const endpoint = '/current_user/';
    let thisComp = this;
    let lookupOptions = {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch ( endpoint, lookupOptions )
    .then(function(response){
      return response.json()
    }).then(function(responseData){
      thisComp.setState({
        currentUser: responseData
      })
    }).catch(function(error){
      console.log("error", error)
    })
}
  render() {
    return (
      <React.Fragment>
         <div className="navBar">
            <Link to={sessionCookie !== undefined ? "/logoutUser" : "#"}>
              <button className = "menuButton">
                <i class="fas fa-user fa-3x"><label className = "navLabels">{this.state.currentUser.username}</label></i>
              </button>
            </Link>
            <br/><br/>
            <Link to={sessionCookie !== undefined ? "/pseudoforms" : "#"}>
              <button className = "menuButton">
                <i class="fas fa-home fa-2x"><label className = "navLabels">Home</label></i>
              </button>
            </Link>
            <br/><br/>
            <Link to={sessionCookie !== undefined ? "/pseudoforms/create" : "#"}>
              <button className = "menuButton">
                <i class="fas fa-plus-circle fa-2x"><label className = "navLabels">Create</label></i>
              </button>
            </Link>
            <br/><br/>
            <Link to={sessionCookie !== undefined ? "/pseudoforms/myforms" : "#"}>
              <button className = "menuButton">
                <i class="fas fa-clipboard-list fa-3x"><label className = "navLabels">Forms</label></i>
              </button>
            </Link>
            <br/><br/>
            <Link to={sessionCookie !== undefined ? "/pseudoforms/publicforms" : "#"}>
              <button className = "menuButton">
                <i class="fas fa-users fa-2x"><label className = "navLabels">Forms</label></i>
              </button>
            </Link>
         </div>
         <div className = "banner">
           <font color="white">
             <center>
             <h1>PseudoForms</h1>
             <h5>Create amazing survey forms, efforlessly.</h5>
             </center>
           </font>

         </div>
         <div id="homePageContent">
           <h1>Welcome to PseudoForms!</h1>
           <br/><br/>
           <h5>
             PseudoForms is an efficient platform to create, deploy and manage forms for collecting data with full control to you.
             <br/>
             The primary focus for our platform was the rising concern for privacy and lack of flexibility with the current systems.
             <br/><br/>
             We give you many reasons to switch to our platform.
             
             <div className="feature">
                 <figure>
                   <img className = "featureImage" src={opensourceimage}/>
                   <figcaption>We are Open Source!</figcaption>
                 </figure>
                 <div className="featureContent">
                   This means anyone can view and download our source codes and practically, create their own baked version of their data collecting platform!
                   <br/>
                   This inturn gives a very high flexibility since you can add or remove features as you want.
                 </div>
             </div>
             <div className="feature">
                 <figure className="reversed">
                   <img className = "featureImage" src={shield}/>
                   <figcaption>High Privacy</figcaption>
                 </figure>
                 <div className="featureContent">
                   The current scenario seems to be dominated by google forms. Just as what happened with faceboot, could also happen with google as well! Nothing is impenetrable.
                   <br/>
                   This Project is run on a server that is provided by you. Thus, all collected data remain with only you.
                 </div>
             </div>
             <div className="feature">
                 <figure>
                   <img className = "featureImage" src={merger}/>
                   <figcaption>Merge Responses</figcaption>
                 </figure>
                 <div className="featureContent">
                   Merge responses! This is a very, very handy feature and available only on our platform. Let us explain why it will be useful.
                   <br/>
                   Let's assume a person filled up his/her information in various forms. Now to see his/her responses, we have to go through individual
                   <br/>
                   responses. In our latform, we provide a solution to merge responses which allows you to see multiple response datas in one form. Pretty handy.
                 </div>
             </div>
             <center>
               <h5>Satified enough? Get started with the demo right away!</h5>
               <Link to={sessionCookie !== undefined ? "/pseudoforms/Create" : "#"}>
                 <button id="getStarted">Get Started</button>
               </Link>
             </center>
           </h5>
         </div>
      </React.Fragment>
    );
  }
}

export default HomePage;