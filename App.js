import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import InputContainer from "./src/components/InputContainer";
import OutputItems from "./src/components/OutputItems";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      items: []
    };
  }
  handleInput = url => {
    this.setState({
      ...this.state,
      url
    });
  };
  handleAdd = () => {
    if (this.state.url === "") {
      return;
    } else {
      this.setState(prevState => ({
        url: "",
        items: [...prevState.items, {imgUrl:this.state.url}]
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
    return (
      <View style={styles.container}>
        <InputContainer
          handleInput={this.handleInput}
          handleAdd={this.handleAdd}
          url={this.state.url}
        />
        <OutputItems items={this.state.items} remove={this.remove} />
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
