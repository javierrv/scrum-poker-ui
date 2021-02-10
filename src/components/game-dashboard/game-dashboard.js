import React from 'react';
import UserCardComponent from '../user-card/UserCardComponent';

class GameDashboard extends React.Component {
    render() {
        return (
            <div>
                <button>Show</button>
                <button>Clear</button>
                <UserCardComponent userId="1" />
                <UserCardComponent userId="2" />
            </div>
        );
    }
}

export default GameDashboard;