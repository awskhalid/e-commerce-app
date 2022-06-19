import { View, Text ,Alert } from 'react-native'
import React from 'react'

export const cartContext = React.createContext();
export const CartProvider = ({children})=>{
    const [cart , setCartOnly] = React.useState([]);

    const addCart = (item, quantity) => {
        if (item.stock_quantity < 1) {
          Alert.alert(strings['Out Of Stock']);
          return;
        } 
       
        // else if (cart?.findIndex(obj => obj.id === item.id) !== -1) {
        // } 
        else if (cart?.findIndex(obj => obj.id === item.id) !== -1) {
          Alert.alert('Item_is_already_added_into_cart');
          return;
        } 
        // else if (item.stock_quantity < quantity) {
        //   Alert.alert('Not Enough Stock Available');
        //   return;
        // }
        const newCart = [...cart, {...item, quantity: quantity || 1}];
        // AsyncStorage.setItem('cart', JSON.stringify(newCart), () => {}); 
        setCartOnly(newCart);
        // showToast(strings['PRODUCT_ADDED_TO_CART'], strings['SUCCESS'], 'success');
        Alert.alert('PRODUCT ADDED TO CART')
     
    };
    const removeCart = item => {
      Alert.alert('ok')
      const newCart = cart?.filter(obj => obj.id !== item.id);
      // AsyncStorage.setItem('cart', JSON.stringify(newCart), () => {});
      setCartOnly(newCart);
      // showToast(strings['Product Removed From Cart'],strings['SUCCESS'],'success',);
      Alert.alert('itemDelete')
    };
    const incrementCart = item => {
      const newCart = cart?.map(obj => {
        if (obj.id === item.id) {
          if (obj.quantity + 1 > item.stock_quantity) {
            Alert.alert(strings['No More Items']);
          } else {
            return {...obj, quantity: obj.quantity + 1};
          }
        }
        return obj;
      });
      // AsyncStorage.setItem('cart', JSON.stringify(newCart), () => {});
      setCartOnly(newCart);
    };
    const decrementCart = item => {
      const newCart = cart?.map(obj => {
        if (obj.id === item.id) {
          if (obj.quantity - 1 <= 0) {
            Alert.alert('Product Quantity Cannot be Reduced');
          } else {
            return {...obj, quantity: obj.quantity - 1};
          }
        }
        return obj;
      });
    
      // AsyncStorage.setItem('cart', JSON.stringify(newCart), () => {});
      setCartOnly(newCart);
    };
    return(
        <cartContext.Provider value={[
            cart,
            addCart,
            removeCart,
            incrementCart,
            decrementCart

        ]}>
           {children}
        </cartContext.Provider>
    )

}














 

