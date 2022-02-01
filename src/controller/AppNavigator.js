import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import { strings } from "res/strings/";
import { DeviceIcon, HomeIcon, EngeneerIcon } from "res/icons";
import DataContext from 'model/context/context';
import DevicesNavigator from 'screens/devices/DevicesNavigator';
import FunctionNavigator from 'screens/functions/FunctionsNavigator';
import MainNavigator from 'screens/main/MainNavigator';
import myAlert from 'model/myAlert'

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabBar = ({ navigation, state }) => {

    const { data } = useContext(DataContext)

    function setCheck(index) {
        data.isSelect().then(res => {
            navigation.navigate(state.routeNames[index])
        }).catch(() => {
            myAlert('Ни одно устройство не выбрано', 'Выберите устройство или создайте новое')
        })
    }

    return (
        <BottomNavigation
            selectedIndex={state.index}
            onSelect={index => setCheck(index) }>
            <BottomNavigationTab title={strings.navigatorsStrings.deviceTitle} icon={HomeIcon} />
            <BottomNavigationTab title={strings.navigatorsStrings.mainTitle} icon={DeviceIcon} />
            <BottomNavigationTab title={strings.navigatorsStrings.functionTitle} icon={EngeneerIcon} />
        </BottomNavigation>
    )
}

const TabNavigator = () => ( //Логика вкладок
    <Navigator tabBar={props => <BottomTabBar  {...props} />}>
        <Screen name="DeviceScreen" component={DevicesNavigator} options={{ title: strings.navigatorsStrings.deviceTitle }} />
        <Screen name="MainScreen" component={MainNavigator} options={{ title: strings.navigatorsStrings.mainTitle }} />
        <Screen name="FunctionScreen" component={FunctionNavigator} options={{ title: strings.navigatorsStrings.functionTitle }} />
    </Navigator>
);

const AppNavigator = () => (
    <NavigationContainer>
        <TabNavigator />
    </NavigationContainer>
);

export default AppNavigator