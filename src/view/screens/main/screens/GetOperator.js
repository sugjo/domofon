import React, { useContext } from 'react';
import { Alert } from 'react-native';
import { Layout, Text, Input } from '@ui-kitten/components';
import { styles } from 'res/styles/styles'
import { LogBox } from 'react-native';
import DataContext from 'model/context/context';
import strings from "res/strings";
import Btn from 'model/Btn'

LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
]);

function GetOperator({ navigation }) {

    const { data, setData } = useContext(DataContext)
    let currentDeviceData = 1

    const [newPassData, setDeviceData] = React.useState({
        OldPass: '',
        OldPassValid: true,
        OldPassChanged: false,

        NewPass: '',
        NewPassValid: true,
        NewPassChanged: false,

        NewPass2: '',
        NewPass2Valid: true,
        NewPass22Caption: 'Пароль не может быть пустым',
        newPass2Changed: false,
    })

    const oldPassChange = (val) => {
        if ((val.trim().length !== 0) && (currentDeviceData.devicePass == val)) {
            setDeviceData({ ...newPassData, OldPass: val, OldPassValid: true, OldPassChanged: true, })
        } else {
            setDeviceData({ ...newPassData, OldPass: val, OldPassValid: false, OldPassChanged: false, })
        }
    }

    const NewPassChange = (val) => {
        if (val.trim().length !== 0) {
            setDeviceData({ ...newPassData, NewPass: val, NewPassValid: true, NewPassChanged: true, })
        } else {
            setDeviceData({ ...newPassData, NewPass: val, NewPassValid: false, NewPassChanged: false, })
        }
    }

    const NewPass2Change = (val) => {
        if (val.trim().length !== 0) {
            newPassData.NewPass == val ?
                setDeviceData({ ...newPassData, NewPass2: val, NewPass2Valid: true, NewPass2Changed: true, }) :
                setDeviceData({ ...newPassData, NewPass2: val, NewPass2Valid: false, NewPass2Changed: false, NewPass2Caption: 'Пароли не совпадают', });
        } else {
            setDeviceData({ ...newPassData, NewPass2: val, NewPass2Valid: false, NewPass2Changed: false, })
        }
    }

    const confirm = () => {

        const deviceCorrect = () => {
            return newPassData.OldPassChanged && newPassData.NewPassChanged && newPassData.NewPass2Changed && (newPassData.NewPass == newPassData.NewPass2)
        }

        if (deviceCorrect()) {
            console.log(data.getSelectDevice(index))
            data.changeDevicePass(index, newPassData.NewPass)
            console.log(data.getSelectDevice(index))
            navigation.goBack()
            return;
        }

        Alert.alert(
            strings.devicesStrings.AddDeviceStrings.AlertTitle,
            (newPassData.NewPass == newPassData.NewPass2)?
            strings.devicesStrings.AddDeviceStrings.AlertText:
            'Пароли не совпадают',
            [
                { text: 'Ok' }
            ]);
        return;

    }

    return (
        <Layout style={styles.layoutCenter}>

            <Text category='h5'>{strings.devicesStrings.DevicesStrings.AddDevice}</Text>

            <Input
                style={newPassData.OldPassValid ? styles.input : styles.inputErr}
                autoCapitalize="none"
                placeholder={'Старый пароль'}
                caption={() => { return <Text status={'danger'} category='p2'>{newPassData.OldPassValid ? '' : 'Введите существующий пароль'}</Text> }}
                onChangeText={(val) => oldPassChange(val)}
                onEndEditing={(e) => oldPassChange(e.nativeEvent.text)}
            />

            <Input
                style={newPassData.NewPassValid ? styles.input : styles.inputErr}
                autoCapitalize="none"
                placeholder={'Новый пароль'}
                caption={() => { return <Text status={'danger'} category='p2'>{newPassData.NewPassValid ? '' : 'Пароль не может быть пустым'}</Text> }}
                onChangeText={(val) => NewPassChange(val)}
                onEndEditing={(e) => NewPassChange(e.nativeEvent.text)}
            />

            <Input
                style={newPassData.NewPass2Valid ? styles.input : styles.inputErr}
                disabled={newPassData.NewPassChanged? false: true}
                autoCapitalize="none"
                placeholder={'Повторите пароль'}
                caption={() => { return <Text status={'danger'} category='p2'>{newPassData.NewPass2Valid ? '' : `${newPassData.NewPass2Caption}`}</Text> }}
                onChangeText={(val) => NewPass2Change(val)}
                onEndEditing={(e) => NewPass2Change(e.nativeEvent.text)}
            />

            <Btn
                isConfirm={true}
                onPress={confirm}
                text={strings.devicesStrings.AddDeviceStrings.Confirm}
            />

        </Layout>
    )
}

export default GetOperator