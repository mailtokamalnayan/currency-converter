import React, { Component } from "React";
import PropTypes from 'prop-types'
import { Text, FlatList, View, StatusBar } from "react-native";
import currencies from '../data/currencies';
import ListItem from '../components/List';

const TEMP_CURRENT_CURR = 'SGD';

class CurrencyList extends Component {
    static propTypes = {
        navigation: PropTypes.object,
    }
    handlePress = () => {
        console.log("Row Pressed");
        this.props.navigation.goBack(null);
    }
    render() {
        return(
            <View style={{ flex: 1}}>
                <StatusBar barStyle="default"/>
                    <FlatList
                        data={currencies}
                        keyExtractor={item => item}
                        renderItem={( { item }) => 
                        <ListItem 
                            text={item}
                            selected={item === TEMP_CURRENT_CURR}
                            onPress={this.handlePress}  />}
                    />
            </View>
        )
    }
}

export default CurrencyList;
