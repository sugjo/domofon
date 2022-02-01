import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import { styles } from 'res/styles/styles'
import { LogBox } from 'react-native';
import { factoryReset } from "model/smsFunction";
import { RestartIcon, RemoveIcon } from "res/icons";
import { strings } from "res/strings";
import Btn from 'model/Btn'
import myAlert from 'model/myAlert'

LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
]);

function EditDeviceScreen({ route, navigation }) {
    const { index, data, reload } = route.params

    function deviceDel() {
        data.dellDevice(index)
        reload()
        navigation.goBack()
    }

    const currentDeviceData = data.data[index]

    return (
        <Layout style={styles.layout}>
            <Text style={styles.heading} category='h5'>{currentDeviceData.deviceName}: {currentDeviceData.deviceName.length > 15 ? '\n' : ''} {currentDeviceData.devicePhone}</Text>
            <Btn
                LeftIcon={RestartIcon}
                onPress={() => factoryReset(currentDeviceData.devicePhone, currentDeviceData.devicePass)}
                text={strings.devicesStrings.factoryReset}
            />
            <Btn
                LeftIcon={RemoveIcon}
                onPress={() => myAlert(strings.alerts.EditDeviceAlertTitle, strings.alerts.EditDeviceAlertText, { func: deviceDel })}
                text={strings.devicesStrings.del}
            />
        </Layout>
    )
}

export default EditDeviceScreen