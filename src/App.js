import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {

  state = {
    persons:[

      { id: 'asdf', name: "Mike", age:30 },
      { id: 'aqweds', name: "John", age: 35 },
      { id: 'qwerty', name: "Maria", age: 22 }
    ],
    
    showPersons: false

  }

  // switchNameHandler = (newName) => {

  //   // console.log('This is a switch!')

  //   this.setState( {

  //     persons: [

  //       { name: newName, age: 18 },
  //       { name: "John", age: 35 },
  //       { name: "Maria", age: 50 }
  //     ]

  //   } )
  // }


  deletePersonHandler = (personIndex) => {

      const persons = this.state.persons.slice()
      persons.splice(personIndex, 1)
      this.setState({persons: persons})
  }


  // nameChangeHandler = (event) => {

  //   this.setState({
  //     persons: [

  //       { name: "Max", age: 18 },
  //       { name: event.target.value, age: 35 },
  //       { name: "Maria", age: 50 }
  //     ]

  //   })
  // }

  tooglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})

  }

  nameChange = (event, id) =>{

    const pIndex = this.state.persons.findIndex((p)=>{
        return p.id === id

    })
    const person = {...this.state.persons[pIndex]}
    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[pIndex] = person
    this.setState({ persons: persons })
    

  }
 

  render() {
      const styleBtn = {
        backgroundColor: 'green',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
      
      }

      let persons = null

      if( this.state.showPersons ) {
        persons = (
          <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={this.deletePersonHandler.bind(this, index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChange(event, person.id)} 
              />
            
          })}
            
          </div>
          )

          styleBtn.backgroundColor = 'red'
      
        }

      let classes = []
      if(this.state.persons.length <= 2){
        classes.push('red')
      }
      if(this.state.persons.length <= 1){
        classes.push('bold')
      }
      

    return (
      
        <div className="App">
          <h1>Hi I'm react app</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button 
            style={styleBtn}
            onClick={this.tooglePersonsHandler}>Toogle Persons</button>
        {persons}
      
        </div>
      
    )
  }
}

export default  App ;


// <Person
//   name={this.state.persons[0].name}
//   age={this.state.persons[0].age} />
//   <Person
//     name={this.state.persons[1].name}
//     age={this.state.persons[1].age}
//     click={this.switchNameHandler.bind(this, 'Moses!')}
//     changed={this.nameChangeHandler}>
//     Hobbies: Racing </Person>
//   <Person
//     name={this.state.persons[2].name}
//     age={this.state.persons[2].age} />