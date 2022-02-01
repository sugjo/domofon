import React from 'react';
import { setPhoneMode } from "model/smsFunction";
import { Layout, Text } from '@ui-kitten/components';
import { styles } from 'res/styles/styles'
import { strings } from "res/strings";
import { Send } from 'res/icons'
import Btn from 'model/Btn'

function SetReleOpenTime({ navigation }) {

    return (
        <Layout style={styles.layout}>

            <Btn
                RightIcon={Send}
                onPress={() => setPhoneMode('1')}
                text={strings.functionsStrings.autoOpenOn}
            />

            <Btn
                RightIcon={Send}
                onPress={() => setPhoneMode('0')}
                text={strings.functionsStrings.autoOpenOff}
            />

        </Layout>
    )
}

export default SetReleOpenTime