import { View, Text, StyleSheet, Animated } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Chip } from 'react-native-paper';
const Splash = ({ navigation }) => {
    const [opacityAnim] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(opacityAnim, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: false, // Improves performance
        }).start();

        setTimeout(() => {
            navigation.navigate("SignIn")
        }, 5000)
    }, []);

    return (
        <>
            <View style={styles.container}>
                <Chip style={styles.label} onPress={() => console.log('Pressed')}>Automatic Lot</Chip>
                <Animated.Text style={{ opacity: opacityAnim, ...styles.headingstyle }}>Lorem Ipsum Dolor Sit</Animated.Text>
                <Animated.Text style={{ opacity: opacityAnim, ...styles.subheadingstyle }}>Risus in hendrerit gravida rutrum quisque non tellus orci. Commodo odio aenean sed adipiscing diam donec adipiscing tristique risus.</Animated.Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 30,
        paddingStart: 30
    },
    label: { width: 140, backgroundColor: 'black', borderRadius: 80 },
    headingstyle: {
        fontSize: 48,
        fontWeight: '300',
        color: 'black'
    },
    subheadingstyle: {
        fontSize: 13,
        fontWeight: '300',
        color: 'black',
        width: 320
    }
})

export default Splash