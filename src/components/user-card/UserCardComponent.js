import React from 'react';
import './UserCardComponent.css';

class UserCardComponent extends React.Component {
    render() {
        return (
            <button className="user-card">
                User { this.props.userId }
            </button>
        );
    }
}

export default UserCardComponent;