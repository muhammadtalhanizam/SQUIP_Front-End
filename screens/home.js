
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
function Home({ navigation, route }) {
    let [user, setUser] = useState(0)
    let [product, setProduct] = useState([
        {
            id: 1,
            name: "Ambulance",
            navigate: 'ambulance',
            source: 'https://img.icons8.com/external-justicon-flat-justicon/64/null/external-ambulance-hospital-and-medical-justicon-flat-justicon.png',
        },
        {
            id: 2,
            name: "Fire brigadee",
            navigate: 'firebrigade',
            source: 'https://img.icons8.com/emoji/96/null/fire-engine.png',
        },
        {
            id: 3,
            name: "Police",
            navigate: 'police',
            source: 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-police-emergency-service-flaticons-lineal-color-flat-icons.png',
        },
    ])
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
    useEffect(() => {
        // let obj = route.params
        //  setUser(obj)
        // console.log(obj,"543")
    }, [])
    return <View style={[styles.h100, styles.bgWhite,]}>
        <View style={[styles.flexRow, styles.p2, styles.alignItemsCenter, styles.justifyContentBetween]}>
            <View style={[styles.flexRow]}>
                <Image source={require('../assets/navlogo.png')} style={[{ width: 150, height: 40 }]} />

                {/* <Image source={{ uri: 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-emergency-emergency-service-flaticons-lineal-color-flat-icons.png' }} style={[{ width: 60, height: 60 }]} /> */}
                {/* <Text style={[styles.textBlack, styles.fs2, styles.m1, styles.textBold]}>SQuiP</Text> */}
            </View>

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
        <View >
            <View style={[styles.p2,styles.justifyContentCenter,styles.alignItemsCenter]}>
                {/* ------------------------banner image */}
                <Image source={require('../assets/splashlogo.png')} style={[styles.rounded, styles.mb3, { width: 240, height: 150, }]} />

                {/* <View style={[styles.flexRow, styles.justifyContentBetween]}>
                    <View style={[{ borderColor: styles._black, borderWidth: 1, }, styles.w75, styles.flexRow, styles.alignItemsCenter, styles.rounded, styles.px2]}>
                        <Icon name="search" color={"black"} size={30} />
                        <TextInput placeholder='Search ' onChangeText={(e) => { setPassword(e) }} placeholderTextColor={"black"} style={[styles.w75, styles.fs5, styles.px2]} />
                        <Icon name="filter-center-focus" color={"black"} size={30} />
                    </View>
                    <View style={[{ borderColor: styles._black, borderWidth: 1, }, styles.w20, styles.flexRow, styles.alignItemsCenter, styles.rounded, styles.px2]}>

                        <Icon name="tune" color={"black"} size={30} />
                    </View>

                </View> */}



                {/*//-------------------------products  */}
                <View style={[ styles.m1,styles.w100, styles.flexWrap,styles.flexRow,styles.alignItemsCenter,styles.justifyContentCenter]}>
                    {
                        product.map((e) => {
                            return <TouchableOpacity onPress={() => navigation.navigate(e.navigate, e)} key={e.id} style={[styles.bgRed, styles.w40, styles.m1, styles.mb1,styles.alignItemsCenter,styles.py1,styles.rounded,styles.shadow5]}>
                                <Image source={{ uri: e.source }} style={[styles.rounded, styles.mb1, { width: 100, height: 100, }]} />
                                <View>
                                    <Text style={[styles.textLight, styles.fs5, styles.mx1, styles.mb1, styles.textBold]}>{e.name}</Text>
                                </View>
                            </TouchableOpacity>
                        })
                    }
                </View>


            </View>
        </View>

    </View>
}

export default Home;
