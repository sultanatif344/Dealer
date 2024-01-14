import React, { useState } from 'react'
import { ScrollView, View } from 'react-native';
import { Card, Text, Button, TextInput } from 'react-native-paper';
import { COLORS } from '../../constants/constants';
const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View >
                <Card
                    style={{
                        backgroundColor: 'white',
                        padding: 10,
                        display: 'flex',
                        height: 400,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Card.Content style={{ gap: 20 }}>
                        <Text variant="titleLarge" style={{ color: 'black', textAlign: 'center', fontWeight: 'bold' }}>Sign In To Dealer 360</Text>
                        <Text variant="bodySmall" style={{ textAlign: 'center' }}>Please enter your details to sign in</Text>
                        <TextInput
                            label="Email/cellphone #"
                            value={email}
                            mode='outlined'
                            style={{ backgroundColor: 'white' }}
                            onChangeText={text => setEmail(text)}
                        />
                        <TextInput
                            label="Password"
                            value={password}
                            mode='outlined'
                            secureTextEntry={true}
                            style={{ backgroundColor: 'white' }}
                            onChangeText={text => setPassword(text)}
                        />

                        <View>
                            <Text onPress={() => navigation.navigate("SignUp")} style={{
                                color: 'grey',
                                textAlign: 'center',
                                fontSize: 14,
                                fontFamily: "Nunito",
                                fontWeight: 400
                            }}>Forgot Password?</Text>
                        </View>

                        <Button style={{ borderRadius: 10, width: 300 }} rippleColor={'white'} mode="contained" textColor='white' buttonColor={COLORS.primary}>
                            Login
                        </Button>
                    </Card.Content>
                </Card>
            </View>
        </View>
    )
}

export default SignIn