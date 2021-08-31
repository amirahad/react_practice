import React from 'react';

const validation =(props)=>{
    let validationMessage = '';

    // if (props.inputLength <= 5) {
    //     validationMessage = 'Text too short'
    // } 
    props.inputLength <= 5 ? validationMessage = 'Text too short' : validationMessage = 'Text long enough' 

    return(
        <div>
           <p>{validationMessage}</p>  
        </div>
    );
};

export default validation;