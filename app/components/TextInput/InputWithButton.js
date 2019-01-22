import React from "react";
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import styles from "./styles";

const InputWithButton = ( props ) => {
    const { onPress, buttonText, editable = true} = props;
    const ContainerStyles = [styles.input];

    if (editable === false ) {
        ContainerStyles.push(styles.containerDisabled);
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
                <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableOpacity>
            <View styles={styles.border} />
            <TextInput style={styles.input} {...props}/>
        </View>
    )
};

InputWithButton.propTypes = {
    onPress: PropTypes.func,
    buttonText: PropTypes.string,
    editable: PropTypes.bool,
};

export default InputWithButton;