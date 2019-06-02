/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button
} from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text:"",
      items:[]
    };
  }
  handleInput = text => {
    this.setState({
      text
    });
  };
  handleAdd = ()=>{
    if(this.state.text === ""){
      return;
    }else{
      this.setState((prevState)=>{
        return {
          text:"",
          items:[...prevState.items,prevState.text]
        }
      });
    }
  }
  render() {
    const items = this.state.items.map((item,i)=>(<Text key={i}>{item}</Text>));
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            value={this.state.text}
            style={styles.textInput}
            onChangeText={this.handleInput}
          />
          <Button title={"ADD"} style={styles.btn} onPress={this.handleAdd}/>
        </View>
        <View>{items}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column", // Default set to column
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#fff",
    padding: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  textInput: {
    height: 40,
    width: "70%",
    borderBottomWidth: 2,
    color: "black"
  },
  btn: {
    flex: 1,
    height: 40,
    width: "50%",
    alignItems: "center"
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%"

  }
});
