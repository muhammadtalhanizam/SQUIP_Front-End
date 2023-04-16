import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import React, { useEffect, useState } from 'react'
import { ScrollView, Text, TextInput, TouchableOpacity, View, ToastAndroid,Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './style';
import MYButton from '../components/MYButton';
import axios from 'axios';
import Logo from '../assets/orderlogo.jpg';
import name from '../assets/splashlogo.png';
import { BASE_URL } from '../config';

export default function Profile({ navigation, route }) {


    return (
        <View style={[styles.h100, styles.p2, styles.bgWhite]}>
            <Image source={name} />

        </View>
    )
}
