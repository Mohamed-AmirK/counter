
import './App.css';
import React from 'react';
import Counter from './components/Counter'

let myName="Amir"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }
  render() {
    return (
      <>

        <Counter count={this.state.count} me={myName} increment={() => this.setState({
          count: this.state.count +1
        })}
        substract={() => this.setState({
          count: this.state.count -1
        })}
        />

      </>
    )

  }
}
  export default App;