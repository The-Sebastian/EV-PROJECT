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
            year: null,
            image: null,
            price: null,
            maxRange: null,
            maxHorsePower: null,
            passengers: null,
            fullCharge: null,
            zeroToSix: null,
            Dimensions: null

        };
        this.nextClick = this.nextClick.bind(this);
        this.previousClick = this.previousClick.bind(this);
    }

    componentDidMount(i){
        fetch("/api/")
        .then(res => res.json())
        .then(car => this.setState({
            model: car[i].model,
            year: car[i].year,
            image: car[i].carImage,
            price: car[i].price,
            maxRange: car[i].maxRange,
            maxHorsePower: car[i].maxHorsePower,
            passengers: car[i].passengers,
            fullCharge: car[i].fullCharge,
            zeroToSix: car[i].zeroToSix,
            Dimensions: car[i].Dimensions
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
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
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
                <button id="left" onClick={() => {this.previousClick()}}>PREVIOUS</button>
                <img src={this.state.image}  alt=""/>
                <button id="right" onClick={() => {this.nextClick()}}>NEXT</button>
            </div>
            <h1 id="specs"> 
                VEHICLE SPECS 
            </h1>
            <h1 className="sp"> 
                Price/Estimated Price: {this.state.price} 
            </h1>
            <h1 className="sp"> 
                Vehicle Range: {this.state.maxRange} 
            </h1>
            <h1 className="sp"> 
               Maximum Horse Power: {this.state.maxHorsePower} 
            </h1>
            <h1 className="sp"> 
                Number of Passengers: {this.state.passengers} 
            </h1>
            <h1 className="sp"> 
                Full Charge Time: {this.state.fullCharge} 
            </h1>
            <h1 className="sp"> 
                Zero to Sixty Time: {this.state.zeroToSix} 
            </h1>
            <h1 className="sp"> 
                Dimensions: {this.state.Dimensions} 
            </h1>

        </div>
        );
    
    }
};

export default App;