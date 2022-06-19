import React, { useState } from 'react';
import { View, Text,Button,StyleSheet, Alert ,  } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
//import Ionicons from 'react-native-vector-icons/Ionicons';
//import Feather from 'react-native-vector-icons/Feather';
//import CheckBox from '@react-native-community/checkbox';
//import { useState } from 'react';
import CheckBox from '@react-native-community/checkbox';



const isValidObjField = (obj) =>{
  return Object.values(obj).every(value => value.trim())
}

const updateError = (error , stateUpdater) => {
    stateUpdater(error);
    setTimeout(() =>{
     stateUpdater('')
    } , 2500

    ) ;
}


const isValidEmail = (value) =>{
   const regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
   return regx.test(value)
}

const Login =({navigation}) => {

  // const [email , setEmail] = useState("");
  // // console.log(email);
  // const [password , setPassword] = useState("");

  const [agree, setAgree] = useState(false);
  const [userInfo , setUserInfo] = useState({
    email:"",
    password:"",
  })

  const [error , setError]  = useState('')

  const { email , password} = userInfo;


  const handleOnChangeText = (value , fieldName) =>{
      setUserInfo({...userInfo, [fieldName] : value})
  };

  const isValidForm = () =>{
    if(!isValidObjField(userInfo)) return updateError('Required All Fields!' , setError)

    if(!isValidEmail(email)) return updateError('Invalid email!' , setError)

    if(!password.trim() || password.length < 8) return updateError('Password is less than 8 characters!' , setError)

    return true;
  };

  const submit =() =>{
    if(isValidForm()){
      Alert.alert(`Thank you ${email}`);
          navigation.navigate("Bottom");
    }
  }

  // const submit = () =>{
  //   // return Alert.alert(email , password);
  //   if(email === "awais@gmail.com" && password === "awais123"){
  //       Alert.alert(`Thank you ${email}`);
  //       navigation.navigate("Details" , {myEmail : `${email}`} );
  //   } else{
  //     Alert.alert(`Email and Password is not correct`);
  //   }
  // }
  return (
    <View style={Styles.mainContainer }>
      {/* {error ?(
        <Text style = {{ color: 'red', fontSize: 18, textAlign: 'center'}}>{error}</Text>) : null} */}
      
    <Text style={Styles.mainHeader }>Welcome </Text>
    <Text style={Styles.description }>Track your orders on the go with Sushi App</Text>
    
    <View style={Styles.inputContainer }>
    {error ?(
        <Text style = {{ color: 'red', fontSize: 18, textAlign: 'center'}}>{error}</Text>) : null}
      <Text style={Styles.labels }>Email Address</Text>
      <TextInput style={Styles.inputStyle }
      autoCapitalize="none"
      autoCorrect={false}
      placeholder='example@gmail.com'
      value ={email}
      // onChangeText = {(actualData) => setEmail(actualData) }
      onChangeText = {(value) => handleOnChangeText(value, 'email')}
       />

    </View>
    <View style={Styles.inputContainer }>
      <Text style={Styles.labels }>Password</Text>
      <TextInput
       style={Styles.inputStyle }
       autoCapitalize="none"
       autoCorrect={false}
       secureTextEntry={true}
       value ={password}
      //  onChangeText = {(actualData) => setPassword(actualData) }
      onChangeText = {(value) => handleOnChangeText(value, 'password')}
       
       />

    </View>
    <View style={Styles.wrapper}>
    {/* <Ionicons name='md-checkbox-sharp' size={25} color='black'/>
    <Feather name='smile' size={25} color='black'/> */}
     <CheckBox value={agree} onChange={() => setAgree(!agree)}
       />
     <Text style={Styles.text}>
          Accept our<Text style={Styles.textBold}> terms of service</Text> and <Text style={Styles.textBold}>privacy policy</Text>
        </Text>
    </View>
    <View style={Styles.buttonStyle}>
     <Button  
    
     title='Login'
     onPress={() => submit()}
     
     >

      </Button>
      
      </View>
      <View style={Styles.textView}>
        <Text style={Styles.textStyle}>Use as Guest</Text>
      </View>
     
    </View>
  );
};
const Styles = StyleSheet.create({
  mainContainer: {
     height:"100%",
      paddingHorizontal:25,
    //  paddingTop:150,
    // flex: 1,
    // alignItems: 'center',
   justifyContent: 'center',
    backgroundColor:"#fff",
  },
  mainHeader:{
    fontSize:25,
    color:"#344055",
    fontWeight:"500",
    paddingTop:20,
    paddingBottom:15,
    
  },
  description:{
     fontSize: 20,
     color: 'black',
     paddingBottom:20,
     lineHeight:20,

  },
  inputContainer:{
     marginTop:10,
  },
  labels:{
    fontSize:18,
    color:"#7d7d7d",
    marginTop:10,
    marginBottom:5,
    lineHeight:25,

  },
  inputStyle:{
   borderWidth: 1,
   borderColor:"rgba(0,0,0,3)",
   paddingHorizontal:15,
   paddingVertical:7,
   borderRadius:1,
   fontSize:18,
  },
  wrapper:{
    display: 'flex',
    flexDirection: 'row',
    //  alignContent: 'center',
    // paddingVertical: 15,
    marginTop:30,
    paddingRight:40,
    // justifyContent:center,
  },
  text: {
     lineHeight: 20,
     marginLeft: 10,
     
  },
  textBold:{
    fontWeight:'bold',
  },
  buttonStyle:{
    marginTop:20,
   
  },
  // loginButton:{
  //   backgroundColor: agree ? "#4630EB" : "grey",
  // },
  textView:{
marginTop:10,
alignItems:'center',
  },
  textStyle:{
   color:"red",
   

  }
})







export default Login;