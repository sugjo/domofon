import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FunctionsScreen from "./screens/Functions";
import SetMaxCallTime from './screens/SetMaxCallTime';
import SetReleOpenTime from './screens/SetReleOpenTime';
import SwitchAutoOpen from './screens/SwitchAutoOpen';
import SetPhoneMode from './screens/SetPhoneMode'
import ChangePass from './screens/ChangePass'
import ReleOn from './screens/ReleOn';
import BdNavigator from './screens/bd/BdNavigator';
import { strings } from "res/strings";
const { Screen, Navigator } = createStackNavigator();

function FunctionsNavigator() {
  return (
    <Navigator initialRouteName="functionsScreen">
      <Screen name="FunctionsScreen" component={FunctionsScreen} options={{ headerShown: false } }/>
      <Screen name="SetMaxCallTime" component={SetMaxCallTime} options={{ title: strings.functionsStrings.SetMaxCallTime }} />
      <Screen name="SetReleOpenTime" component={SetReleOpenTime} options={{ title: strings.functionsStrings.SetReleOpenTime }} />
      <Screen name="ReleOn" component={ReleOn} options={{ title: strings.functionsStrings.ReleOn }} />
      <Screen name="SetPhoneMode" component={SetPhoneMode} options={{ title: strings.functionsStrings.SetPhoneMode }} />
      <Screen name="SwitchAutoOpen" component={SwitchAutoOpen} options={{ title: strings.functionsStrings.SwitchAutoOpen }} />
      <Screen name="ChangePass" component={ChangePass} options={{ title: `${strings.devicesStrings.ChangePassScreen}` }} />
      <Screen name="BdNavigator" component={BdNavigator} options={{ title: `База данных` }} />
    </Navigator>
  )
}

export default FunctionsNavigator;