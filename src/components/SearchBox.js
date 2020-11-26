import React from 'react';


const SearchBox = ({searchfield, searchChange}) =>{
    return(
        <div className="tc pa2">
            <input 
            onChange = {searchChange}
            className="pa3 ba b---green bg-lightest-blue tc"
            type = "search" 
            placeholder="search robots"/>
        </div>
    );
}

export default SearchBox;