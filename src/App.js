import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'

import './App.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      people: []
    }
  }

  componentDidMount() {

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(resp => resp.json())
        .then(rez => this.setState({people: rez}))
  }

  render () {
    return (
        // <ul>{ this.state.people.map( (item, key) => <li key={ key }>{ item.name }</li>)}</ul>


        // <div className="App">
        //   <CardList><CardList/>
        // </div>

        <div className="App">
          <CardList></CardList>
        </div>
    )
  }
}
