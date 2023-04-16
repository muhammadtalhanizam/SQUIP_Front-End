import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ActivityIndicator } from 'react-native/Libraries/Components/ActivityIndicator/ActivityIndicator';
import Elipse from '../assets/Ellipse.png';
import OrderLogo from '../assets/orderlogo.jpg';
import styles from './style';

function Menu({ navigation, route }) {
    let [isloading, setLoader] = useState(false)

    return (
        <View style={[styles.w100, styles.h100, styles.bgGreen]}>
            <View style={[styles.mx2,styles.m1, styles.positionRelative,styles.alignItemsEnd]}>
                <TouchableOpacity onPress={() => { navigation.navigate("") }} >
                    <Icon style={{ marginLeft: 3 }} name="close" color={styles._white} size={24} />
                </TouchableOpacity>
            </View>
            <View style={[styles.justifyContentCenter, styles.alignItemsCenter, styles.p2]}>

                <View style={[styles.flexRow, styles.justifyContentBetween, styles.alignItemsCenter, styles.w40, styles.m2]}>
                    <Icon name="storefront" color={styles._white} style={{marginRight:20}} size={35} />
                    <Text style={[styles.textLight, styles.fs5, styles.textCenter, styles.textBold]}>Shop</Text>
                </View>
                <View style={[styles.flexRow, styles.justifyContentBetween, styles.alignItemsCenter, styles.w40, styles.m2]}>
                    <Icon name="grass" color={styles._white} style={{marginRight:20}} size={35} />
                    <Text style={[styles.textLight, styles.fs5, styles.textCenter, styles.textBold]}>Plant Care</Text>
                </View>
                <View style={[styles.flexRow, styles.justifyContentBetween, styles.alignItemsCenter, styles.w40, styles.m2]}>
                    <Icon name="groups" color={styles._white} style={{marginRight:20}} size={35} />
                    <Text style={[styles.textLight, styles.fs5, styles.textCenter, styles.textBold]}>Community</Text>
                </View>
                <View style={[styles.flexRow, styles.justifyContentBetween, styles.alignItemsCenter, styles.w40, styles.m2]}>
                    <Icon name="person" color={styles._white} style={{marginRight:20}} size={35} />
                    <Text style={[styles.textLight, styles.fs5, styles.textCenter, styles.textBold]}>My Account</Text>
                </View>
                <View style={[styles.flexRow, styles.justifyContentBetween, styles.alignItemsCenter, styles.w40,styles.m2, styles.mb5]}>
                    <Icon name="local-shipping" color={styles._white} style={{marginRight:20}} size={35} />
                    <Text style={[styles.textLight, styles.fs5, styles.textCenter, styles.textBold]}>Track Order</Text>
                </View>
                <Text style={[styles.textLight, styles.fs5, styles.w100, styles.textCenter, styles.mb1, styles.textBold]}>Get the dirt.</Text>
                <TextInput placeholderTextColor={"white"} placeholder='Enter Your Email' onChangeText={(e) => { setEmail(e) }} style={[styles.mb2, styles.border1, styles.w100, styles.borderWhite, , styles.px2, styles.textCenter]} />
                <Text style={[styles.textLight, styles.fs5, styles.w100, styles.textCenter, styles.mb1, styles.textBold]}>FAQ</Text>
                <Text style={[styles.textLight, styles.fs5, styles.w100, styles.textCenter, styles.mb1, styles.textBold]}>ABOUT US</Text>
                <Text style={[styles.textLight, styles.fs5, styles.w100, styles.textCenter, styles.mb1, styles.textBold]}>CONTACT US</Text>
            </View>
        </View>
    );
}

export default Menu