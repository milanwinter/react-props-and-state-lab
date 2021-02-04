import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  changeType = (type) => {
    this.setState({
      filters: {
        type: type
      }
    })
  }

  fetchPets = () => {
    if (this.state.filters.type === 'all') { 
      fetch("/api/pets")
        .then(resp => resp.json())
        .then(json => this.setState({
          pets: json
        }))
      
    } else {
      let type = this.state.filters.type
      fetch("/api/pets?type="+ type)
      .then(resp => resp.json())
      .then(json=> this.setState({
        pets: json
      }))
    }
  }

  adoptingPet = (id) => {
    let petIndex = this.state.pets.findIndex(pet => pet.id === id)
    let newPets = [...this.state.pets]
    
    newPets[petIndex] = {...newPets[petIndex], isAdopted: true}

    this.setState({
      pets: newPets
    })
  }

  render() {
    console.log(this.state.filters.type)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.changeType} onFindPetsClick={this.fetchPets}  />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptingPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
