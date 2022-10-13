import { StyleSheet } from "react-native";

Styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#ffffff'
    },
    logoimg:{
        backgroundColor:'#ffffff',
        width:250,
        height:250,
    },
  txtInputContainer:{
        width:'95%',
        marginTop:5,
        alignItems:'center',
        justifyContent:'center',
    },
    txtInput:{
        width:'95%',
        height:40,
        borderWidth:1,
        textAlign:'center',
        marginTop:10,
        alignSelf:'center',
        borderRadius:20,
        marginBottom:20

    },
    btn:{
        width:'40%'
    },
    touchableTxt:{
      marginTop:10,
      color:'blue',
      fontSize:17
    }
});

export default Styles