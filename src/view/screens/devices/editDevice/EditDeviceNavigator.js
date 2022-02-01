import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import EditDeviceScreen from "./EditDeviceScreen";
import { strings } from 'res/strings'

const { Screen, Navigator } = createStackNavigator();

function EditDeviceNavigator({ route }) {
    const { index, data, reload } = route.params

    return (
        <Navigator initialRouteName="EditDeviceScreen">
            <Screen
                name="EditDeviceScreen"
                component={EditDeviceScreen}
                options={{ title: `${strings.devicesStrings.EditDeviceScreen}` }}
                initialParams={{ index, data, reload }}
            />
        </Navigator>
    )
}

export default EditDeviceNavigator;