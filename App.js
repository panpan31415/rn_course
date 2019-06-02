import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import InputContainer from "./src/components/InputContainer";
import OutputItems from "./src/components/OutputItems";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      items: []
    };
  }
  handleInput = text => {
    this.setState({
      text
    });
  };
  handleAdd = () => {
    if (this.state.text === "") {
      return;
    } else {
      this.setState(prevState => ({
        text: "",
        items: [...prevState.items, prevState.text]
      }));
    }
  };
  remove = index => {
    this.setState(prevState => ({
      ...prevState,
      items: prevState.items.filter((it, i) => i !== index)
    }));
  };
  render() {
    const items = this.state.items.map((item, i) => (
      <Text key={i}>{item}</Text>
    ));
    return (
      <View style={styles.container}>
        <InputContainer
          handleInput={this.handleInput}
          handleAdd={this.handleAdd}
          text={this.state.text}
        />
        <OutputItems items={items} remove={this.remove} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#fff",
    padding: 20
  }
});
