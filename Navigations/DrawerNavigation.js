import { StyleSheet, View, Image, Text } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigation from './BottomTabNavigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomDrawer from '../Components/CustomDrawer';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator
        screenOptions={{
            headerShown: false,
           
          }}
            drawerContent={(props) => (
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={{ height: 190, width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#0a9484' }}>
                        <View style={styles.logoImage}>
                            <Image source={require('../src/Images/logo.jpg')} style={{ height: 80, width: 80, borderRadius: 10 }} />
                        </View>
                        <Text style={{ marginTop: 10, fontSize: 17, fontWeight: "700", color: "#fff" }}>Hadith</Text>
                    </View>
                    <CustomDrawer {...props} />
                </SafeAreaView>
            )}
        >
            <Drawer.Screen
                name="BottomTabNavigation"
                component={BottomTabNavigation}

            />

        </Drawer.Navigator>


    );
};

export default DrawerNavigation;

const styles = StyleSheet.create({
    logoImage: {
        justifyContent: "center",
        alignItems: "center",
        height: 90,
        width: 90,
        borderRadius: 20,
        elevation: 10,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 1,
    }
});
