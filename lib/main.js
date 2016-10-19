import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.js'
import { Provider } from "react-redux"
import store from './reducers/store'

import jquery from './jquery'

ReactDOM.render(<Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app'))
