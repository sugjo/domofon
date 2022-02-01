import React from 'react';
import { setReleOpenTime } from "model/smsFunction";
import { Layout, Text } from '@ui-kitten/components';
import Slider from '@react-native-community/slider';
import { styles } from 'res/styles/styles';
import { strings } from "res/strings";
import Btn from 'model/Btn';

function SetReleOpenTime({ navigation }) {

    const [TimeDataRele, setTimeDataRele] = React.useState(0.8)
    const [TimeDataColl, setTimeDataColl] = React.useState(0.3)

    function confirm() {
        setReleOpenTime(TimeDataRele.toFixed(1), TimeDataColl.toFixed(1))
        navigation.goBack()
        return;
    }

    return (
        <Layout style={styles.layoutCenter}>

            <Text category='h5' style={styles.title}> {"Время замыкания реле"}{"\n"}{TimeDataRele.toFixed(1)} (сек)</Text>

            <Slider
                style={{ ...styles.input, ...styles.slider }}
                minimumValue={0.1}
                maximumValue={20}
                minimumTrackTintColor="#3366FF"
                maximumTrackTintColor="#3366FF"
                thumbTintColor="#3366FF"
                step={0.1}
                onValueChange={val => setTimeDataRele(val)}
            />

            <Text category='h5' style={styles.title}> {"Длительность замыкания выхода"}{"\n"}{TimeDataColl.toFixed(1)} (сек)</Text>

            <Slider
                style={{ ...styles.input, ...styles.slider }}
                minimumValue={0.1}
                maximumValue={20}
                minimumTrackTintColor="#3366FF"
                maximumTrackTintColor="#3366FF"
                thumbTintColor="#3366FF"
                step={0.1}
                onValueChange={val => setTimeDataColl(val)}
            />

            <Btn
                isConfirm={true}
                onPress={confirm}
                text={strings.Confirm}
            />

        </Layout>
    )
}

export default SetReleOpenTime