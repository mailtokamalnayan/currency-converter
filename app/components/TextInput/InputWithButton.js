import React from "react";
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import styles from "./styles";

const InputWithButton = ( { onPress, buttonText, editable = true}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
                <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableOpacity>
            <View styles={styles.border} />
            <TextInput style={styles.input} />
        </View>
    )
};

InputWithButton.propTypes = {
    onPress: PropTypes.func,
    buttonText: PropTypes.string,
    editable: PropTypes.bool,
};

export default InputWithButton;