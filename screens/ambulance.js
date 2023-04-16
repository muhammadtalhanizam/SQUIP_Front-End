import React, { useEffect, useState } from 'react'
import { ScrollView, Alert, StyleSheet, Text, TextInput, Pressable, Button, View, Image, TouchableOpacity, ActivityIndicator, Modal } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import MYButton from '../components/MYButton'
import styles from './style'
import Alovera from '../assets/homepage/aloevera.png'
import BirdsNest from '../assets/homepage/birdsNest.png'
import Croton from '../assets/homepage/croton.png'
import Watermelon from '../assets/homepage/watermelon.png'
import Peperomia from '../assets/homepage/Peperomia.png'
import Scan from '../assets/scan.png'
import axios from 'axios'
import { ToastAndroid } from 'react-native/Libraries/Components/ToastAndroid/ToastAndroid'
import { BASE_URL } from '../config'
import AppMap from './map'

export default function Ambulance({ navigation, route }) {
    let [iconName, setIconName] = useState("")
    let [isloading, setLoader] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);
    const [requestType, setRequestType] = useState();
    const [longitude, setLongitude] = useState("24.8607");
    const [latitude, setLatitude] = useState("67.0011");


    let request = () => {
        // console.log(e)
        // setLoader(true)

        const objToSend = {
            // id: "01",
            longitude:longitude,
            latitude:latitude,
            requestName:"Ambulance",
            requestType:requestType,

           
        };
        axios.post(`${BASE_URL}request`, objToSend)
            .then((res) => {
                console.log(res.data, "response");
                if (res.data.status) {
                    //true
                    
                    // ToastAndroid.show(res.data.message, ToastAndroid.SHORT)
                    console.log(res.data.message)
                    
                    setModalVisible(!modalVisible)
                    setLoader(false)
                } else {
                    //false
                    console.log(res.data.message)
                    // alert(res.data.message)

                    ToastAndroid.show(res.data.message, ToastAndroid.SHORT)
                    setLoader(false)

                }
            }
            ).catch(
                (error) => { console.log(error, "error") }
            )
    }


    return (
        <View style={[styles.h100, styles.bgWhite,]}>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={[styles.centeredView, styles.w100]}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>{requestType}</Text>
                        <TextInput placeholder='Longitude ' onChangeText={(e) => { setLongitude(e) }} placeholderTextColor={"black"} style={[styles.w75, styles.fs5, styles.px2,styles.border1,styles.p1,styles.mb1,styles.rounded]} />
                        <TextInput placeholder='Latitude' onChangeText={(e) => { setLatitude(e) }} placeholderTextColor={"black"} style={[styles.w75, styles.fs5, styles.px2,styles.border1,styles.p1,styles.mb1,styles.rounded]} />
                      <View style={[styles.flexRow,styles.justifyContentBetween]}>
                        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={[styles.bgRed, styles.w80, styles.p1, styles.flexCenter, styles.mb2, styles.px3, { borderRadius: 50 }]}>
                            <Text style={[styles.textLight, styles.fs5]}>{isloading ? <ActivityIndicator color={styles._white} size={"small"} /> : "cancel"}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={request} style={[styles.bgRed, styles.w80, styles.p1, styles.flexCenter, styles.mb2, styles.px3, { borderRadius: 50 }]}>
                            <Text style={[styles.textLight, styles.fs5]}>{isloading ? <ActivityIndicator color={styles._white} size={"small"} /> : "Request"}</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                </View>
            </Modal>
            <View style={[styles.h60]}>
                <AppMap />
            </View>
            <View style={[styles.bgWhite, styles.w100, styles.p3,]}>
                <TouchableOpacity onPress={() => setModalVisible(true,setRequestType("Medical Emergency"))} style={[styles.bgRed, styles.w100, styles.p1, styles.flexCenter, styles.mb2, styles.px3, { borderRadius: 50 }]}>
                    <Text style={[styles.textLight, styles.fs5]}>{isloading ? <ActivityIndicator color={styles._white} size={"small"} /> : "Medical Emergency"}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalVisible(true,setRequestType("Fire"))} style={[styles.bgRed, styles.w100, styles.p1, styles.flexCenter, styles.mb2, styles.px3, { borderRadius: 50 }]}>
                    <Text style={[styles.textLight, styles.fs5]}>{isloading ? <ActivityIndicator color={styles._white} size={"small"} /> : "Fire"}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalVisible(true,setRequestType("Accident"))} style={[styles.bgRed, styles.w100, styles.p1, styles.flexCenter, styles.mb2, styles.px3, { borderRadius: 50 }]}>
                    <Text style={[styles.textLight, styles.fs5]}>{isloading ? <ActivityIndicator color={styles._white} size={"small"} /> : "Accident"}</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}
