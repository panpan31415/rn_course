import React,{Fragment} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
export default (ListItems = ({ items, remove }) => {
  const itemLists = items.map((item, i) => {
    return (
      <View key={i} style={styles.ListItem}>
         <Text style={styles.ListText} > {item} </Text>
         <TouchableOpacity onPress={()=>{remove(i)}} >
           <Text style={styles.Remove}>{"X"}</Text>
         </TouchableOpacity>
      </View>
       
   
    );
  });
  return <View style={styles.ListContainer}>{itemLists}</View>;
});

const styles = StyleSheet.create({
  ListContainer: {
    display:"flex",
    justifyContent:"flex-start",
    padding: 0,
    width: "100%"
  },
  ListItem: {
    display:"flex",
    width: "100%",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    height:40,
    fontSize:35,
    marginTop:10,

  },
  ListText:{
    width:"70%",
    borderBottomWidth:1,
    borderColor:"blue",
  },
  Remove:{
    display:"flex",
    flexDirection:"row",
    height:40,
    width:"20%",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"red"

  }
});
