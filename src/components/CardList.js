import React from 'react';
import Card from './Card.js';


const CardList = ({robots}) => {

    if(true){
        throw new Error("Nooooooo")
    }

    const robotList = robots.map((user,i) => {return <Card id = {robots[i].id} name={robots[i].name} email= {robots[i].email}/>})
        return(
            <div className="tc">  
                {robotList}
            </div>
        );
    }


export default CardList; 