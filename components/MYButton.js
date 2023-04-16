import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from '../screens/style';

function MYButton(props) {
  const {label, onPress} = props;
  return (
    <>
      <TouchableOpacity onPress={onPress} style={[styles.btn,styles.bgBlack]}>
        <Text style={[styles.textWhite, styles.textCenter, styles.fs4]}>
          {label}
        </Text>
      </TouchableOpacity>
    </>
  );
}
export default MYButton;