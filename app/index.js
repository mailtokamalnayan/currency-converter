import React from 'react';
import Home from './screens/Home';
import EStyleSheet from "react-native-extended-stylesheet";
import Navigator from './config/routes';

EStyleSheet.build({
    $primaryYellow: '#FFDC00',
})

export default () => <Navigator />;