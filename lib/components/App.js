import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import MainLayout from './MainLayout'
import Home from './Home'
import PageWrapper from './PageWrapper'

class App extends React.Component {
    render() {
        return (
          <Router history = {browserHistory}>
            <Route path = {wobbegong.install} component = {MainLayout}>
                <IndexRoute component = {Home} />
                <Route path =":slug" component = {PageWrapper} />
            </Route>
        </Router>
      );
   }
}

export default App;
