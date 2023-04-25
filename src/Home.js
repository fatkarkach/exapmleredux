import { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
class Home extends Component{
    constructor(props){
        super(props)

    }
    render(){
        return (
            <div className="App">
          Home page :{this.props.x}

          <button onClick={this.props.inc}>+</button>
        <button onClick={this.props.dec}>-</button>
     
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

export default connect(mapStateToProps,mapDispatchProps) (Home);
