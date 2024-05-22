import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerNavigation from './DrawerNavigation';
import SearchHadith from '../Components/SearchHadith';
import Titles from '../Screens/Titles';
import Hadiths from '../Screens/Hadiths';
import MoreApps from '../Screens/MoreApps';

const Stack = createNativeStackNavigator();

function AppStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
            <Stack.Screen name="SearchHadith" component={SearchHadith} />
            <Stack.Screen name="Titles" component={Titles} />
            <Stack.Screen name="Hadiths" component={Hadiths} />
            <Stack.Screen name="MoreApps" component={MoreApps} />

        </Stack.Navigator>
    );
}

export default AppStack;
