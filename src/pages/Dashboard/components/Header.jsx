import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../constants/constants'
import { Button } from 'react-native-paper'

const Header = ({ title }) => {
    return (
        <View style={styles.headerBackground}>
            <Text style={{ marginTop: 10, marginLeft: 10 }}>{title}</Text>
            <View style={styles.btnBar}>
                <Button>
                    <Image source={require('../../../assets/Images/add.png')} />
                </Button>
                <Button>
                    <Image source={require('../../../assets/Images/scan.png')} />
                </Button>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerBackground: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: COLORS.black,
        height: 50,
        justifyContent: 'space-between'
    },
    btnBar: {
        display: 'flex',
        flexDirection: 'row',

    }
})