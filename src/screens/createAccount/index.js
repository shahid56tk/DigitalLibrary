import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CreateAccount = (props) => {
    return(
        <View style = {styles.container}>
            <Text>
                Create Account
            </Text>
        </View>
    );
};

styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',

    }
});

export default CreateAccount;


