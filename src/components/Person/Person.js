import React from 'react';
import './Person.css'

const Person = (props) => {
    return (
        <div className="Person" onClick={props.clicked}>
            <p>name : {props.name} </p>
            <p>age : {props.age} </p>
        </div>
    );
};

export default Person;