import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Searchbar, Card } from 'react-native-paper';
import { COLORS } from '../../constants/constants';


const Dashboard = () => {
    const [searchQuery, setSearchQuery] = useState("");
    return (
        <>
            <Searchbar
                placeholder="Search Product..."
                onChangeText={setSearchQuery}
                value={searchQuery}
                style={styles.searchBarStyle}
                icon={require('../../assets/Images/searchIcon.png')}
                placeholderTextColor={COLORS.gray}
            />

            <ScrollView>
                <View style={{ marginTop: 40 }}>
                    <Card mode='outlined' style={{
                        height: 280
                    }} theme={{
                        colors: {
                            surface: COLORS.white,
                            outline: COLORS.primary
                        }
                    }}>
                        <Card.Title title="Inventory" titleStyle={{
                            color: COLORS.black,
                            fontSize: 20,
                            fontWeight: '700'
                        }} />

                        {/* <Card.Content style={{ display: 'flex', flexDirection: 'row' }}> </Card.Content> */}
                        <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 5 }}>
                            <Card
                                style={{
                                    width: 190
                                }}
                                mode='outlined' theme={{
                                    colors: {
                                        surface: COLORS.white,
                                        outline: COLORS.primary
                                    }
                                }}>
                                <Card.Title title="2" titleStyle={{
                                    color: COLORS.black,
                                    fontSize: 20,
                                    fontWeight: '700'
                                }} />
                                <Card.Content>
                                    <Text style={{ color: COLORS.gray }}>Total</Text>
                                </Card.Content>
                            </Card>

                            <Card
                                style={{
                                    width: 190
                                }}
                                mode='outlined' theme={{
                                    colors: {
                                        surface: COLORS.white,
                                        outline: COLORS.primary
                                    }
                                }}>
                                <Card.Title title="0" titleStyle={{
                                    color: COLORS.black,
                                    fontSize: 20,
                                    fontWeight: '700'
                                }} />
                                <Card.Content>
                                    <Text style={{ color: COLORS.gray }}>Latest</Text>
                                </Card.Content>
                            </Card>

                            <Card
                                style={{
                                    width: 190
                                }}
                                mode='outlined' theme={{
                                    colors: {
                                        surface: COLORS.white,
                                        outline: COLORS.primary
                                    }
                                }}>
                                <Card.Title title="0" titleStyle={{
                                    color: COLORS.black,
                                    fontSize: 20,
                                    fontWeight: '700'
                                }} />
                                <Card.Content>
                                    <Text style={{ color: COLORS.gray }}>........</Text>
                                </Card.Content>
                            </Card>

                            <Card
                                style={{
                                    width: 190
                                }}
                                mode='outlined' theme={{
                                    colors: {
                                        surface: COLORS.white,
                                        outline: COLORS.primary
                                    }
                                }}>
                                <Card.Title title="0" titleStyle={{
                                    color: COLORS.black,
                                    fontSize: 20,
                                    fontWeight: '700'
                                }} />
                                <Card.Content>
                                    <Text style={{ color: COLORS.gray }}>........</Text>
                                </Card.Content>
                            </Card>
                        </View>


                    </Card>
                </View>

                <>
                    <Card
                        style={{
                            height: 100,
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'flex-start',

                        }}
                        mode='outlined' theme={{
                            colors: {
                                surface: COLORS.white,
                                outline: COLORS.primary
                            }
                        }}>
                        <Card.Title titleStyle={{
                            color: COLORS.black,
                            fontSize: 20,
                            fontWeight: '700'
                        }} />

                        <Image style={{ width: 50, height: 50, borderRadius: 20, resizeMode: 'stretch' }} source={require('../../assets/Images/chevorlet.png')} />
                    </Card>

                    <Card
                        style={{
                            height: 100
                        }}
                        mode='outlined' theme={{
                            colors: {
                                surface: COLORS.white,
                                outline: COLORS.primary
                            }
                        }}>
                        <Card.Title titleStyle={{
                            color: COLORS.black,
                            fontSize: 20,
                            fontWeight: '700'
                        }} />
                        <Card.Content>
                            <Image style={{ width: 50, height: 50, borderRadius: 20, resizeMode: 'stretch' }} source={require('../../assets/Images/twinpower.png')} />
                        </Card.Content>
                    </Card>

                    <Card
                        style={{
                            height: 100,
                        }}
                        mode='outlined' theme={{
                            colors: {
                                surface: COLORS.white,
                                outline: COLORS.primary
                            }
                        }}>
                        <Card.Title titleStyle={{
                            color: COLORS.black,
                            fontSize: 20,
                            fontWeight: '700'
                        }} />

                        <Image style={{ width: 80, height: 100, borderRadius: 20, resizeMode: 'stretch' }} source={require('../../assets/Images/landcruiser.png')} />
                    </Card>
                </>
            </ScrollView>
        </>
    )
}

export default Dashboard

const styles = StyleSheet.create({

    cardStyle: {
        backgroundColor: COLORS.white,
        border: '1px',
        borderColor: COLORS.lightprimary,
        borderRadius: 80,
    },
    searchBarStyle: {
        backgroundColor: COLORS.lightprimary,
        color: COLORS.gray,
        border: '1px',
        borderColor: COLORS.lightprimary,
        borderRadius: 0,
    }
})