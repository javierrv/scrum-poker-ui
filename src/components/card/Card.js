import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <button>
                { this.props.value }
            </button>
        );
    }
}

export default Card;
