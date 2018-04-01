import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText
} from 'reactstrap'
import './App.css';

function upper(str) {
  return str.split(' ')
    .map((word, i) => {
      return typeof word.charAt(0) === 'number'
	? word
	: word.charAt(0).toUpperCase() + word.slice(1)
    }).join(' ')
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
    console.log(upper('1000 sandwiches'))
  }
  componentDidMount() {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch('https://swapi.co/api/people')
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  }
  render() {
    return (
      <div className="App container">
        <h1 className="Header">React Wars</h1>
	{this.state.starwarsChars.map((char, i) => {
	  return (
	    <div className="char-wrapper" key={i}>
	      <Card>
		<CardBody>
		  <CardTitle>{char.name}</CardTitle>
		  <CardSubtitle>
		  </CardSubtitle>
		  <CardText>
		    <span className="char-prop">Gender</span>: {upper(char.gender)}<br/>
		    <span className="char-prop">Hair Color</span>: {upper(char.hair_color)} <br/>
		    <span className="char-prop">Height</span>: {upper(char.height)} inches <br/>
		    <span className="char-prop">Weight</span>: {upper(char.mass)} <br/>
		    <span className="char-prop">Skin color</span>: {upper(char.skin_color)} <br/>
		    <span className="char-prop">Eye color</span>: {upper(char.eye_color)} <br/>
		  </CardText>
		</CardBody>
	      </Card>
	    </div>
	  )
	})}
      </div>
    );
  }
}

export default App;
