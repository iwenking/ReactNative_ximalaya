import React from 'react';
import { Provider } from 'react-redux';
import Navigator from './navigator';
import store from '@/config/dva'

export default class extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <Navigator />
            </Provider>
        )
    }

};