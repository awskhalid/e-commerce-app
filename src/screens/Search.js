import React, { useState } from 'react';
import { View, Text,Button , StyleSheet ,FlatList,Image,TextInput,TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const Search =({navigation}) => {
  

  const [data, setData] = useState([
    {
    id:1,
    name :"Muscle Fit T-shirt with black-stripe",
    price: "$0.00",
      src:require("../../assets/kids.jpeg"),

  },
  {
    id:2,
    name :"T-shirt with varified stripe",
    price: "$29.00",
     src:require("../../assets/kids2.jpeg"),
  },
  {
    id:3,
    name :"Stripe backpackwith Contrast Tan Detail",
    price: "$54.00",
     src:require("../../assets/kids3.jpeg"),
  },
 
  ]);
  return (
  <View style={Styles.mainContainer }>
    <View>
      <TextInput style={Styles.inputBox }
       
      />
      <Ionicons style={Styles.searchBtn } name='search' size={25} color='black'/>
     
     
    </View>
     <View style={Styles.deleteContainer }>
    <View style={Styles.recentContainer }>
      <Text style={Styles.recentStyle }>
        Recents
      </Text>
      <MaterialCommunityIcons name='details' size={20} color="black"/>
    </View>
    <AntDesign  name='delete' size={20} color='gray'/>
    </View>



    <View style={Styles.buttonContainer }>
    <TouchableOpacity style={Styles.buttonStyle }>
    <Text style={Styles.buttonText }>Stripe</Text>
</TouchableOpacity>
      <TouchableOpacity style={Styles.buttonStyle }>
    <Text style={Styles.buttonText } >T-shirt</Text>
</TouchableOpacity>
      <TouchableOpacity style={Styles.buttonStyle }>
    <Text style={Styles.buttonText }>Jacket</Text>
</TouchableOpacity>
    </View>
 <View>
    <FlatList
    keyExtractor={(item) =>item.id}
     data={data} 
     renderItem={({item})=>{

          return(
            <View style={Styles.container }>
               <View style={Styles.imageContainer }>
            <Image source={item.src} style={Styles.imageStyle}></Image>
            <View style={Styles.textContainer }>
            < Text style={Styles.textStyle} >{item.name}</Text> 
            < Text style={Styles.textStylePrice} >{item.price}</Text>
            </View>
            </View>
            <View style={Styles.lineContainer }>

            </View>
            </View>)        
    }} />
   
   </View>
   </View>

  );
  
};
const Styles = StyleSheet.create({
  mainContainer :{
  flex:1,
  paddingHorizontal:10,
  },
  inputBox:{
   borderWidth:2,
   borderColor:'gray',
   margin:10,
   borderRadius:50,
   padding:10,
   backgroundColor:'ghostwhite',
   position:'relative'

  },
  searchBtn:{
    position:'absolute',
    margin:23
  


  },
  recentStyle:{
    fontSize:16,
  fontWeight:'bold',
  
  },
  recentContainer:{
    
    flexDirection:'row',
   
  },
  deleteContainer:{
    margin:15,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  buttonStyle:{
    marginRight:10,
    paddingRight:10,
    borderWidth:1,
       borderColor:'deepskyblue',
       alignItems:'center',
       justifyContent:'center',
      width:70,
      height:30,
       backgroundColor:'#fff',
       borderRadius:30,
       
    
    
   
    
  },
  buttonText:{
    color:'deepskyblue',
  },
 
  buttonContainer:{
   
    flexDirection:'row',
    margin:15

  },
 

  container:{
    
   flexDirection:'column',
   margin:15

  },

  imageContainer:{
  
   flexDirection:'row'
  },
 textStyle:{
   padding:10,
   fontSize:16,
   width:'75%'
 },
 textStylePrice:{
  padding:10,
  fontSize:16,
  fontWeight:'bold',
  
 },
 imageStyle:{
  width:100,
  height:120,
  margin:5,
 },
 textContainer:{
     
     flexDirection:'column'
 },
 lineContainer:{
    height:1,
    backgroundColor:'ghostwhite'
 },
})


export default Search;