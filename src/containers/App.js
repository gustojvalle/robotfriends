import { render } from '@testing-library/react';
import React, {Component}from 'react'; 
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
import './App.css';
import Scroll from '../components/Scroll'

class App extends Component{
    constructor(){
        super();
        this.state={
            robots : [],
            searchfield: ''
        }
    }

    componentDidMount(){
        return fetch("http://jsonplaceholder.typicode.com/users").then(response =>response.json()).then(users => this.setState({robots:users}));

    }
    
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        console.log(event); 
        }
    

    render(){

        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())})
            return !robots.length ? 
            <h1 className ="tc f0 shadow-5  "> Loading </h1>:
        
            (
            <div>
                <h1 className = "tc light-green f2">RoboFriends</h1>
                    
                        <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll >
                    <CardList className="tc" robots= {filteredRobots} />
                    </Scroll>
            </div>
        );
        
    }
}
export default App;