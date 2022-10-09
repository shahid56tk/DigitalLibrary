import React from "react";
import { View, Text, StyleSheet } from "react-native";
// import { BannerAd, TestIds, BannerAdSize } from 'react-native-google-mobile-ads';

const Splash = (props) =>{
  setTimeout(() => {
    props.navigation.replace('mainPage')
  }, 3000);
    return(
        <View style={styles.container}>
        <View style={styles.screen}>
        <Text>Splash Screen</Text>
        </View>
        {/* <BannerAd unitId={TestIds.BANNER} size ={BannerAdSize.BANNER}/> */}
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    screen:{
      alignContent:'center',
      height:'94%',
      justifyContent:'center'
    }
  });

export default Splash