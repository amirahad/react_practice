import React from 'react';


const userInput = (props) =>{
    const inputStyle = {
        border: '2px solid red', 
        padding: '7px'  
    };
    return <input 
    style={inputStyle}
    type="text" 
    onChange={props.changed}
    placeholder="type anything" /> 
};

export default userInput;