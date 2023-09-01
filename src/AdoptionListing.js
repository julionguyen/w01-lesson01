import React from 'react'

class AdoptionListing extends React.Component {
    render () {
        return (
        <div className="adoption-listing">
            <h3>{this.props.name}</h3>
            <img
                src={this.props.picture}
                alt="Kitten" 
            />
            <p>Kitten - available for adoption</p>
        </div>
        )
    }
}

export default AdoptionListing