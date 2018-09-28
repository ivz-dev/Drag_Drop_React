import React, { Component } from 'react';
import Item from './Item';
import Target from './Target';

import logo from './logo.svg';
import './App.css';

import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'

class App extends Component {
  state = {
    items: [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
      { id: 4, name: 'Item 4' },
    ]
  }

  deleteItem = (id) => {
    const items = this.state.items.filter(item => item.id !== id);
    this.setState({ items });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <div className="app-container">
            <div className="item-container">
              {
                this.state.items.map((item, index) => (
                  <Item key={item.id} item={item} handleDrop={(id) => this.deleteItem(id)}/>
                ))
              }
            </div>

            <Target />
            
          </div>
        </p>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
