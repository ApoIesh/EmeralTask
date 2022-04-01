import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import MainScreen from './component/MainScreen';
import reducers from './reducers';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
     <MainScreen />
    
      </Provider>
    );
  }
}

export default App;