
import React, { Component } from 'react';
import '../css/App.css';
import {initInput} from '../util/InitForm'
import {getStarShips} from '../api'

class App extends Component {

    constructor(){
      super();
      this.state = {
        starShips:[],
      }
    }

  componentDidMount(){
    initInput();
    getStarShips()
          .then((response)=>{
            console.log(response.results[0].name)


            const starShips = response.results;

           this.setState({starShips})

          }).catch((e)=>{
            console.log('Error get Start ships',e)
          });

  }


    renderStarShips(){
      return this.state.starShips.map((starShip,key)=>(
        <li key={key} className="collection-item"><div><i className="left material-icons blue-grey-text">airplanemode_active</i>
          <span className='starship-name '>{starShip.name}</span>
        <a href="#!" className="secondary-content blue-grey-text darken-4">435234</a></div></li>
      ))
    }


    render() {
    return (
      <div className="container">
     <ul className="collection with-header">
        <li className="collection-header cyan center"><h4>SW Start Ships</h4></li>
        <li>
        <div className="row">
    <div className="input-field col s6">
      <input autoFocus defaultValue="Alvin" id="first_name2" type="number" className="validate" />
      <label className="active" htmlFor="first_name2" >Please Enter Distance (MGLT)</label>
    </div>
  </div>

        </li>
        <li className="collection-item"><div> Name<a  className="secondary-content"><h6 className='black-text'>Resupply Times</h6></a></div></li>


        {this.renderStarShips()}
      </ul>
      </div>
    );
  }
}

export default App;
