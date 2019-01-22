import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';

import { Container } from '../components/Container'
import { InputWithButton } from '../components/TextInput';

const TEMP_BASE_CURR = "SGD";
const TEMP_QUOTE_CURR = "INR";
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '53.2';

class Home extends Component {
    handlePressBaseCurrency = () => {
        console.log('Press base');
    }
    handlePressQuoteCurrency = () => {
        console.log("Press Quote");
    }

    render() {
        return (
        <Container>
            <StatusBar barStyle={"default"}/>
            <InputWithButton
                onPress={this.handlePressBaseCurrency}
                buttonText={TEMP_BASE_CURR} />
            <InputWithButton 
                editable={false}
                onPress={this.handlePressQuoteCurrency}
                buttonText={TEMP_QUOTE_CURR}
                />
            <View />
        </Container>
        )
    }
}

export default Home;