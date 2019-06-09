import React, { Fragment } from "react";
import {FlatList, View, Text, StyleSheet, TouchableOpacity } from "react-native";
export default  ({ items, remove }) => {

  return <FlatList style={styles.ListContainer} 
  data={items.map((item,i)=>({
    key:i+"",value:item
  }))} 
  renderItem={({item})=>(<View  style={styles.ListItem}>
      <Text style={styles.ListText}> {item.value} </Text>
      <TouchableOpacity
        style={styles.Remove}
        onPress={() => {
          remove(parseInt(item.key));
        }}
      >
        <Text>{"Del"}</Text>
      </TouchableOpacity>
    </View>)}
  />;
};

const styles = StyleSheet.create({
  ListContainer: {
    display: "flex",
    flex:1,
    padding: 0,
    width: "100%",
 
  },
  ListItem: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 40,
    fontSize: 40,
    marginTop: 10
  },
  ListText: {
    height: 40,
    width: "70%",
    borderBottomWidth:1,
    textAlign:"left",
    lineHeight:45
  },
  Remove: {
    width: "20%",
    backgroundColor: "#ccc",
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});
