import React from 'react';
import { releOn } from "model/smsFunction";
import { Layout, Text } from '@ui-kitten/components';
import { Send } from "res/icons";
import { styles } from 'res/styles/styles'
import { strings } from "res/strings";
import Btn from 'model/Btn'

function ReleOn({ navigation }) {

    return (
        <Layout style={styles.layout}>


            <Btn
                RightIcon={Send}
                onPress={() => releOn('1')}
                text={"1 (Обсудить название)"}
            />

            <Btn
                RightIcon={Send}
                onPress={() => releOn('3')}
                text={"3 (Обсудить название)"}
            />

            <Btn
                RightIcon={Send}
                onPress={() => releOn('4')}
                text={"4 (Обсудить название)"}
            />

            <Btn
                RightIcon={Send}
                onPress={() => releOn('9')}
                text={"9 (Обсудить название)"}
            />

        </Layout>
    )
}

export default ReleOn