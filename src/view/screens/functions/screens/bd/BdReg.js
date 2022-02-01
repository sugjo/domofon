import React, { useContext, useState, useEffect } from 'react';
import useForm from "react-hooks-form-validator";
import { TouchableWithoutFeedback } from 'react-native';
import { Layout, Text, Input, CheckBox, Icon } from '@ui-kitten/components';
import { bdReg } from "model/smsFunction";
import { styles } from 'res/styles/styles'
import { strings } from "res/strings";
import Btn from 'model/Btn'

const formConfig = {

    user: {
        required: { errorMsg: strings.devicesStrings.NullErr }
    },

    pass: {
        required: { errorMsg: strings.devicesStrings.NullErr }
    },

    url: {
        required: { errorMsg: strings.devicesStrings.NullErr }
    },

    name: {
        required: { errorMsg: strings.devicesStrings.NullErr }
    },

};


function BdReg({ navigation }) {

    const [fields, formData] = useForm(formConfig);
    const [passSecureTextEntry, setPassSecureTextEntry] = useState(true);

    function handleConfirm() {
        bdReg(fields.user.value, fields.pass.value, fields.url.value, fields.name.value)
        navigation.goBack()
    }

    const passRenderIcon = (props) => (
        <TouchableWithoutFeedback onPress={() => setPassSecureTextEntry(!passSecureTextEntry)}>
            <Icon {...props} name={passSecureTextEntry ? 'eye-off' : 'eye'} />
        </TouchableWithoutFeedback>
    );

    return (
        <Layout style={styles.layoutCenter}>

            <Text category='h5' style={styles.titles} >{strings.devicesStrings.changePass}</Text>

            <Input
                style={!fields.user.errorMsg ? styles.input : styles.inputErr}
                autoCapitalize="none"
                placeholder={"Логин FTP"}
                caption={() => { return <Text status={'danger'} category='p2'>{fields.user.errorMsg}</Text> }}
                onChangeText={fields.user.setValue}
                value={fields.user.value}
            />

            <Input
                style={!fields.pass.errorMsg ? styles.input : styles.inputErr}
                autoCapitalize="none"
                placeholder={"Пароль FTP"}
                caption={() => { return <Text status={'danger'} category='p2'>{fields.pass.errorMsg}</Text> }}
                accessoryRight={passRenderIcon}
                secureTextEntry={passSecureTextEntry}
                onChangeText={fields.pass.setValue}
                value={fields.pass.value}
            />

            <Input
                style={!fields.url.errorMsg ? styles.input : styles.inputErr}
                autoCapitalize="none"
                placeholder={"Адресс сервера"}
                caption={() => { return <Text status={'danger'} category='p2'>{fields.url.errorMsg}</Text> }}
                onChangeText={fields.url.setValue}
                value={fields.url.value}
            />

            <Input
                style={!fields.name.errorMsg ? styles.input : styles.inputErr}
                autoCapitalize="none"
                placeholder={"Имя БД"}
                caption={() => { return <Text status={'danger'} category='p2'>{fields.name.errorMsg}</Text> }}
                onChangeText={fields.name.setValue}
                value={fields.name.value}
            />

            <Btn
                disabled={!formData.isValid}
                isConfirm={true}
                onPress={handleConfirm}
                text={strings.devicesStrings.ConfirmPass}
            />

        </Layout>
    );
}

export default BdReg