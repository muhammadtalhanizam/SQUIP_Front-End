
import React, { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import Alovera from '../assets/homepage/aloevera.png'
import BirdsNest from '../assets/homepage/birdsNest.png'
import Croton from '../assets/homepage/croton.png'
import Watermelon from '../assets/homepage/watermelon.png'
import Peperomia from '../assets/homepage/Peperomia.png'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    Image,
    TextInput,
    Pressable,
    TouchableWithoutFeedback,
    useColorScheme,
    View,
    TouchableOpacity,
} from 'react-native';
import styles from './style';
import axios from 'axios';
import { BASE_URL } from '../config';
function Bag({ navigation, route }) {
    let [userId, setUserId] = useState(0)

    const [productArray, setProductArray] = useState([])
    const [sum, setSum] = useState(0)
    const [refresh, setRefresh] = useState(false)
    // let [product, setProduct] = useState([
    //     {
    //         id: 1,
    //         name: "Peperomia",
    //         product: "Air Purifier",
    //         price: "$400",
    //         source: Peperomia,
    //         bgColor: "#9CE5CB",
    //         bio: "No green thumb required to keep our artificial watermelon peperomia plant looking lively and lush anywhere you place it.",
    //         size: "5''"
    //     },
    //     {
    //         id: 2,
    //         name: "Watermelon",
    //         product: "Air Purifier",
    //         price: "$300",
    //         source: Watermelon,
    //         bgColor: "#FFE899",
    //         bio: "No green thumb required to keep our artificial watermelon peperomia plant looking lively and lush anywhere you place it.",
    //         size: "5''"
    //     },
    //     {
    //         id: 3,
    //         name: "Croton Petra",
    //         product: "Air Purifier",
    //         price: "$200",
    //         source: Croton,
    //         bgColor: "#56D1A7",
    //         bio: "No green thumb required to keep our artificial watermelon peperomia plant looking lively and lush anywhere you place it.",
    //         size: "5''"
    //     },
    //     {
    //         id: 4,
    //         name: "Bird's Nest Fern",
    //         product: "Air Purifier",
    //         price: "$160",
    //         source: BirdsNest,
    //         bgColor: "#B2E28D",
    //         bio: "No green thumb required to keep our artificial watermelon peperomia plant looking lively and lush anywhere you place it.",
    //         size: "5''"
    //     },
    //     {
    //         id: 5,
    //         name: "Cactus",
    //         product: "Air Purifier",
    //         price: "$260",
    //         source: Croton,
    //         bgColor: "#DEEC8A",
    //         bio: "No green thumb required to keep our artificial watermelon peperomia plant looking lively and lush anywhere you place it.",

    //     },
    //     {
    //         id: 6,
    //         name: "Aloe Vera",
    //         product: "Air Purifier",
    //         price: "$210",
    //         source: Alovera,
    //         bgColor: "#F5EDA8",
    //         bio: "No green thumb required to keep our artificial watermelon peperomia plant looking lively and lush anywhere you place it.",
    //         size: "5''"
    //     }
    // ])
    // let checkUser = () => {
    //     const user = auth().currentUser;
    //     if (user) {
    //         // User is signed in, see docs for a list of available properties
    //         // https://firebase.google.com/docs/reference/js/firebase.User
    //         // ...
    //         var uid = user.uid;
    //         console.log(uid)
    //         setUserId(uid)
    //     } else {
    //         // No user is signed in.
    //     }
    // }
    // useEffect(() => {
    //     checkUser()
    // }, [])
    const [cart, setCart] = useState([]);
    let incrementCount = (product) => {
        let updatedCart = [...productArray];
        let productIndex = updatedCart.findIndex(p => p._id === product._id);

        if (productIndex === -1) {
            updatedCart.push({ ...product, quantity: 1 });
        } else {
            let quantity = updatedCart[productIndex].quantity++;
            //    let price = updatedCart[productIndex].price++ 
            // updatedCart[productIndex].price = (parseInt(product.price.slice(1), 10) + product.priceIncrement);
            // updatedCart[productIndex].price = (product.price.substring(1) * updatedCart[productIndex].quantity).toString();
            updatedCart[productIndex].price = (product.price.substring(1) * updatedCart[productIndex].quantity).toString();
            updatedCart[productIndex].price = "$" + updatedCart[productIndex].price;

            let totalPrice = 0;

            updatedCart.forEach(item => {
                let price = parseInt(item.price.replace('$', ''));
                totalPrice += price;
            });
            // console.log(totalPrice);

            setSum(totalPrice)
            // console.log(price)
        }

        setProductArray(updatedCart);
        console.log(productArray)
    };

    let decrementCount = (product) => {
        let updatedCart = [...productArray];
        let productIndex = updatedCart.findIndex(p => p._id === product._id);

        if (productIndex !== -1) {
            updatedCart[productIndex].quantity--;

            if (updatedCart[productIndex].quantity === 0) {
                updatedCart = updatedCart.filter(p => p._id !== product._id);
            }
        }

        setCart(updatedCart);
        // console.log(cart_id)
    };

    const deleteProduct = (id) => {
        console.log(id, "id");
        axios.delete(`${BASE_URL}cartproduct/${id}`)
            .then((res) => {
                if (res.data.status) {
                    //true
                    setRefresh(!refresh);
                    console.log(res.data, "true")
                } else {
                    //false
                    alert(res.data.message);
                    console.log(res.data, "false")

                }
            }
            )
            .catch(
                (error) => { console.log(error, "error") }
            )
    }
    useEffect(() => {
        axios.get(`${BASE_URL}cartproduct`).then(
            (response) => {
                let data = response.data.data
                // setProductArray([...new Set(data.map(item => item.id))])

                let totalPrice = 0;

                data.forEach(item => {
                    let price = parseInt(item.price.replace('$', ''));
                    totalPrice += price;
                });
                // console.log(totalPrice);

                setSum(totalPrice)
                setProductArray(data)
                // console.log(data, "productarray");
            }
        ).catch(
            (err) => { console.log(err, "error") }
        )


    }, [refresh])
    return <View style={[styles.h100, styles.bgWhite,]}>
        {/* -----------------------------appbar */}
        <View style={[styles.flexRow, styles.p2, styles.alignItemsCenter, styles.justifyContentBetween]}>
            <Image source={require('../assets/plantify.jpg')} style={[{ width: 180, height: 40 }]} />


            <View style={styles.flexRow}>

                <TouchableOpacity style={[]}>
                    <Icon color={styles._black} size={30} style={[styles.mx1]} name="notifications" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('togglemenu')} style={[]}>
                    <Icon color={styles._black} size={30} style={[styles.mx1]} name="menu" />
                </TouchableOpacity>
            </View>
        </View>

        {/* -------------------------------body */}
        <ScrollView >
            <View style={[styles.p2]}>
                {/* ------------------------banner image */}

                <Text style={[styles.textGreen, styles.fs1, styles.mx1, styles.mb1, styles.textBold]}>Your Bag</Text>

                {/* //-----------------------links */}


                {/*//-------------------------products  */}
                <View style={[styles.m1]}>
                    {
                        productArray.map((e) => {



                            return <View onPress={() => navigation.navigate('ProductDetails', e)} key={e._id} style={[styles.my1, styles.positionRelative, styles.flexRow]}>
                                <Image source={e.source} style={[styles.rounded, { width: 45, height: 60, zIndex: 1 }]} />
                                <View style={[styles.py1, styles.px1]}>
                                    <View style={[styles.flexRow, styles.w100, styles.alignItemsStart, styles.mb1]}>
                                        <Text style={[styles.textBlack, styles.fs6, styles.w70]}>{e.name} </Text>
                                        <Icon color={styles._green} size={20} style={[]} name="bookmark-border" />
                                        <Text style={[styles.textBlack, styles.fs6]}>{e.price}</Text>

                                    </View>

                                    <View style={[styles.flexRow, styles.alignItemsCenter,]}>
                                        <TouchableOpacity onPress={() => incrementCount(e)}>
                                            <Icon color={styles._danger} style={[styles.border1, { padding: 2, borderRadius: 7, width: 20 }]} size={15} name="add" />
                                        </TouchableOpacity>
                                        <Text style={[styles.textBlack, styles.fs6, styles.mx1, styles.textBold,]}>{e.quantity}</Text>
                                        <TouchableOpacity onPress={() => decrementCount(e)} >
                                            <Icon color={styles._green} size={15} style={[styles.border1, { padding: 2, borderRadius: 7, width: 20 }]} name="remove" />

                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => deleteProduct(e._id)}>
                                            <Icon color={styles._green} size={20} style={[styles.mx2]} name="delete" />
                                        </TouchableOpacity>

                                    </View>
                                </View>
                            </View>
                        })
                    }
                </View>

                <View>
                    <View style={[styles.my1, styles.positionRelative, styles.flexRow, styles.alignItemsCenter]}>
                        <View style={[{ backgroundColor: "#E3FDF4" }, styles.p1, styles.rounded]}>
                            <Icon color={styles._green} size={40} style={[]} name="local-shipping" />
                        </View>

                        <View style={[styles.py1, styles.px1]}>
                            <View style={[styles.flexRow, styles.w100, styles.alignItemsStart, styles.mb1]}>
                                <Text style={[styles.textBlack, styles.fs6, styles.w70, styles.textBold]}>Delivery </Text>
                                {/* <Icon color={styles._green} size={20} style={[]} name="bookmark-border" /> */}
                                <Text style={[styles.textBlack, styles.fs6, styles.textBold]}>$80</Text>

                            </View>

                            <View style={[styles.w100, styles.alignItemsStart, styles.mb1]}>

                                <Text style={[styles.textBlack, styles.fs6,]}>Order above ₹1200 to get free delivery </Text>
                                <Text style={[styles.textGreen, styles.fs6,]}>Shop for more ₹190</Text>

                            </View>
                        </View>
                    </View>

                    <View style={[styles.my1, styles.positionRelative, styles.flexRow, styles.alignItemsCenter]}>
                        <View style={[{ backgroundColor: "#E3FDF4" }, styles.p1, styles.rounded]}>
                            <Icon color={styles._green} size={40} style={[]} name="local-offer" />
                        </View>

                        <View style={[styles.py1, styles.px1]}>
                            <View style={[styles.flexRow, styles.w100, styles.alignItemsStart, styles.mb1]}>
                                <Text style={[styles.textBlack, styles.fs6, styles.w70, styles.textBold]}>Apply Coupon</Text>
                                <Icon color={styles._green} size={20} style={[]} name="horizontal-rule" />
                            </View>
                        </View>
                    </View>

                    <View style={[styles.w100, styles.justifyContentBetween, styles.flexRow]}>

                        <Text style={[styles.textBlack, styles.fs4, styles.textBold]}>Total</Text>
                        <Text style={[styles.textGreen, styles.fs4, styles.textBold]}>${sum}</Text>

                    </View>
                </View>


            </View>
        </ScrollView>

        <TouchableOpacity onPress={()=>navigation.navigate("order",)} style={[styles.flexRow, styles.bgGreen,styles.justifyContentBetween,styles.px2,styles.p2,styles.shadow3,{borderTopLeftRadius:30,borderTopRightRadius:30}]}>
            <Text style={[styles.textLight, styles.fs5, styles.textBold]}>Checkout</Text>
            <Text style={[styles.textLight, styles.fs5, styles.textBold]}>${sum}</Text>

        </TouchableOpacity>

    </View>
}

export default Bag;
