import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { DrawerContentScrollView, DrawerItemList, DrawerItem,Drawer } from '@react-navigation/drawer';

const DrawerContent = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <Text>Main Content</Text>
                <Text>Main Content</Text>
                <Text>Main Content</Text>
                <Text>Main Content</Text>
            </DrawerContentScrollView>
            <View style={styles.bottomDrawerSection}>
                <DrawerItem
                    label="Login"
                    onPress={()=>console.log('login')}
               />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    DrawerContent: {
        flex: 1
    },
    bottomDrawerSection:{
        marginBottom:15,
        borderTopColor:'#f4f4f4',
    }
})
export default DrawerContent;