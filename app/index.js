import React from 'react';
import Home from './screens/Home';
import EStyleSheet from "react-native-extended-stylesheet";
import Navigator from './config/routes';
import { Provider } from 'react-redux';

import store from './config/store';

EStyleSheet.build({
    $primaryYellow: '#FFDC00',
})

export default () => (
    <Provider store={store}>
        <Navigator />
    </Provider>
);