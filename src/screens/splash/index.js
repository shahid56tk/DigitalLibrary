import React from "react";
import { View, StyleSheet } from "react-native";
import { LOGO_IMAGE_SOURCE } from "../../../res/strings/string";
import LogoImg from "../../components/logoImg";


const Splash = (props) =>{
    setTimeout(()=> {
        props.navigation.replace('login')
    }, 4000)
    return(
        <View style = {styles.container}>
            <LogoImg
                source = {LOGO_IMAGE_SOURCE}
                style = {styles.img}
            />
        </View>
    )
}

styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff',
        alignItems:'center',
        justifyContent:'center'
    },
    img:{
        width:400,
        height:400
    }
})

export default Splash;