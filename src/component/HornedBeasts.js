import React, { Component } from 'react'

class HornedBeasts extends Component {
    render() {
        return (
            
            <div>
                <h2>{this.props.title}</h2>
                <img className='img' src={this.props.imageUrl} alt={this.props.title} />
                <p>{this.props.description}</p>
            </div>
            
        )
    }
}

export default HornedBeasts
