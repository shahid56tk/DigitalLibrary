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
        width:250,
        height:250,
        // alignSelf:'center'
    }
})

export default LogoImg;

