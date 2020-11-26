import React from 'react';
import './Card.css';


const Card = ({id,name,email}) =>{
    return(
    <div id="user-card" className="bg-light-green dib br3 pa3 ma2 grow bw5 shadow-5">
        <img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
        <div>
            <h2 className="tc">{name}</h2>
            <p className="tc">{email}</p>
        </div>
    </div>
    );
}

export default Card; 