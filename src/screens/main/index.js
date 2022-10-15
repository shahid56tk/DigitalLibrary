import React from "react";
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity, } from "react-native";
let keys = ['a', 'b', 'c', 'd','e']
let admin = true

const CategoryList = (props) =>{
    return(
        <View style= {Styles.container}>
            <Text style = {Styles.mainText}>Please select catergory of you interest </Text>
            <FlatList
                data={keys}
                renderItem= {({item})=>{
                    return(
                        <TouchableOpacity
                            onPress={()=> props.navigation.navigate('bookList')}
                        >
                            <View style = {Styles.listItem}>
                                <Text style = {Styles.itemTxt}> {item} </Text>
                            </View>
                            </TouchableOpacity>
                    )
                }}
                keyExtractor = {(item) => item}
            />
             {admin?
            <TouchableOpacity onPress={() => props.navigation.navigate('addCategory')}>
            <View>
                <Text style= {{textAlign:'center'}}> Add New Category</Text>
            </View>
        </TouchableOpacity>:null}

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
        marginBottom:10,
    },
    listItem:{
        minWidth:'97%',
        alignSelf:'center',
        height:60,
        marginBottom:15,
        backgroundColor:'green',
    },
    itemTxt:{
        textAlign:'center',
        fontSize:18,
    }

});
export default CategoryList;