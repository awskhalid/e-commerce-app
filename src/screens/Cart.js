import { View, Text,StyleSheet,FlatList,Image,TextInput,TouchableOpacity,Pressable,Alert,ScrollView } from 'react-native'
import React, { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { cartContext } from '../Context/cartContext';

const Cart =({ route,navigation:{goBack}}) => {
  const[cart,addCart, removeCart,incrementCart,decrementCart] = React.useContext(cartContext);
  const item = route?.params?.item || {};


//Total sum
  let sum = 0;
   let total = cart.map((item) => {
     let add = item.price*item.quantity;
     sum = sum + item.price*item.quantity;  
     //console.log(sum);
   });
  // console.log(cart);
    const [data2, setData2] = useState([
        {
        id:1,
        name :"Muscle Fit T-shirt ",
        price: "$0.00",
          src:require("../../assets/kids.jpeg"),
    
      },
      {
        id:2,
        name :"T-shirt with varified stripe",
        price: "$29.00",
         src:require("../../assets/kids2.jpeg"),
      },
    
     
      ]);


  return (
    <ScrollView>
    <View style={Styles.mainContainer}>
        <View style={Styles.IconContainer}>
            <View style={Styles.textCenterStyle}>
        <Text style={Styles.textStyle}>Cart</Text>
        <AntDesign  style={Styles.IconStyle}  name='shoppingcart' size={20} color='white'/>
        </View>
        <View style={Styles.textCenterStyle}>
        <Text style={Styles.textStyle}>Delivery</Text>
        <EvilIcons  style={Styles.locationIconStyle}  name='location' size={25} color='white'/>
        </View>
        <View style={Styles.textCenterStyle}>
        <Text style={Styles.textStyle}>Payment</Text>
        <Feather style={Styles.IconStyle} name='dollar-sign' size={20} color='white'/>
        </View>
        <View style={Styles.textCenterStyle}>
        <Text style={Styles.textStyle}>Order</Text>
        <FontAwesome style={Styles.IconStyle} name='flag' size={20} color='white'/>
        </View>
        </View>
        <View>
            <View style={Styles.titleContainer}> 
            <Text style={Styles. titleStyle}>Total Price:</Text>
              <Text style={Styles. priceStyle}>{sum}</Text>
            </View>
            <View style={Styles.lineContainer }>
             
             </View>
            
        <View style={Styles.flatlistcontainer }>
       <View>
        <FlatList
    keyExtractor={(item) =>item.id}
     data={cart} 
     renderItem={({item})=>{
           
          return(
            <View style={Styles.mcontainer }>
            <View style={Styles.container }>
               <View style={Styles.imageContainer }>
            <Image source={{uri: item.image}} style={Styles.imageStyle}></Image>
            <View style={Styles.textContainer }>
            < Text style={Styles.textStyles} >{item.title}</Text> 
            < Text style={Styles.textStylePrice} >{item.price}</Text>
            
            <TouchableOpacity onPress={()=>removeCart(item)}>
              
            <AntDesign style={Styles.deleteStyle}  name='delete' size={20} color='red'/>
            </TouchableOpacity>
            </View>
            </View>
            <View style={Styles.lineContainer }>
             
            </View>
          
            </View>
            
            <View style={Styles.counterContainer }>
              <View style={Styles.counterBox }>
              <TouchableOpacity onPress={() =>incrementCart(item)}>
            <AntDesign style={Styles.incrementStyle}  name='caretup' size={15} color='gray'/>
            </TouchableOpacity>
            < Text style={Styles.quantityStyle} >{item.quantity}</Text> 
            <TouchableOpacity onPress={() => decrementCart(item)}>
            <AntDesign style={Styles.decrementStyle}  name='caretdown' size={15} color='gray'/>
            </TouchableOpacity>
            </View>
            </View>
            
            </View>
            
            )        
    }} />
    </View>
   
        </View>
       
        </View>
        
       <View style={Styles.couponHeight}>
            <View><Text style={Styles.couponStyle}>COUPON CODE:</Text></View>
        
        <View style={Styles.couponStyles }>
      <TextInput style={Styles.inputBox }
       
      />
      <TouchableOpacity style={Styles.buttonStyle }>
    <Text style={Styles.buttonText }>Apply</Text>
</TouchableOpacity>
      </View>
      </View>
      <View style={Styles.bottomButtonContainer}>
      
        <View style={Styles.backButtonStyle }>
     
     <Pressable onPress={(goBack)}>  
     <AntDesign style={Styles.backArrow }  name='arrowleft' size={20} color='black'/> 
    <Text style={Styles.buttonTextBack }>Back</Text>
    </Pressable> 
    
     </View>
    
     <View style={Styles.nextButtonStyle }>
     <TouchableOpacity >
    <Text style={Styles.buttonTextNext }>Next Step</Text>
     </TouchableOpacity>
     </View>
     </View>
    </View>
    </ScrollView>
  )
}

const Styles = StyleSheet.create({
    mainContainer:{
        
      marginTop:10,
       marginLeft:10,
       marginRight:10,
        
        flex: 1
    },
    IconContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        // height:'20%'
    },
    IconStyle:{
        
        width:40,
     height:40,
     padding:10,
    borderRadius:50,
    borderWidth:1,
    borderColor:'gray',
    backgroundColor:'gray'
  },
 

  titleContainer:{
  flexDirection:'row',
  justifyContent:'space-between',
  marginTop:15,
  padding:10
  },
  container :{
    flexDirection:'column',
    margin:15
  },
  imageContainer:{
    flexDirection:'row',
    width:'50%'
  },
  imageStyle:{
    width:100,
    height:120,
    margin:5,
  },
  textContainer:{
    flexDirection:'column'
  },
  textStyle:{
    padding:5,
    fontSize:16,
    color:'black',
    fontWeight:'bold'
    
  },
  textStylePrice:{
    padding:5,
    fontSize:16,
    fontWeight:'bold',
    
  },
  lineContainer :{
    height:1,
    backgroundColor:'gray'
  },
  titleStyle:{
    fontSize:18,
    fontWeight:'bold',
  },
  priceStyle:{
    fontSize:18,
    fontWeight:'bold',
    color:'deepskyblue' 
  },
  deleteStyle:{
  left:120
  },
  couponStyle:{
    fontSize:18,
    fontWeight:'bold',
    padding:10
    
  },
  
    inputBox:{
        borderWidth:1,
        borderColor:'gray',
        margin:10,
        borderRadius:50,
        padding:5,
        backgroundColor:'ghostwhite',
       width:170,
      
    },
    buttonStyle:{
       
       marginTop:10,
        borderWidth:1,
           borderColor:'orange',
           alignItems:'center',
           justifyContent:'center',
          width:90,
          height:40,
           backgroundColor:'orange',
           borderRadius:30,
    },
    buttonText :{
        color:'white'
    },
    couponStyles :{
        flexDirection:'row'
    },
    bottomButtonContainer:{
           marginTop:208,
        flexDirection:'row',
        height:50,
        backgroundColor:'red',
        
        
    },
    buttonStyles:{
        
        
      
    },
    backButtonStyle:{
        flexDirection:'row',
       justifyContent:'center',
       alignItems:'center',
        width:'50%',
         
     
         
    },
    nextButtonStyle:{
     width:'50%',
     backgroundColor:'deepskyblue',
   
     justifyContent:'center',
     alignItems:'center',
     
    },
    buttonTextBack:{
        color:'black',
        fontWeight:'bold',
        marginBottom:3,

        
    },
    buttonTextNext:{
        color:'white',
        fontWeight:'bold',
        marginBottom:3
    },
    backArrow :{
        
        right:35,
        position:'absolute'
    },
    counterContainer:{
      width:'50%',
      margin:15,
      right:20
    },
    mcontainer:{
      flexDirection:'row'
    },
    counterBox :{
      borderWidth:1,
      borderColor:'gray',
      
      borderRadius:50,
      
      backgroundColor:'ghostwhite',
     width:30,
     height:120,
     

    },
    incrementStyle:{
     left:7,
     marginTop:10
    },
    decrementStyle:{
      left:7,
      marginTop:20
    },
    quantityStyle:{
      fontWeight:'bold',
      fontSize:16,
       left:8,
       marginTop:20,
       color:'black'
    },
    textCenterStyle:{
      justifyContent:'center',
      alignItems:'center'
    },
    locationIconStyle:{
      width:40,
      height:40,
      padding:8,
      
     borderRadius:50,
     borderWidth:1,
     borderColor:'gray',
     backgroundColor:'gray'
    },
    textStyles:{
      padding:5,
      fontSize:16,
      color:'gray',
      // fontWeight:'bold'
      
      
     
    },
    //  flatlistcontainer:{
    //    height:'20%'
    //  },
     couponHeight:{
       marginTop:180
     }

})

export default Cart;