import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from './../screens/Home/Home'
import Profile from './../screens/Profile/Profile'

const Tab = createBottomTabNavigator();
const tabOptions = {
    showLabel: false,
    style: {
        height:60,
        position: 'absolute',
        bottom: 20,
        marginHorizontal: 12,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowOffset: {
            width: 10,
            height: 10
        }
    },

};
const Tabs2 = () => {
    return (
        <Tab.Navigator
            tabBarOptions={tabOptions}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    const tintColor = focused ? '#DA4D5F' : '#8B8B98';
                    switch (route.name) {
                        case "Home":
                            return (
                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <Image
                                        source={require('./../assets/icons/home.png')}
                                        resizeMode="contain"
                                        style={{
                                            tintColor: tintColor,
                                            width: 22,
                                            height: 22
                                        }}
                                    />
                                </View>
                            );
                        case "Chat":
                            return (
                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <Image
                                        source={require('./../assets/icons/comment.png')}
                                        resizeMode="contain"
                                        style={{
                                            tintColor: tintColor,
                                            width: 22,
                                            height: 22
                                        }}
                                    />
                                </View>
                            );
                        case "Profile":
                            return (
                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <Image
                                        source={require('./../assets/icons/user.png')}
                                        resizeMode="contain"
                                        style={{
                                            tintColor: tintColor,
                                            width: 22,
                                            height: 22
                                        }}
                                    />
                                </View>
                            );
                        case "Wishlist":
                            return (
                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <Image
                                        source={require('./../assets/icons/heart.png')}
                                        resizeMode="contain"
                                        style={{
                                            tintColor: tintColor,
                                            width: 22,
                                            height: 22
                                        }}
                                    />
                                </View>
                            );
                    }
                }
            })}

        >
            <Tab.Screen
                name="Home"
                component={Home}
            />
            <Tab.Screen
                name="Chat"
                component={Profile}
            />
            <Tab.Screen
                name="Wishlist"
                component={Profile}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
            />

        </Tab.Navigator>
    );
};

export default Tabs2;