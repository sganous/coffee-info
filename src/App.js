import './App.css';
import {
  AwesomeButton,
  AwesomeButtonProgress,
  AwesomeButtonSocial,
} from 'react-awesome-button';
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <AwesomeButtonProgress
      type='primary'
      size='large'
      loadingLabel='Hmm...'
      resultLabel='Obviously!'
      action={(element, next) => {
        setTimeout(() => {
          next();
        }, 1200);
      }}
      >
      Do I need coffee?
      </AwesomeButtonProgress>
      </header>
    </div>
  );
}

export default App;
