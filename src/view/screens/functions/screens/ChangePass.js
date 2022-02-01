import React, { useContext, useState, useEffect } from 'react';
import useForm from "react-hooks-form-validator";
import { TouchableWithoutFeedback } from 'react-native';
import { Layout, Text, Input, CheckBox, Icon } from '@ui-kitten/components';
import DataContext from 'model/context/context';
import { changePass } from "model/smsFunction";
import { styles } from 'res/styles/styles'
import { strings } from "res/strings";
import Btn from 'model/Btn'

const formConfig = {

    oldPass: {
        validationFns: [
            (fieldValue, formValue) => {
                const isPasswordSame = fieldValue == formValue.oldPassData;
                return [isPasswordSame, strings.devicesStrings.oldPassErr];
            }
        ]
    },

    newPass: {
        required: { errorMsg: strings.devicesStrings.passNullErr },
        min: { errorMsg: strings.devicesStrings.newPassErr, length: 4 },
    },

    oldPassData: {},
    newPass2: {
        required: { errorMsg: strings.devicesStrings.passNullErr },
        validationFns: [
            (fieldValue, formValue) => {
                const isPasswordSame = fieldValue == formValue.newPass;
                return [isPasswordSame, strings.devicesStrings.passErr];
            }
        ]
    },

};


function ChangePassScreen({ route, navigation }) {

    const [fields, formData] = useForm(formConfig);
    const { data } = useContext(DataContext)
    const [oldPassSecureTextEntry, setOldPassSecureTextEntry] = React.useState(true);
    const [newPassSecureTextEntry, setNewPassSecureTextEntry] = React.useState(true);
    const [newPass2SecureTextEntry, setNewPass2SecureTextEntry] = React.useState(true);

    useEffect(() => { data.isSelect().then(data => fields.oldPassData.setValue(data.devicePass)) }, [])
    function handleConfirm() {
        data.isSelect().then(data => changePass(data.devicePhone, fields.oldPass.value, fields.newPass.value))
        data.changeDevicePass(fields.newPass.value)
            .then((e) => {
                console.log(e);
                navigation.goBack()
            })
        return
    }

    const oldPassRenderIcon = (props) => (
        <TouchableWithoutFeedback onPress={() => setOldPassSecureTextEntry(!oldPassSecureTextEntry)}>
            <Icon {...props} name={oldPassSecureTextEntry ? 'eye-off' : 'eye'} />
        </TouchableWithoutFeedback>
    );

    const newPassRenderIcon = (props) => (
        <TouchableWithoutFeedback onPress={() => setNewPassSecureTextEntry(!newPassSecureTextEntry)}>
            <Icon {...props} name={newPassSecureTextEntry ? 'eye-off' : 'eye'} />
        </TouchableWithoutFeedback>
    );

    const newPass2RenderIcon = (props) => (
        <TouchableWithoutFeedback onPress={() => setNewPass2SecureTextEntry(!newPass2SecureTextEntry)}>
            <Icon {...props} name={newPass2SecureTextEntry ? 'eye-off' : 'eye'} />
        </TouchableWithoutFeedback>
    );

    return (
        <Layout style={styles.layoutCenter}>

            <Text category='h5' style={styles.titles} >{strings.devicesStrings.changePass}</Text>

            <Input
                style={!fields.oldPass.errorMsg ? styles.input : styles.inputErr}
                autoCapitalize="none"
                placeholder={strings.devicesStrings.oldPass}
                caption={() => { return <Text status={'danger'} category='p2'>{fields.oldPass.errorMsg}</Text> }}
                accessoryRight={oldPassRenderIcon}
                secureTextEntry={oldPassSecureTextEntry}
                onChangeText={fields.oldPass.setValue}
                value={fields.oldPass.value}
            />

            <Input
                style={!fields.newPass.errorMsg ? styles.input : styles.inputErr}
                autoCapitalize="none"
                placeholder={strings.devicesStrings.newPass}
                caption={() => { return <Text status={'danger'} category='p2'>{fields.newPass.errorMsg}</Text> }}
                accessoryRight={newPassRenderIcon}
                secureTextEntry={newPassSecureTextEntry}
                onChangeText={fields.newPass.setValue}
                value={fields.newPass.value}
            />

            <Input
                style={!fields.newPass2.errorMsg ? styles.input : styles.inputErr}
                autoCapitalize="none"
                placeholder={strings.devicesStrings.newPass2}
                caption={() => { return <Text status={'danger'} category='p2'>{fields.newPass2.errorMsg}</Text> }}
                accessoryRight={newPass2RenderIcon}
                secureTextEntry={newPass2SecureTextEntry}
                onChangeText={fields.newPass2.setValue}
                value={fields.newPass2.value}
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

export default ChangePassScreen