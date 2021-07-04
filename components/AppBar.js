import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';


const AppBar = () => {
    const navigation = useNavigation(); 
    return (
        <View style={styles.container} >
            <TouchableOpacity onPress={ () => navigation.openDrawer()}>
                <Image style={{ width: 25, height: 25 }} source={require('./../assets/icons/menu.png')} />
            </TouchableOpacity>
            <View>
                <Text>Setup Project</Text>
            </View>
            <View>
                <Image style={styles.profileAvatar} source={require('./../assets/img/Raaz.jpg')} />
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 50,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    profileAvatar:{
        width:35,
        height:35,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:17
    }
})

export default AppBar;