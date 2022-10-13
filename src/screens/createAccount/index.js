import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import LogoImg from "../../components/logoImg";
import { LOGO_IMAGE_SOURCE } from "../../../res/strings/string";
import Styles from "../loginPage/style";

const CreateAccount = (props) => {

    const [email, setEmail] = useState(null)
    const [ passowrd, setPassword] = useState(null)
    return(
        <View style = {Styles.container}>
            <LogoImg
                source = { LOGO_IMAGE_SOURCE}
                style= {Styles.logoimg}
            />
            <View style= {Styles.txtInputContainer}>
                <TextInput
                    style = {Styles. txtInput}
                    placeholder={"Please Enter Email"}
                    value={email}
                    onChangeText = {(t) => setEmail(t.toLowerCase())}
                />
                <TextInput
                    style= {Styles.txtInput}
                    placeholder = {'Pleas enter Password'}
                    value= {passowrd}
                    secureTextEntry = {true}
                    onChangeText = {(t)=> setPassword(t)}
                />
            </View>
            <View style = {Styles.btn}>
                <Button
                    title={'Sign Up'}
                    onPress = {()=> alert('SignUp')}
                />
            </View>

        </View>
    );
};

export default CreateAccount;


