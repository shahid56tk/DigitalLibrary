import React from "react";
import {View, Text, StyleSheet, Button} from "react-native";
// import PdfReader from '@hashiprobr/expo-pdf-reader'
import PdfReader from "rn-pdf-reader-js";

const BookReader = () =>{
	return(
		
			// <PDFReader 
            //     source={{uri: 'https://www.ppsc.gop.pk/(S(cr04o5vyas2q1toviaog2at5))/FinalMeritList/30B2021_22081217162.PDF'}}
		
            // >
			// 	<View style = {styles.container}>
			// 		<Text> Shahid Hussain </Text>
			// 	</View>
			// </PDFReader>
			// <View style= {styles.container}>
            <PdfReader
                source={{uri: 'https://firebasestorage.googleapis.com/v0/b/moboliberary.appspot.com/o/edu%20thesis%202017.pdf?alt=media&token=3abf0dfb-cfc5-4aa9-b2dc-3ff2e2fd0cb8'}}
				// withScroll={true}
				webviewStyle = {{width:'95%', alignSelf:'center',marginBottom:20}}
				// useGoogleReader= {true}
				// maximumPinchZoomScale={1}
				withScroll={true}
				
				

            />
        //  </View>
		
	)
};

export default BookReader;

const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		width:'80%'
	}
})