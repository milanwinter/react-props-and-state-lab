import React from 'react'

class Pet extends React.Component {


  handleClick = (event) => {
    this.props.onAdoptPet(this.props.pet.id)
  }


  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.gender === "male"?  '♂' : '♀'}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          <button className={this.props.pet.isAdopted? "ui primary button" : "ui disalbed button"}> Already adopted </button>
          <button className={this.props.pet.isAdopted? "ui disalbed button" : "ui primary button"} onClick={this.handleClick}> Adopt pet </button>
        </div>
      </div>
    )
  }
}

export default Pet
