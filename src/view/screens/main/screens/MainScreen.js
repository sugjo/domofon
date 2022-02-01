import React from 'react';
import { Layout } from '@ui-kitten/components';
import { getOperator, setAdmin } from "model/smsFunction";
import DataContext from 'model/context/context';
import Header from 'model/Header'
import Btn from 'model/Btn'
import { styles } from 'res/styles/styles'
import { ArrowForwardIcon } from "res/icons";
import { strings } from "res/strings";
import { AddUser, SerchUser, DelUser, AddCallCenter, GetCallCenter, AdminIcon, Send } from 'res/icons'

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

const FunctionsScreen = ({ navigation }) => {

    const [confirm, setConfirm] = React.useState(true)
    const { data } = React.useContext(DataContext)
    function isConfirm() {
        if (!confirm) return
        setConfirm(false)
        wait(1000).then(() => setConfirm(true))
    }

    return (
        <Layout style={styles.layout}>
            <Header />
            <Layout style={styles.layout}>

                <Btn
                    LeftIcon={AddUser}
                    RightIcon={ArrowForwardIcon}
                    text={strings.mainStrings.setUser}
                    onPress={() => confirm && (navigation.navigate('SetUser'), isConfirm())}
                />

                <Btn
                    LeftIcon={SerchUser}
                    RightIcon={ArrowForwardIcon}
                    text={strings.mainStrings.serchUser}
                    onPress={() => confirm && (navigation.navigate('SerchUser'), isConfirm())}
                />

                <Btn
                    LeftIcon={DelUser}
                    RightIcon={ArrowForwardIcon}
                    text={strings.mainStrings.delUser}
                    onPress={() => confirm && (navigation.navigate('DelUser'), isConfirm())}
                />

                <Btn
                    LeftIcon={AddCallCenter}
                    RightIcon={ArrowForwardIcon}
                    text={strings.mainStrings.setOperator}
                    onPress={() => confirm && (navigation.navigate('SetOperator'), isConfirm())}
                />

                <Btn
                    LeftIcon={GetCallCenter}
                    RightIcon={Send}
                    text={strings.mainStrings.getOperator}
                    onPress={() => confirm && getOperator()}
                />

                <Btn
                    LeftIcon={AdminIcon}
                    RightIcon={Send}
                    onPress={() => confirm && data.isSelect().then(data => setAdmin(data.devicePhone, data.devicePass))}
                    text={strings.devicesStrings.setAdmin}
                />

            </Layout>
        </Layout>
    );
};

export default FunctionsScreen;