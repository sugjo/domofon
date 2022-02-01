import React from 'react';
import { setMaxCallTime } from "model/smsFunction";
import { Layout, Text } from '@ui-kitten/components';
import Slider from '@react-native-community/slider';
import { styles } from 'res/styles/styles';
import { strings } from "res/strings";
import Btn from 'model/Btn';

function SetMaxCallTime({ navigation }) {

    const [TimeData, setTimeData] = React.useState(10)

    function confirm() {
        setMaxCallTime(TimeData)
        navigation.goBack()
        return;
    }

    return (
        <Layout style={styles.layoutCenter}>

            <Text category='h5' style={styles.title}> {strings.functionsStrings.setMaxCallTime}{"\n"}{TimeData} (мин)</Text>

            <Slider
                style={{...styles.input, ...styles.slider}}
                minimumValue={1}
                maximumValue={10}
                minimumTrackTintColor="#3366FF"
                maximumTrackTintColor="#3366FF"
                thumbTintColor="#3366FF"
                step={1}
                onValueChange={val => setTimeData(val)}
            />

            <Btn
                isConfirm={true}
                onPress={confirm}
                text={strings.Confirm}
            />

        </Layout>
    )
}

export default SetMaxCallTime