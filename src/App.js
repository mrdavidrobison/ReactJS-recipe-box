import React, { Component } from 'react';
import Accordion from 'react-bootstrap/lib/Accordion';
import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Modal from 'react-bootstrap/lib/Modal';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import './App.css';

class App extends Component {

state = {
  recipes: [
    {recipeName: 'Cake', ingredients: ['eggs', 'wheat', 'sugar']}
  ]
}

  render() {
    const {recipes} = this.state;
    return (
      <div className="App">
        <Accordion>
          {recipes.map((recipe, index)=>(
            <Panel header={recipe.recipeName} eventKey = {index} key = {index}>
              <h1>Test</h1>
            </Panel>
          ))}
        </Accordion>
      </div>
    );
  }
}

export default App;
