import React from 'react'
import { View,Text, TextInput, Button, StyleSheet,TouchableOpacity } from "react-native";
export default InputContainer = (props) => {
    return (<View style={styles.inputContainer} >
        <TextInput
            value={props.url}
            style={styles.textInput}
            onChangeText={props.handleInput}
        />
        <TouchableOpacity onPress={props.handleAdd} style={styles.add}><Text>{"ADD"}</Text></TouchableOpacity>
    </View>);
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%"

    },
    textInput: {
        height: 50,
        width: "70%",
        borderBottomWidth: 2,
        color: "black"
    },
    add: {
        display:"flex",
        justifyContent:"center",
        height:50,
        width: "20%",
        alignItems: "center",
        backgroundColor:"rgba(222,222,222,0.5)",
        color:"blue"
    },
});
