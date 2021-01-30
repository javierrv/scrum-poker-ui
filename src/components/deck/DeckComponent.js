import React from 'react';
import CardComponent from '../card/CardComponent';

class DeckComponent extends React.Component {

    render() {
        return (
            <div>
                <CardComponent value="1" />
                <CardComponent value="2" />
                <CardComponent value="3" />
            </div>
        );
    }
}

export default DeckComponent;
