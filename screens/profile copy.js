import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import React, { useEffect, useState } from 'react'
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './style';
import MYButton from '../components/MYButton';

export default function Profile() {
    let [model, setModel] = useState({})
    let [profileInfo, setProfileInfo] = useState([])
    let [userId, setUserId] = useState()
    let [editcontact, setContact] = useState()
    let [editName, setName] = useState()
    let [edit, setEdit] = useState(false)

    // let checkUser = () => {
    //     const user = auth().currentUser;
    //     if (user) {
    //         // User is signed in, see docs for a list of available properties
    //         // https://firebase.google.com/docs/reference/js/firebase.User
    //         // ...
    //         var uid = user.uid;
    //         setUserId(uid)
    //         console.log(userId)
    //         database().ref('users/').on('value', dt => {
    //             let li = Object.values(dt.val());
    //             let filterUser = li.filter(x => x.id == uid)
    //             setProfileInfo([...filterUser])
    //             // console.log(profileInfo)
    //             //   updateStarCount(postElement, data);
    //         });
    //     } else {
    //         // No user is signed in.
    //     }
    // }
    let editProfile = () => {
        setEdit(true)
    }
    let updateProfile = () => {
        database()
            .ref('users/' + userId)
            .update({
                contact: editcontact,
                name: editName
            })
            .then(() => console.log('Data updated.'), setEdit(false));

    }
    useEffect(() => {
        // checkUser()
    }, [])

    return (
        <View style={[styles.h100, styles.p2, , { backgroundColor: "#F6F7FB" }]}>
            {profileInfo.map((e, i) => {
                return <ScrollView key={i}>
                    <View
                        style={[styles.bgWhite, styles.p2, styles.mb2, styles.shadow4, styles.rounded, styles.flexColumn, styles.justifyContentBetween]}
                    >
                        <View style={[styles.flexRow, styles.justifyContentBetween,styles.mb1]}>

                            <Icon color={styles._danger} size={80} name="account-circle" />
                            <TouchableOpacity onPress={edit ? updateProfile : editProfile}>
                                <Text style={[styles.textDanger]}>{edit ? "Confirm" : "Edit"}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.flexRow, styles.justifyContentBetween]}>

                            <Text style={[styles.textBlack, styles.textBold, styles.fs5, styles.mb1]}>Personal Information</Text>
                        </View>
                        <View style={[styles.flexRow, styles.justifyContentBetween]}>
                            <View>
                                <Text style={[styles.textBlack, styles.fs5, styles.mb1]}>Name:</Text>
                                <Text style={[styles.textBlack, styles.fs5, styles.mb1]}>User Name:</Text>
                                <Text style={[styles.textBlack, styles.fs5, styles.mb1]}>Contact:</Text>
                                <Text style={[styles.textBlack, styles.fs5, styles.mb1]}>Email:</Text>
                                <Text style={[styles.textBlack, styles.fs5, styles.mb1]}>Accout Type:</Text>
                                {/* <Text style={[styles.textBlack, styles.fs5, styles.mb1]}>End Point:</Text>
                        <Text style={[styles.textBlack, styles.fs5, styles.mb1]}>Number of Seats:</Text>
                        <Text style={[styles.textBlack, styles.fs5, styles.mb1]}>Price:</Text> */}
                            </View>
                            {edit ?
                                <View>
                                    <TextInput onChangeText={e => setName(e)} placeholder={e.name} placeholderTextColor={styles._black} keyboardType="phone-pad" style={[styles.textBlack, styles.borderBottom1, styles.h20, styles.textRight, { padding: 0, marginBottom: 1 }]} />
                                    <TextInput placeholder={e.username} placeholderTextColor={styles._black} keyboardType="phone-pad" editable={false} style={[styles.textBlack, styles.borderBottom1, styles.h20, styles.textRight, { padding: 0, marginBottom: 1 }]} />
                                    <TextInput onChangeText={e => setContact(e)} placeholder={e.contact.toString()} placeholderTextColor={styles._black} keyboardType="phone-pad" style={[styles.textBlack, styles.borderBottom1, styles.h20, styles.textRight, { padding: 0, marginBottom: 1 }]} />
                                    <TextInput placeholder={e.email} placeholderTextColor={styles._black} keyboardType="phone-pad" editable={false} style={[styles.textBlack, styles.borderBottom1, styles.h20, styles.textRight, { padding: 0 }]} />
                                </View> :
                                <View >
                                    <Text style={[styles.textBlack, styles.fs5, styles.textRight, styles.mb1]}>{e.name}</Text>
                                    <Text style={[styles.textBlack, styles.fs5, styles.textRight, styles.mb1]}>{e.username}</Text>
                                    <Text style={[styles.textBlack, styles.fs5, styles.textRight, styles.mb1]}>{e.contact}</Text>
                                    <Text style={[styles.textBlack, styles.fs5, styles.textRight, styles.mb1]}>{e.email}</Text>
                                    <Text style={[styles.textBlack, styles.fs5, styles.textRight, styles.mb1]}>{e.category}</Text>
                                </View>}
                        </View>
                    </View>
                </ScrollView>
            })}
        </View>
    )
}
