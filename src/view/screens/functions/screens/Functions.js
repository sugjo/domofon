import React from 'react';
import { Layout } from '@ui-kitten/components';
import { switchSmsForwarding, getStatus } from "model/smsFunction";
import DataContext from 'model/context/context';
import Header from 'model/Header'
import Btn from 'model/Btn'
import { styles } from 'res/styles/styles'
import { ArrowForwardIcon } from "res/icons";
import { strings } from "res/strings";
import { Time, ReleOpenTime, Resend, OnOff, SetPhoneMode, AutoOpen, Status, PassIcon, Server, Send } from 'res/icons'

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
                    LeftIcon={OnOff}
                    RightIcon={ArrowForwardIcon}
                    text={strings.functionsStrings.ReleOn}
                    onPress={() => confirm && (navigation.navigate('ReleOn'), isConfirm())}
                />

                <Btn
                    LeftIcon={PassIcon}
                    RightIcon={ArrowForwardIcon}
                    onPress={() => navigation.navigate('ChangePass')}
                    text={strings.devicesStrings.changePass}
                />

                <Btn
                    LeftIcon={AutoOpen}
                    RightIcon={ArrowForwardIcon}
                    text={strings.functionsStrings.SwitchAutoOpen}
                    onPress={() => confirm && (navigation.navigate('SwitchAutoOpen'), isConfirm())}
                />

                <Btn
                    LeftIcon={SetPhoneMode}
                    RightIcon={ArrowForwardIcon}
                    text={strings.functionsStrings.SetPhoneMode}
                    onPress={() => confirm && (navigation.navigate('SetPhoneMode'), isConfirm())}
                />

                <Btn
                    LeftIcon={Server}
                    RightIcon={ArrowForwardIcon}
                    text={'База данных'}
                    onPress={() => confirm && (navigation.navigate('BdNavigator'), isConfirm())}
                />

                <Btn
                    LeftIcon={ReleOpenTime}
                    RightIcon={ArrowForwardIcon}
                    text={strings.functionsStrings.SetReleOpenTime}
                    onPress={() => confirm && (navigation.navigate('SetReleOpenTime'), isConfirm())}
                />

                <Btn
                    LeftIcon={Time}
                    RightIcon={ArrowForwardIcon}
                    text={strings.functionsStrings.SetMaxCallTime}
                    onPress={() => confirm && (navigation.navigate('SetMaxCallTime'), isConfirm())}
                />

                <Btn
                    RightIcon={Send}
                    LeftIcon={Resend}
                    text={strings.functionsStrings.SwitchSmsForwarding}
                    onPress={() => confirm && switchSmsForwarding()}
                />

                <Btn
                    RightIcon={Send}
                    LeftIcon={Status}
                    text={strings.mainStrings.getStatus}
                    onPress={() => confirm && getStatus()}
                />

            </Layout>
        </Layout>
    );
};

export default FunctionsScreen;