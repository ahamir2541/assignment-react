import React, { Component } from 'react';
import AddPerson from '../components/AddPerson/AddPerson'
import Person from '../components/Person/Person'

class Persons extends Component {
    state = {
        persons : []
    }
    addPersonHandler = () => {
        const newPerson = {
            id : Math.random(),
            name : 'max',
            age : Math.floor( Math.random() * 40)
        }
        this.setState(preveState => {
            return {
                persons : preveState.persons.concat(newPerson)
            }
        } )
    }
    deletPersonHandler = (personId) => {
        this.setState(preveState => {
            return{
                persons : preveState.persons.filter(person => person.id !== personId)
            }
        })
    }
    render() {
        return (
            <div>
               <AddPerson clicked={this.addPersonHandler} />
                {this.state.persons.map(person => (
                    <Person
                    key={person.id}
                    name={person.name}
                    age={person.age}
                    clicked={() => this.deletPersonHandler(person.id) }
                    />
                ))}
               
            </div>
        );
    }
}

export default Persons;