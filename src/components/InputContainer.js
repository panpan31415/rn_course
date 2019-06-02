import React from 'react'
import { View, TextInput, Button, StyleSheet } from "react-native";
export default InputContainer = (props) => {
    return (<View style={styles.inputContainer} >
        <TextInput
            value={props.text}
            style={styles.textInput}
            onChangeText={props.handleInput}
        />
        <Button title={"ADD"} style={styles.button} onPress={props.handleAdd} />
    </View>);
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%"

    },
    textInput: {
        height: 40,
        width: "70%",
        borderBottomWidth: 2,
        color: "black"
    },
    button: {
        flex: 1,
        height: 40,
        width: "50%",
        alignItems: "center"
    },

});
