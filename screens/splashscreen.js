import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './style'

export default function SplashScreen({ navigation }) {
  let [isloading, setLoader] = useState(false)

  let navigateScreen = () => {
    navigation.navigate("Login")
    // navigation.navigate("BottomNav")

  }
  return (<>
    <View style={[styles._black, styles.textBlack, styles.w100, styles.h100, styles.bgWhite,styles.w100,styles.justifyContentCenter]}>
      <View style={[styles.p2,styles.mt5,styles.justifyContentCenter,styles.alignItemsCenter]}>

      <Image source={require('../assets/splashlogo.png')} style={[{ width:300,height:300, },styles.mt3]} />
      </View>
      <View style={[styles.p2,styles.alignItemsCenter]}>

        {/* <Text style={[{ fontFamily: "sanserif" }, styles.textCenter,styles.textRed, styles.fsxl, styles.w70, styles.mb1, styles.textBold]}>SQUIP</Text>
        <Text style={[styles.textRed, styles.fs6, styles.mb2, styles.w100,styles.textCenter   ]}>Safe and Quick Pakistan</Text> */}

        <TouchableOpacity onPress={navigateScreen} style={[styles.bgRed, styles.w100, styles.p1, styles.flexCenter, styles.mb2, styles.px3, { borderRadius: 50 }]}>
          <Text style={[styles.textLight, styles.textBold, styles.fs5]}>{isloading ? <ActivityIndicator color={styles._white} size={"small"} /> : "Start"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  </>
  )
}
