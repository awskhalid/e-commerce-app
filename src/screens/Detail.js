import {Text, Image, StyleSheet, ScrollView, TouchableOpacity, width,View } from 'react-native'
import React, { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Bottom from '../Bottom';
import { cartContext } from '../Context/cartContext';



const Detail = ({ route, navigation }) => {
  const[cart,addCart, removeCart] = React.useContext(cartContext);
   const item = route?.params?.item || {};
  
  const [features, setfeatures] = useState('description');
  return (
    <ScrollView>
      <View style={Styles.mainContainer}>
        <View style={Styles.iconContainer}>

          <AntDesign name='left' size={25} color='black' />
          <Image style={Styles.logoStyle} source={require("../../assets/logo.jpeg")} />

          <View style={Styles.cartContainer}>

            <MaterialIcons style={Styles.favStyle} name='favorite-border' size={25} color='black' />
            <View>
            <TouchableOpacity
                onPress={() => navigation.navigate('Cart')}>
                  <View style={{flexDirection:'row'}}>
                <Text style={Styles.addtocarticon}> {cart ? cart?.length : 0}</Text>
                 <AntDesign name="shoppingcart" size={25} color="black"/>
                 </View>
              </TouchableOpacity>
            </View>

          </View>

        </View>

        <View style={Styles.descriptionContainer}>
          <View>

            <Image source={{ uri: route?.params?.item.image }} style={{ width: 250, height: 300 }} />

          </View>
          <View style={Styles.circularButtonContainer}>
            <Text style={Styles.circularButton}> S </Text>
            <Text style={Styles.circularButton}> XL </Text>
          </View>
          <View style={Styles.curveButtonContainer}>
            <Text style={Styles.curveButton}> Medium </Text>
            <Text style={Styles.curveButton}> Short </Text>
            <Text style={Styles.curveButton}> Tall </Text>
          </View>
          <View >
            <Text style={Styles.titleStyle}>{route?.params?.item.title}</Text>
            <Text style={Styles.priceStyle}>{route?.params?.item.price}</Text>

          </View>
          <View style={Styles.reviewContainer}>
            <Image style={Styles.reviewStyle} source={require("../../assets/review.jpeg")} />
            <Text style={Styles.numberStyle}>(3)</Text>
            <Text>Review</Text>
          </View>
        </View>
                           {/* DFR */}
        <View style={Styles.descriptionBox}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              marginBottom:150,
            }}>
            <TouchableOpacity onPress={() =>setfeatures('description')}>
              <Text style={Styles.titleStyless}>Description</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setfeatures('feature')}>
              <Text style={Styles.titleStyless}>Features</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setfeatures('review')}>
              <Text style={Styles.titleStyless}>Reviews</Text>
            </TouchableOpacity>
          </View>
          <View style={{ top: 80, right: 210 }}>
            {features == 'description' ? (
              <View>
                <Text>{route?.params?.item.description}</Text>
                <Text>{route?.params?.item.reviews}</Text>
              </View>
            ) : null}
            {features == 'feature' ? (
              <View>
                <Text>{route?.params?.item.features}</Text>
                <Text >oooooolight weight</Text>
              </View>
            ) : null}
            {features == 'review' ? (
              <View>
                <Text style={Styles.t2}>{route?.params?.item.reviews}</Text>
                <Text style={Styles.t2}>{route?.params?.item.features}</Text>
              </View>
            ) : null}
          </View>
        </View>
                                {/* DFR */}
      </View>
      <View style={Styles.bottomIconContainer}>
        <View style={Styles.bottomContainer}>
          <AntDesign name='sharealt' size={25} color='black' />
          <MaterialIcons name='favorite-border' size={25} color='black' />
          <AntDesign name='shoppingcart' size={25} color='black' />
        </View>
        <View style={Styles.bottomButtonContainer}>
          <TouchableOpacity onPress={() => addCart(item,1)}
            style={Styles.buttonStyle}>
            <Text style={Styles.buttonText}>BUY NOW</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  )
}


const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    margin: 15
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  logoStyle: {
    width: 100,
    height: 30,
  },
  cartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  descriptionContainer: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  reviewStyle: {
    width: 100,
    height: 20,
    marginRight: 5
  },
  circularButtonContainer: {
    flexDirection: 'row',



  },
  circularButton: {

    padding: 10,
    marginTop: 15,
    margin: 5,
    width: 40,
    height: 40,
    fontWeight: 'bold',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'gray',

  },
  innerbox: {
    width: '40%',
    borderBottomColor: 'skyblue',
    borderBottomWidth: 2,
  },
  curveButtonContainer: {
    flexDirection: 'row',
    marginTop: 10,

  },
  curveButton: {
    marginRight: 10,
    padding: 7,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: 'gray',
    fontWeight: 'bold',
    width: 75,
    height: 35,

    borderRadius: 30,

  },
  reviewContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  titleStyle: {
    marginTop: 10,
    right: 10,
    fontSize: 22,
    fontWeight: 'bold',

  },
  priceStyle: {
    left: 90,
    fontSize: 18,
    marginTop: 5
  },
  numberStyle: {
    marginRight: 5
  },
  descriptionBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    height: 190,
    backgroundColor: 'ghostwhite'

  },
  descriptionText: {
    fontWeight: 'bold',
    fontSize: 16
  },
  bottomIconContainer: {
    flexDirection: 'row',


  },

  buttonText: {
    left: 50,
    color: 'white',
    marginTop: 15

  },
  bottomContainer: {
    width: '50%',
    height: 50,

    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10
  },
  bottomButtonContainer: {
    width: '50%',
    height: 50,
    backgroundColor: 'deepskyblue'
  },
  favStyle:{
    marginRight:10
  },
  titleStyless:{
    fontWeight:'bold',
    fontSize:16
  }




});
export default Detail;