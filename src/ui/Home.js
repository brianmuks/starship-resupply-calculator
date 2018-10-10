
import React, { Component } from 'react';
import '../css/App.css';
import {initInput} from '../util/InitForm'

class App extends Component {

  componentDidMount(){
    initInput();
  }



    render() {
    return (
      <div className="container">
     <ul className="collection with-header">
        <li className="collection-header"><h4>First Names</h4></li>
        <li>
        <div className="row">
    <div className="input-field col s6">
      <input defaultValue="Alvin" id="first_name2" type="text" className="validate" />
      <label className="active" htmlFor="first_name2" >First Name</label>
    </div>
  </div>

        </li>
        <li className="collection-item"><div>Alvin<a href="#!" className="secondary-content"><i className="material-icons">send</i></a></div></li>
        <li className="collection-item"><div>Alvin<a href="#!" className="secondary-content"><i className="material-icons">send</i></a></div></li>
        <li className="collection-item"><div>Alvin<a href="#!" className="secondary-content"><i className="material-icons">send</i></a></div></li>
        <li className="collection-item"><div>Alvin<a href="#!" className="secondary-content"><i className="material-icons">send</i></a></div></li>
      </ul>
      </div>
    );
  }
}

export default App;
