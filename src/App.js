import logo from './logo.svg';
import './App.css';
import LoginComponent from './components/login/LoginComponent';
import GameDashboard from './components/game-dashboard/game-dashboard';


function App() {

  const usernameAlreadySelected = false;
  let initialComponent;

  if (usernameAlreadySelected) {
    initialComponent = <LoginComponent />
  } else {
    initialComponent = <GameDashboard />;
  }

  return (
    <div>
      {initialComponent}
    </div>
  );
}

export default App;
