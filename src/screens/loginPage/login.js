import React, {useState} from "react";
import { View, TextInput, Button, Text, TouchableOpacity, ScrollView } from "react-native";
import LogoImg from "../../components/logoImg";
import { LOGO_IMAGE_SOURCE, } from "../../../res/strings/string";
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import app from "../../../api/firebase";
// import { BannerAd, TestIds, BannerAdSize } from 'react-native-google-mobile-ads';
import { Styles } from "./style";



const Login = (props) =>{
  const [email, setEmail] = useState(null)
  const [ password, setPassword] = useState(null)
  
  const onForgetPressed = () =>{
    const auth = getAuth();
    if(email){
      sendPasswordResetEmail(auth, email)
      .then((user) => {
          alert('password reset email sent!')
          console.log(user)
      })
      .catch((e) => {
          alert(e.message)
      })
    }
    else{alert('Please enter a valid Email Address')}
}


  const onSigninPressed =() =>{
    const auth = getAuth(app)
    if(email && email.includes('@') && password){
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          //alert(`You are Signed In as ${email}`)
          setPassword(null)
          setEmail(null)
          props.navigation.navigate('bookCategory')
          // console.log(userCredential)   // user information object
      }).catch((e)=> {alert(e.message)})
      }else { alert('Please Enter Valid Email and Password')}
    }
    return(
        <ScrollView 
          style = {Styles.scrollContainer}
          endFillColor='#ffffff'
          fadingEdgeLength={2}>
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
                      value= {password}
                      secureTextEntry = {true}
                      onChangeText = {(t)=> setPassword(t)}
                  />
              </View>
              <View style = {Styles.btn}>
                  <Button
                      title={'Log In'}
                      onPress = {()=> onSigninPressed()}
                  />
              </View>
              <TouchableOpacity 
                onPress={()=> props.navigation.navigate('createAccount')}
              >
                <Text
                  style= {Styles.touchableTxt}
                > Create Account</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={()=> onForgetPressed()}
              >
                <Text
                  style = {Styles.touchableTxt}
                > Forgot Password </Text>
              </TouchableOpacity>

          </View>
        </ScrollView>
    );
}

export default Login;