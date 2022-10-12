import React from 'react'
import { Image, StyleSheet } from 'react-native'
const LogoImg = (props) =>{

    return(
        <Image
            source={props.source}
            style = {{...styles.img, ...props.style}}
        />
    );
}

const styles= StyleSheet.create({
    img:{
        width:150,
        height:150,
        // alignSelf:'center'
    }
})

export default LogoImg;

