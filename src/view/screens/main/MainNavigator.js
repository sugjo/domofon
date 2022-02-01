import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from "./screens/MainScreen";
import SetUser from "./screens/SetUser";
import DelUser from "./screens/DelUser";
import SerchUser from "./screens/SerchUser";
import SetOperator from "./screens/SetOperator";
import GetOperator from "./screens/GetOperator";
import { strings } from "res/strings";

const { Screen, Navigator } = createStackNavigator();

function MainNavigator() {
  return (
    <Navigator initialRouteName="functionsScreen">
      <Screen name="MainScreen" component={MainScreen} options={{ headerShown: false } }/>
      <Screen name="SetUser" component={SetUser} options={{ title: strings.mainStrings.setUser }} />
      <Screen name="SerchUser" component={SerchUser} options={{ title: strings.mainStrings.serchUser }} />
      <Screen name="DelUser" component={DelUser} options={{ title: strings.mainStrings.delUser }} />
      <Screen name="SetOperator" component={SetOperator} options={{ title: strings.mainStrings.setOperator }} />
      <Screen name="GetOperator" component={GetOperator} options={{ title: strings.mainStrings.getOperator }} />
    </Navigator>
  )
}

export default MainNavigator;