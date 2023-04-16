import React from 'react'
import { TextInput } from 'react-native'
import styles from '../screens/style'

export default function MYTextInput(props) {
    let {label , onChangeText,textShow,keyboardType,value,editable} =props;
  return (<TextInput
    onChangeText={onChangeText}
    secureTextEntry={textShow}
    placeholder={label}
    value={value}
    editable={editable}
    placeholderTextColor={styles._black}
    keyboardType={keyboardType}
    // keyboardType="phone-pad"
    style={[styles.textBlack,styles.input, {backgroundColor:"white"}, styles.px2,styles.border2]}  />   
  )
}
