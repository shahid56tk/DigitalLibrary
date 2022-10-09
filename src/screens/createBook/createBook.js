import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import app from '../../../api/firebase';


const CreateBook = (props) =>{
    return(
        <View style = {styles.container}>
            <Text> Hello</Text>
        </View>
    );
};

styles = new StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default CreateBook;