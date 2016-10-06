import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import MainLayout from './MainLayout';
import Home from './Home';
import SlugLookup from './SlugLookup';

class App extends React.Component {
   render() {
      return (
          <Router history = {browserHistory}>
            <Route path = {wobbegong.root} component = {MainLayout}>
                <IndexRoute component = {Home} />
                <Route path =":slug" component = {SlugLookup} />
            </Route>
        </Router>
      );
   }
}

export default App;
