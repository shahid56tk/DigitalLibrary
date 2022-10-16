import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity, } from "react-native";
import { getBookCategory } from "../../services/firebase";
let keys = [{firstName:"John", lastName:"Doe", age:46}, {firstName:"bad", lastName:"Docce", age:46}]
let admin = true

const CategoryList = (props) =>{
    const [categories, setCategories] = useState(null)
    let keys1 = []
    const getCat = () =>{
        keys1 =getBookCategory()
        setCategories(keys1)
        console.log(categories)
    }
    useEffect(()=>{
        getCat()

    },[])
    return(
        <View style= {Styles.container}>
            <Text style = {Styles.mainText}>Please select catergory of you interest </Text>
            {categories?
            <FlatList
                data={categories}
                renderItem= {({item})=>{
                    return(
                        <TouchableOpacity
                            onPress={()=> props.navigation.navigate('bookList')}
                        >
                            <View style = {Styles.listItem}>
                                <Text style = {Styles.itemTxt}> {item.categoryName} </Text>
                            </View>
                            </TouchableOpacity>
                    )
                }}
                keyExtractor = {(item) => item}
            />:null}
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