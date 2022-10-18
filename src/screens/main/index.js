import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, } from "react-native";
import {collection, query, onSnapshot, getFirestore, doc} from 'firebase/firestore'
import app from '../../../api/firebase'
import { BOOK_CATEGORY_DATABASE } from "../../../res/strings/string";
const db = getFirestore(app)
// let keys = [{firstName:"John", lastName:"Doe", age:46}, {firstName:"bad", lastName:"Docce", age:46}]
let admin = true

const CategoryList = (props) =>{
    const [categories, setCategories] = useState(null)

    const getBookCategory = async () =>{
        const qry = query(collection(db, BOOK_CATEGORY_DATABASE))
        try{
            onSnapshot(qry,(querySnapshot)=>{
                let keys = []
                querySnapshot.forEach((doc) =>{
                    keys.push(doc.data())
                })
            setCategories(keys)
            console.log(categories)
            })
        }catch(e){console.log(e.message)}
    }

    useEffect(()=>{
        getBookCategory()

    },[])
    return(
        <View style= {Styles.container}>
            <Text style = {Styles.mainText}>Please select catergory of you interest </Text>
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
        height:75,
        marginBottom:15,
        backgroundColor:'green',
    },
    itemTxt:{
        textAlign:'center',
        fontSize:18,
    }

});
export default CategoryList;