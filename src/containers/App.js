
import React, { useState, useEffect}from 'react'; 
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from "../components/ErrorBoundary"; 



function App (){
    // constructor(){
    //     super();
    //     this.state={
    //         robots : [],
    //         searchfield: ''
    //     }
    // }

    // componentDidMount(){
    //     return fetch("https://jsonplaceholder.typicode.com/users").then(response =>response.json()).then(users => this.setState({robots:users}));

    // }
    

    

    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');
    
    useEffect(()=>{ fetch("https://jsonplaceholder.typicode.com/users").then(response =>response.json()).then(users =>setRobots(users))}, [] )
    
    
    const onSearchChange = (event) => {
       setSearchfield(event.target.value)
    }
    


        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())});

            
            return !robots.length ? <h1 className ="tc f0 shadow-5  "> Loading </h1>:(
            <div>
                <h1 className = "tc light-green f2">RoboFriends</h1>

                        
                        <SearchBox searchChange={onSearchChange}/>
                    <Scroll >
                        <ErrorBoundary>
                            <CardList className="tc" robots= {filteredRobots} />
                        </ErrorBoundary>    
                   </Scroll>
            </div>
        );
        
    
}
export default App;