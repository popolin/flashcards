import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

import AppNavigator from './components/AppNavigator'
import { setLocalNotification } from './utils/helpers'

export default class App extends React.Component {

    componentDidMount() {
        setLocalNotification()
    }

    render() {
        return (
            <Provider store={createStore(reducer)}>
                <AppNavigator />
            </Provider>
        );
    }
}