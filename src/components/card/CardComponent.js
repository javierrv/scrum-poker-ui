import React from 'react';
import './CardComponent.css';

class CardComponent extends React.Component {

    render() {
        return (
            <button className="card">
                { this.props.value }
            </button>
        );
    }
}

export default CardComponent;
