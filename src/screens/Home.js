import { View, Text , Image , StyleSheet,FlatList, Pressable,ImageBackground,TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { TouchableOpacity } from 'react-native-gesture-handler';

import { cartContext } from '../Context/cartContext';



  const Home =({navigation,route}) => {

    const[cart,addCart, removeCart] = React.useContext(cartContext);
    const item = route?.params?.item || {};
                    // new arry
                    const data2 = [
                      {
                        id: '1',
                        image:
                          'https://images.unsplash.com/photo-1495385794356-15371f348c31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGdpcmwlMjBkcmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                        detais: 'Stich Details Tunic Dress',
                        price: '$88.88',
                        description:'lightweght fabric',
                        features:"v-neckline",
                        reviews:'wide cut sleeves',
                      },
                      {
                        id: '2',
                        image:
                          'https://images.unsplash.com/photo-1599662875272-64de8289f6d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBkcmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                        detais: 'Seleve Tunic Dress',
                        price: '$48.88',
                        description:'lightweght fabric',
                        features:"v-neckline",
                        reviews:'wide cut sleeves',
                      },
                      {
                        id: '3',
                        image:  'https://images.unsplash.com/photo-1599662875272-64de8289f6d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBkcmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                       
                        detais: 'Seleve Tunic Dress',
                        price: '$48.88',
                        description:'lightweght fabric',
                        features:"v-neckline",
                        reviews:'wide cut sleeves',
                      },
                    ];

                    // const renderitems2 = ({item}) => {
                    //   return (
                    //     <TouchableOpacity onPress={() => navigation.navigate('Detail',
                    //     {
                    //       item:item,
                    //     })}>
                    //       <View  style={Styles.imgContainer}>
                    //         <ImageBackground style={Styles.imgStyle}
                    //           source={{uri: item.image}}
                    //           imageStyle={{borderRadius:8}}
                    //           >
                    //             <View style={Styles.viewTextStyle}>
                    //           <Text style={Styles.textStyle}>{item.detais}</Text>
                    //           <Text style={Styles.priceTextStyle}>{item.price}</Text></View>
                    //         </ImageBackground>
                    //       </View>
                    //     </TouchableOpacity>
                    //   );
                    // };
          

    const [img, setImg] = useState([
      {
      id:1,
      title :"Stitch Deatil Tunic Dress",
      price: "59.00",
      image:  'https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2lkcyUyMGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      description:'lightweght fabric',
      
      features:"v-neckline",
      reviews:'wide cut sleeves',
      quantity:1
    },
    {
      id:2,
      title :"T-shirt with varified stripe",
      price: "29.00",
      image:  'https://media.istockphoto.com/photos/studio-portrait-of-a-cute-girl-picture-id1296741654?k=20&m=1296741654&s=612x612&w=0&h=zliGa1tnqb6eWym31UXmWdGLXv0f7UKywW1MxeDInjs=',
      description:'lightweght fabric',
      features:"v-neckline",
      reviews:'wide cut sleeves',
      quantity:1
    },

    {
      id:3,
      title :"T-shirt with  stripe",
      price: "99.00",
     image:  'https://media.istockphoto.com/photos/child-boy-modern-stock-photo-picture-id1296361252?k=20&m=1296361252&s=612x612&w=0&h=q0eQsjbcMJzrlBOS-8BVY18_78_cua8Ms0oD3up2pwM=',
     description:'lightweght fabric',
     features:"v-neckline",
     reviews:'wide cut sleeves',
     quantity:1
    },
    {
    id:4,
    title :"T-shirt with varified stripe   ",
    price: "150.00",
   image:  'https://media.istockphoto.com/photos/happy-child-boy-stock-photo-picture-id1296115846?k=20&m=1296115846&s=612x612&w=0&h=O7wA-5Oo2FtpET7BvlA9V7TNWhbnX5tLYB9dp-4Tks4=',
   description:'lightweght fabric',
   features:"v-neckline",
   reviews:'wide cut sleeves',
   quantity:1
  },
    
    
   
    ]);


    const [category, setCategory] = useState([
      {
      id:1,
      title :"Man",
      
        src:require("../../assets/shoes.jpeg"),
  
    },
    {
      id:2,
      title :"Man",
      
       src:require("../../assets/shoes.jpeg"),
    },
    {
      id:3,
      title :"Man",
      
       src:require("../../assets/shoes.jpeg"),
    },
    {
      id:4,
      title :"Man",
      
       src:require("../../assets/shoes.jpeg"),
    },
    {
      id:5,
      title :"Man",
      
       src:require("../../assets/shoes.jpeg"),
    },
    {
      id:6,
      title :"Man",
      
       src:require("../../assets/shoes.jpeg"),
    },
    {
      id:7,
      title :"Man",
      
       src:require("../../assets/shoes.jpeg"),
    },
    {
      id:8,
      title :"Man",
      
       src:require("../../assets/shoes.jpeg"),
    },
    {
      id:9,
      title :"Man",
      
       src:require("../../assets/shoes.jpeg"),
    },
    {
      id:10,
      title :"Man",
      
       src:require("../../assets/shoes.jpeg"),
    },
    
    
   
    ]);

    const [products, setProducts] = useState([
      {
      id:1,
     
      src:require("../../assets/kids2.jpeg")
  
    },
    {
      id:2,
     
       src:require("../../assets/kids2.jpeg"),
    },
    {
      id:3,
     
       src:require("../../assets/kids2.jpeg"),
    },
    {
      id:4,
     
       src:require("../../assets/kids2.jpeg"),
    },
    {
      id:5,
     
       src:require("../../assets/kids2.jpeg"),
    },

   
   
    ]);



  return (
    
    <View style={Styles.mainContainer}>
      <View  style={Styles.iconContainer}>
      <Feather  name='menu' size={25} color='black'/>
      <FontAwesome  name='th-large' size={25} color='black'/>
      </View>
      <View style={Styles.logoContainer}>
      <Image style={Styles.logoStyle} source={require("../../assets/logo.jpeg")} />
      <Text>TUESDAY 30 OCT</Text>
      </View>
      {/* <View style={Styles.imgContainer}>
      <Image style={Styles.imgStyle} source={require("../../assets/test.jpeg")} />
      <View style={Styles.viewTextStyle}>
        <Text style={Styles.textStyle}>Stitch Detail Tunic Dress</Text>
        <Text style={Styles.priceTextStyle}>$88.00</Text>
      </View>
      </View> */}
      <View>
      <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    keyExtractor={(item) =>item.id}
     data={img} 
     renderItem={({item})=>{
       return(
         <Pressable onPress={() =>navigation.navigate('Detail',
         {
           item:item,
         })}>
         <View style={Styles.imgContainer}>
         <Image  source={{uri: item.image}} style={Styles.imgStyle}
         ></Image>
         
         <View style={Styles.viewTextStyle}>
          <Text style={Styles.textStyle}>{item. title}</Text>
           <Text style={Styles.priceTextStyle}>{item.price}</Text>
       </View>
         </View>
         </Pressable>




)

}} />


      </View>
      <View>
      <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    keyExtractor={(item) =>item.id}
     data={category} 
     renderItem={({item})=>{
      return(
        <View style={Styles.categoryContainer}>
            <Image source={item.src} style={Styles.imgCategoryStyle}/>
            <Text style={Styles.textCategoryStyle}>{item.title}</Text>
        </View>
      )

      }} />
      </View>

      <View style={Styles.productMainContainer} >
        
        <View style={Styles.textProductContainer}>
          <Text style={Styles.textProduct}>Features Products</Text>
          <View style={Styles.productIconContainer} >
           <Text>Show All</Text>
           <MaterialCommunityIcons  name='greater-than' size={20} color='black'/>

          </View>
          </View>
          
          <View style={Styles.productContainer} >
          
          <FlatList
          
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    keyExtractor={(item) =>item.id}
     data={products} 
     renderItem={({item})=>{
      return(
        <TouchableOpacity >
       <Image  source= {item.src} style={Styles.imgProductStyle}
         ></Image>
        </TouchableOpacity>
      )}} />
        </View>
      </View>
      </View>
     
      

      




     
      
      
  
   
  )
}

const Styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    padding:15
  },
  iconContainer:{
    flexDirection: 'row',
    justifyContent:'space-between'
  },

  imgStyle:{
    marginRight:5,
    width:240,
    height:300,
    justifyContent:'space-between',
    borderRadius:8
    
  
    
   
  },
  imgContainer:{
    marginTop:15,
    // width:'100%',
    // height:'40%'
  },
  logoStyle:{
    width:100,
    height:30,
    marginBottom:5
  },
  viewTextStyle:{
     position:'absolute',
     left:30,
     top:220,
     width:'60%'
     
     
   
  },
  priceTextStyle:{
   color:'white'
  },
  logoContainer:{
    marginTop:10
  },
  textStyle:{

fontSize:16,
fontWeight:'bold',
color:'white'
  },
  categoryContainer:{
    marginTop:15,
    width:52,
    justifyContent:'space-between',
    alignItems:'center'
  },
  imgCategoryStyle:{
     
     width:48,
     height:48,
     
    borderRadius:50,
    borderWidth:1,
    borderColor:'deepskyblue',
  },
  
  productContainer:{
    
     marginTop:10,
     justifyContent:'space-between'
  },
  textProduct:{
    fontSize:16,
    fontWeight:'bold',
  },
  
  productIconContainer:{
    flexDirection:'row'
  },
  productMainContainer:{
    marginTop:20,
    
  },
  textProductContainer:{
   flexDirection:'row',
   justifyContent:'space-between'
   
  },
  imgProductStyle:{
    width:100,
    height:120,
    marginRight:10
  }
})
export default Home;


