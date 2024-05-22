import React, { useState,memo } from 'react';
import { StyleSheet, View, Linking, Image, Switch, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import AboutIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import PrivacyIcon from 'react-native-vector-icons/MaterialIcons';
import ToggleIcon from 'react-native-vector-icons/Feather';
import { useAuthContext } from '../Navigations/AuthContext';

const CustomDrawer = ({ navigation, ...props }) => {
  const aboutUsURL = 'https://mslm.io/jamaat/about';
  const privacyUsURL = 'https://mslm.io/jamaat/privacy-policy';
  const { themeMode, toggleThemeMode } = useAuthContext();

  const aboutUs = () => {
    Linking.openURL(aboutUsURL);
  };

  const privacy = () => {
    Linking.openURL(privacyUsURL);
  };

  return (
    <View style={[{ flex: 1 }, themeMode == "dark" && { backgroundColor: "#26272C" }]}>
      <DrawerContentScrollView {...props}>
        <View style={{ marginTop: 15 }}>
          <DrawerItem
            icon={() => <AboutIcon name='message-alert-outline' size={25} color={'#0a9484'} />}
            label={'About Us'}
            labelStyle={[styles.txtcolor, themeMode == "dark" && { color: "#fff" }]}
            onPress={aboutUs}
          />
          <DrawerItem
            icon={() => <PrivacyIcon name='privacy-tip' size={25} color={'#0a9484'} />}
            label={'Privacy Policy'}
            labelStyle={[styles.txtcolor, themeMode == 'dark' && { color: '#fff' }]}
            onPress={privacy}
          />
          <DrawerItem
            icon={() => (
              <Image
                source={require('../src/Images/app.png')}
                style={styles.drawerImage}
                resizeMode="contain"
              />
            )}
            label={'MoreApps'}
            labelStyle={[styles.txtcolor, themeMode == "dark" && { color: "#fff" }]}
            onPress={() => navigation.navigate('MoreApps')}
          />
          <View style={styles.drawerItem}>
            <ToggleIcon name='eye' size={25} color={'#0a9484'} />
            <View style={styles.drawerItemLabelContainer}>
              <Text style={[styles.drawerItemLabel, themeMode == "dark" && { color: "#fff" }]}>Dark Mode</Text>
              <Switch
                trackColor={{ false: '#767577', true: '#0C8A7C' }}
                thumbColor={themeMode === "dark" ? '#0a9484' : '#f4f3f4'}
                onValueChange={toggleThemeMode}
                value={themeMode === "dark"}
              // style={styles.switch}
              />
            </View>
          </View>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};
export default memo(CustomDrawer);

const styles = StyleSheet.create({
  drawerImage: {
    height: 25,
    width: 25,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    paddingVertical: 10,
  },
  drawerItemLabelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    paddingRight: 16,
  },
  drawerItemLabel: {
    fontSize: 13,
    color: '#000',
    marginLeft: 32,
    fontWeight: '500'
  },
  switch: {
    transform: [{ scaleX: 1 }, { scaleY: 1 }],
  },
  txtcolor: {
    color: '#000',
    fontSize: 13,
    color: '#000',
    fontWeight: '500'
  }
});

