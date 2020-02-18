import React from 'react';
import './AddPerson.css'

const AddPerson = (props) => {
    return (
        <div className="AddPerson">
            <button onClick={props.clicked} className="Button">add Person</button>
        </div>
    );
};

export default AddPerson;