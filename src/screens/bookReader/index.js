import React from "react";
import {View, Text, StyleSheet} from "react-native";

const BookReader = () =>{
	return(
		<View>
			<Text> This is Book Reader Page</Text>
		</View>
	)
};

export default BookReader;

const styles = StyleSheet.create({
	container:{
		flex:1,
		alignItem:'center',
		justifyContent:'center'
	}
})