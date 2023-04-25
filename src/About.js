import { Component } from 'react';
import './App.css';
class About extends Component{
    constructor(props){
        super(props)

    }
    render(){
        return (
            <div className="App">
          About page :x = {this.props.x}
            </div>
          );

    }

}

export default About;
