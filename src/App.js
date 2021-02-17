import React, {Component} from 'react';
import { AwesomeButtonProgress } from 'react-awesome-button';
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";
import './App.css';
import ReactImageAppear from 'react-image-appear';

class App extends Component {
  state = {
    visible: false
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
      {this.state.visible ? this.renderImage() : this.renderButton()}
      </header>
      </div>
    );
  }

  renderButton() {
    return (
      <AwesomeButtonProgress
      type='primary'
      size='large'
      loadingLabel='Hmm...'
      resultLabel='Obviously!'
      action={(element, next) => {
        setTimeout(() => {
          next();
          setTimeout(() => {
            this.setState({visible: true})
          }, 700)
        }, 400);
      }}
      >
      Do I need coffee?
      </AwesomeButtonProgress>
    )
  }

  renderImage() {
    return (
      <ReactImageAppear
      className="coffee-image"
      src="images/38-ways-to-make-a-perfect-coffee.jpg"
      animation="blurIn"
      />
    )
  }
}
export default App;
