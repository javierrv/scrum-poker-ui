import React from 'react';

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