import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>I am {props.name}, and {Math.floor(Math.random() * 25)} or {props.age} years old.</p>
            {10+3}
        </div>
    ) 
};

export default person;