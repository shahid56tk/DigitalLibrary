import React from "react";
import {View, Text, styleSheets} from "react-native";

const BookReader = () =>{
	return(
		<View>
			<Text> This is Book Reader Page</Text>
		</View>
	)
};

export default BookReader;

const styles = styleSheets.create({
	container:{
		flex:1,
		alignItem:'center',
		justifyContent:'center'
	}
})