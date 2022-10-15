import React from "react";
import { View, Text, StyleSheet, Button, FlatList, } from "react-native";
let keys = ['a', 'b', 'c', 'd','e']

const CategoryList = (props) =>{
    return(
        <View style= {Styles.container}>
            <Text style = {Styles.mainText}>Please select catergory of you interest </Text>
            <FlatList
                data={keys}
                renderItem= {({item})=>{
                    return(
                        <View style = {Styles.listItem}>
                            <Text style = {Styles.itemTxt}> {keys} </Text>
                        </View>
                    )
                }}
            >

            </FlatList>

        </View>
    )
}

const Styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    mainText:{
        textAlign:'center',
        fontSize:20,
        backgroundColor:'gray',
        width:'100%',
        height:25,
        borderBottomWidth:1,
    },
    listItem:{
        width:'85%',
        alignSelf:'center',
        height:40,
        backgroundColor:'green',
        elevation:5,
    },
    itemTxt:{
        textAlign:'center',
        fontSize:18,
    }


})