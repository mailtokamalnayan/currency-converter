import React from 'react';
import PropTypes from 'prop-types';

import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    row: {
        borderBottomWidth: 0.5,
        paddingHorizontal: 8,
        paddingVertical: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: '#dddddd'
    }
})

const ListItem = ({ text, onPress, selected}) => (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.row}>
            <Text>{text}</Text>
            {selected ? <Text>Selected</Text>: null }
        </View>
    </TouchableOpacity>
)

ListItem.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    selected: PropTypes.bool
};

export default ListItem;