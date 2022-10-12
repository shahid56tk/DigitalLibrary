import React from 'react'
import { Image, StyleSheet } from 'react-native'

const LogoImg = (props) =>{

    return(
        <Image
            source={props.source}
            style = {styles.img}
        />
    );
}

const styles= StyleSheet.create({
    img:{
        width:300,
        height:300,
        alignSelf:'center'
    }
})

export default LogoImg;

