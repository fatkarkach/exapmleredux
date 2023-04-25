import { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Home from './Home';
class  App extends Component {

  render(){

    return (
      <div className="App">
        <h1>x for App:{this.props.x}</h1>
        <button onClick={this.props.inc}>+</button>
        <button onClick={this.props.dec}>-</button>
        <Home></Home>
      </div>
    );

  }

}
function mapStateToProps(state){
  return{
    x:state.x
  }
}
function mapDispatchProps(dispatch){
  return{
    inc:()=>dispatch({type:"INCREMENT"}),
    dec:()=>dispatch({type:"DECREMENT"})
  }

}

export default connect(mapStateToProps,mapDispatchProps)(App);
