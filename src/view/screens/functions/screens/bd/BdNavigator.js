import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { bdLoad, bdUplad } from "model/smsFunction";
import Btn from 'model/Btn'
import { styles } from 'res/styles/styles'
import { ArrowForwardIcon } from "res/icons";
import { Send } from 'res/icons'
import { Layout } from '@ui-kitten/components';
import BdReg from "./BdReg";
const { Screen, Navigator } = createStackNavigator();

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

function FunctionsNavigator() {

    const [confirm, setConfirm] = React.useState(true)

    function isConfirm() {
        if (!confirm) return
        setConfirm(false)
        wait(1000).then(() => setConfirm(true))
    }

    const BdMain = ({ navigation }) => {
        return (
            <Layout style={styles.layout}>

                <Btn
                    RightIcon={ArrowForwardIcon}
                    text={"Зарегитрировать"}
                    onPress={() => confirm && (navigation.navigate('BdReg'), isConfirm())}
                />

                <Btn
                    RightIcon={Send}
                    text={"Запись на устройство"}
                    onPress={() => confirm && bdLoad()}
                />

                <Btn
                    RightIcon={Send}
                    text={"Запись на сервер"}
                    onPress={() => confirm && bdUplad()}
                />

            </Layout>
        )
    }

    return (
        <Navigator initialRouteName="BdMain">
            <Screen name="BdMain" component={BdMain} options={{ headerShown: false }} />
            <Screen name="BdReg" component={BdReg} options={{ title: `Регистрация БД` }} />
        </Navigator>
    )
}

export default FunctionsNavigator;