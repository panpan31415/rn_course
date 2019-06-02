import React from "react";
import { View, Text, StyleSheet } from "react-native";
export default (OutputItems = ({ items }) => {
    const itemLists = items.map((item, i) => {
    return <Text key={i} style={styles.ListItem}> {item} </Text>;
  });
  return <View style={styles.ListContainer}>{itemLists}</View>;
});

const styles = StyleSheet.create({
  ListContainer: {
    padding: 10,
    width: "100%"
  },
  ListItem:{
      width:"100%",
      borderBottomColor:"blue",
      borderBottomWidth:1,
      padding:10
  }
});
