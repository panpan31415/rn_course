import React, { Fragment } from "react";
import {FlatList, View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Emoji from "./Emoji";
export default  ({ items, remove }) => {
  
  return <FlatList style={styles.ListContainer} 
  data={items.map((item,i)=>({
    key:i+"",value:item.imgUrl
  }))} 
  renderItem={({item})=>(<View  style={styles.ListItem}>
    <Text style={styles.ListText}>
    {/* {getEmoji({style:styles.ListEmoji,index:parseInt(item.value)})} */}
    <Emoji  style={styles.ListEmoji} index={parseInt(item.value)} />
    {/* <Image source={require(`./emoji/${parseInt(item.value)}.png`)} /> */}
    {` = ${item.value}`}</Text>
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
    height: 50,
    marginTop: 10
  },
  ListText: {
    display:"flex",
    flexDirection:"row",
    height: 50,
    width: "70%",
    borderBottomWidth:1,
    lineHeight:50,
    fontSize:25,
    alignItems:"center",
    justifyContent:"flex-start"
  },
  ListEmoji:{
    height: 35,
    width:35
  
  },
  Remove: {
    width: "20%",
    backgroundColor: "#ccc",
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});
