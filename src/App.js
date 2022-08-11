import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props){
      super(props);

      this.state={
        newItem:"",
        list:[],
      }
    }

    updateInput(key, value){
      this.setState({
        [key]: value
      });
    }

    addItem(){
      const newItem={
        id: 1 + Math.random(),
        value: this.state.newItem.slice()
      };

      const list = [...this.state.list];
      list.push(newItem);
      this.setState({
        list,
        newItem:""
      });
    }

    deleteItem(id){
      const list = [...this.state.list];
      const updatedList = list.filter(item => item.id !== id);
      this.setState({list: updatedList});
    }

    render() {
      return (
        <div className="App">
          <h1 className="top">TODO LIST</h1>
          <div>
            <input
              type="text"
              placeholder="Type task here..."
              value={this.state.newItem}
              onChange={e => this.updateInput("newItem", e.target.value)}/>
            <button onClick={() => this.addItem()}>+</button>
          </div>
          <div className="listBox">
            <ul>
              {this.state.list.map(item => {
                return(
                  <li key={item.id}>
                    <button onClick={() => this.deleteItem(item.id)}>🗑️</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.value}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="checkbox" id="completed"/><label for="completed">✔</label>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      );
    }
}

export default App;
