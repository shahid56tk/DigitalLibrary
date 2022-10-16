import React, { useState } from "react";
import { View,TextInput, Button, Text, StyleSheet } from "react-native";
import { AddBookCategory } from "../../services/firebase";

const AddCategory = (props) => {
    const [categoryName, setCategoryName] = useState(null)
    const [categoryDisp, setCategoryDiscp] = useState(null)

    const onPressAddCategory = async () =>{
        if(categoryName && categoryDisp){
            let payload = { categoryName, categoryDisp}
            let res = await AddBookCategory(payload)
            alert('Book Category Added Successfully')
            props.navigation.goBack()
        }
        else{ alert('All fields are rquired')}
       

    }
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
                onPress={() => onPressAddCategory()}
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