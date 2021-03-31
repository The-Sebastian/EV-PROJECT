import React, {Component} from "react";
import tesla from "./tesla-review-social.jpg";
import fetch from 'isomorphic-fetch';

//Import Components
import Backend from "./connect"

class App extends Component {
    constructor(props){
        super(props);
        this.state={apiResponse: ""}
    }

    componentDidMount(){
        fetch("/practice")
        .then(res => { 
            console.log(res);
            res.json();
       })
        .then(car => {this.setState({apiResponse: car });
    console.log(car)})
    }
    render(){
        return (
        <div>
            <h1> Hello from React!</h1>
            <img src={tesla} alt=""/>
            <div> 
                {this.state.apiResponse}
            </div>
            <Backend/>
        </div>
        );
    
    }
};

export default App;