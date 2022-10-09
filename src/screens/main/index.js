import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
// import app, { FirebaseApp } from "../../firebase";
// import {getStorage, ref } from "firebase/storage"
// import { async } from "@firebase/util";
// import { getAuth } from "firebase/auth";
import Navigation from "../../navigation";
//const storage = getStorage();



const MainPage = (props) => {

    const list = [ 'A', 'B', 'c', 'd','e','f', 'g','h','i']
    return(
        <View style= {Styles.container}>
            <View style= {Styles.list}>
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

            </View>
        </View>
    )
}

Styles = StyleSheet.create({
    container:{
        flex:1,
        alignContent:'center',
        alignItems:'center',
         backgroundColor:'lightblue'
        
    },
    list:{
        width:'100%',
        flexDirection:'row',
        alignSelf:'center',
        alignContent:'center',
        backgroundColor:'transparent',
        height:'99%'
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
export default MainPage