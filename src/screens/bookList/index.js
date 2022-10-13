import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
// import app, { FirebaseApp } from "../../firebase";
// import {getStorage, ref } from "firebase/storage"
// import { async } from "@firebase/util";
// import { getAuth } from "firebase/auth";
import Navigation from "../../navigation";
//const storage = getStorage();
const admin = true;



const BookList = (props) => {

    const list = [ 'A', 'B', 'c', 'd','e','f', 'g','h','i']
    return(
        <View style= {Styles.container}>
            <FlatList
                data = {list}
                renderItem={({item})=>{
                    return(
                        <TouchableOpacity
                            onPress={() => {props.navigation.navigate('pdfBook')}}
                        >
                            <View style = {Styles.listItem}>
                                {/* <Image
                                    style={styles.noteImg}
                                    source={NOTE_IMG}
                                /> */}
                                <Text>  {item}  </Text> 
                            </View>
                        </TouchableOpacity>
                    )
                }}
                keyExtractor ={(item) => item}
            />

            {admin?
            <TouchableOpacity onPress={() => props.navigation.navigate('createBook')}>
            <View>
                <Text style= {{textAlign:'center'}}> Add Book</Text>
            </View>
        </TouchableOpacity>:null}

        </View>
    )
}

Styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-between',
         backgroundColor:'lightblue'
        
    },
    listItem:{
        marginTop:20,
        backgroundColor:'green',
        height:150,
        borderRadius:20,
        borderColor:'#ffffff',
        width:'93%',
        elevation:30,
        alignSelf:'center'
    }
})
export default BookList;