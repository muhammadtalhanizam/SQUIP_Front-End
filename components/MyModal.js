import React from 'react'
import { Modal, Text, View } from 'react-native'
import styles from '../screens/style'

export default function MYModal(props) {
    let { close, open, message, heading } = props

    let reqestClose = () => {
        close(false)
    }
    return (<>
        <Modal style={[styles.bgTransparent,styles.alignItemsCenter,styles.justifyContentCenter,styles.p2]} onRequestClose={reqestClose} visible={open}>
            <View style={[styles.bgWhite,styles.w100,styles.h40]}>
                <Text style={[styles.textBlack]}>{heading}</Text>
                <Text style={[styles.textBlack]}s>{message}</Text>
            </View>
        </Modal>
    </>
    )
}
