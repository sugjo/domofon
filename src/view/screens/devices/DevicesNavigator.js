import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DevicesScreen from "./devices/DevicesScreen";
import AddDeviceScreen from "./addDevice/AddDeviceScreen";
import EditDeviceNavigator from "./editDevice/EditDeviceNavigator";
import { strings } from 'res/strings'

const { Screen, Navigator } = createStackNavigator();

function DevicesNavigator() {
  return (
    <Navigator initialRouteName="DevicesScreen">
      <Screen name="DevicesScreen" component={DevicesScreen} options={{ headerShown: false }} />
      <Screen name="AddDeviceScreen" component={AddDeviceScreen} options={{ title: strings.devicesStrings.AddDeviceScreen }} />
      <Screen name="EditDeviceNavigator" component={EditDeviceNavigator} options={{ headerShown: false }} />
    </Navigator>
  )
}

export default DevicesNavigator;