
import React, { useState, useEffect}from 'react'; 
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from "../components/ErrorBoundary"; 



function App (){

    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');
    const [count, setCount] = useState(0)


    useEffect(()=>{ 
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response =>response.json())
        .then(users =>setRobots(users)); 
        console.log(count)}, [count])
    
    
    const onSearchChange = (event) => {
       setSearchfield(event.target.value)
    }
    


        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())});

            
            return !robots.length ? <h1 className ="tc f0 shadow-5  "> Loading </h1>:(
            <div>
                <h1 className = "tc light-green f2">RoboFriends</h1>
                    <button className="tc f2" onClick={() => setCount(count+1)}>click me</button>
                        
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