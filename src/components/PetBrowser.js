import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  onAdoptPet = (id) => {
    this.props.onAdoptPet(id)
  }


  render() {
    return <div className="ui cards">{this.props.pets.map(pet => <Pet pet={pet} onAdoptPet={this.onAdoptPet}/>)}</div>
  }
}

export default PetBrowser
