import React, { Component } from 'react';
import 'whatwg-fetch';
import cookie from 'react-cookies';
import { Link } from 'react-router-dom';
import '../styleSheets/MyForms.css';


const sessionCookie = cookie.load('csrftoken');

const titleStyle = {
    fontSize: 'xxx-large',
    position: 'relative',
    top: '5vh',
}


const divStyle = {
  position: 'relative',
  top: '20vh',
}

const navStyle = {
  position: 'fixed',
  top: '1vh'
}


class MyForms extends Component {

  state = {
    myForms: [

    ],
    currentUser: ""
  }

  loadForms = () => {
    const endpoint = '/api/';
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
        myForms: responseData
      })
    }).catch(function(error){
      console.log("error", error)
    })
  }

  componentDidMount(){
    const script = document.createElement("script");
    script.src = "https://kit.fontawesome.com/0467bd4fc9.js";
    script.async = true;
    document.body.appendChild(script);
    this.loadForms();
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
             <h1>Your Forms</h1>
             <h5>Here, you can view your created forms, modify them and view the responses recieved.</h5>
             </center>
           </font>
         </div>
      <div id="myForms">
        {
                this.state.myForms.map(
                  eachForm =>
                  <div className="eachForm">
          <h5>{eachForm.title}</h5>
            <Link to={{ pathname: `/pseudoforms/viewresponse/${eachForm.slug}`}}>
              <i className="fas fa-eye fa-3x view"></i>
            </Link>
            <Link to={{ pathname: `/pseudoforms/myforms/${eachForm.slug}`}}>
              <i className="fas fa-edit fa-3x edit"></i>
            </Link>
        </div>
                  )
        }
      </div>
      </React.Fragment>
    );
  }
}

export default MyForms;
