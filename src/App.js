import './App.css';
import { Provider } from "react-redux";
import store from "./redux/store";
import UserContainer from './components/UserContainer';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <UserContainer />
      </Provider>
    </div>
  );
}

export default App;
