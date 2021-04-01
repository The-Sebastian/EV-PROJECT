import React, {Component} from "react";
import axios from 'axios';

//Import Components
import Backend from "./connect"
// import { response } from "express";

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            initial: true,
            next: false,
            previous: false,
            counter: 0,
            model: null,
            brand: null,
            year: null,
            image: null,

        };
        this.nextClick = this.nextClick.bind(this);
        this.previousClick = this.previousClick.bind(this);
    }

    componentDidMount(i){
        fetch("/api/")
        .then(res => res.json())
        .then(car => this.setState({
            model: car[i].model,
            brand: car[i].brand,
            year: car[i].year,
            image: car[i].carImage,
        }))
    }    

    
    nextClick(){
        this.setState({next:true})
        if(this.state.previous){
            let newCounter = this.state.counter + 1;
            this.componentDidMount(newCounter);
            this.setState({counter:newCounter});
            
            this.setState({previous:false});
        }else{
            let newCounter = this.state.counter + 1;
            this.componentDidMount(newCounter)
            this.setState({counter:newCounter});
        }
    }

    previousClick(){
        this.setState({previous:true})
        if(this.state.next){
            let newCounter = this.state.counter - 1;
            this.componentDidMount(newCounter);
            this.setState({counter:newCounter});
            
            this.setState({next:false});
        }else{
        
            let newCounter = this.state.counter - 1;
            this.componentDidMount(newCounter)
            this.setState({counter:newCounter});
            
        }
    }

    render(){
        if(this.state.initial){
            this.componentDidMount(0);
            this.setState({initial: false})
        }
        return (
        <div>
            <div className="header">
                <h1 id="title"> ELECTRIC VEHICLES
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi-lightning-charge" viewBox="0 0 16 16">
                    <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z"/>
                    </svg>
                </h1> 
            </div>
            <h1 className="model"> 
                {this.state.model} 
            </h1>
            <div className="display">
                <button id="left" onClick={() => {this.previousClick()}}>Previous</button>
                <img src={this.state.image}  alt=""/>
                <button id="right" onClick={() => {this.nextClick()}}>Next</button>
            </div>
            <h1> 
                Brand: {this.state.brand} 
            </h1>
            <h1> 
                Year: {this.state.year} 
            </h1>
        
            <Backend/>
        </div>
        );
    
    }
};

export default App;