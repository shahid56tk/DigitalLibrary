import React, { useState } from "react";
import { View,TextInput, Button, Text, StyleSheet } from "react-native";

const AddCategory = (props) => {
    const [categoryName, setCategoryName] = useState(null)
    const [categoryDisp, setCategoryDiscp] = useState(null)
    return(
        <View style = {Styles.container}>
            <TextInput 
                style = {{...Styles.tInput, height:35}}
                placeholder = {'Category Name'}
                onChangeText = {(t)=> setCategoryName(t)}
            />
            <TextInput 
                style = {{...Styles.tInput, height:'25%',textAlignVertical:'top'}}
                placeholder = {'Category Description'}
                onChangeText = {(t)=> setCategoryDiscp(t)}
                multiline = {true}
            />
            <Button
                title="Add Category"
                onPress={() => alert('category')}
            />
        </View>
    )
}

const Styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#ffffff'
    },
    tInput:{
        width:'95%',
        borderWidth:0.5,
        marginBottom:18,
        textAlign:'center',
        elevation:2,
        fontSize:18,
        borderRadius:5
    }
});

export default AddCategory;