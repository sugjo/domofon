import React from 'react';
import useForm from "react-hooks-form-validator";
import { FlatList, RefreshControl } from 'react-native';
import { Layout, Text, Input, ListItem, Button } from '@ui-kitten/components';
import { RemoveIcon } from "res/icons";
import { setOperator } from "model/smsFunction";
import { styles } from 'res/styles/styles'
import { strings } from "res/strings";
import Btn from 'model/Btn'

const formConfig = {
    user: {
        patterns: [
            {
                regex: strings.regex,
                errorMsg: strings.devicesStrings.DevicePhoneErr
            }
        ]
    },

    phones: {
        validationFns: [
            (fieldValue) => {
                const isPasswordSame = fieldValue < 4;
                return [isPasswordSame, 'Не более 4 операторов'];
            }
        ]
    }

};

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

function SetOperator({ navigation }) {

    const [list, setList] = React.useState([])

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(200).then(() => setRefreshing(false));
    }, []);

    const [fields, formData] = useForm(formConfig);

    function handleConfirm() {
        let phones = []
        list.forEach(e => {
            phones.push(e.phone)
        });
        setOperator(phones.join(""))
        navigation.goBack()
        return
    }

    async function addUser() {
        fields.phones.setValue(list.length)
        list.unshift({
            phone: `+7${fields.user.value}`,
            key: `${Date.now()}`,
        })
        fields.user.setValue(null)
        onRefresh()
    }

    const delUserPhone = (index) => {
        return (
            <Button
                appearance='ghost'
                status='primary'
                accessoryLeft={RemoveIcon}
                onPress={() => {
                    let num = list
                    num.splice(index, 1)
                    setList(num)
                    fields.phones.setValue(list.length)
                    onRefresh()
                }}
            />
        )
    }

    return (
        <Layout style={styles.layoutCenter}>

            <Layout style={styles.deviceContainer}>
                <FlatList
                    ref={(ref) => listRef = ref}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                    data={list}
                    renderItem={({ item, index }) =>
                        <ListItem
                            style={{ ...styles.device, ...styles.shadow }}
                            title={`${item.phone}`}
                            accessoryRight={() => delUserPhone(index)}
                        />
                    }
                />
            </Layout>

            <Text category='h6' status={'warning'}>{list.length > 3 ? strings.mainStrings.setOperatorErr : ''}</Text>
            <Input
                accessoryLeft={() => <Text>+7</Text>}
                disabled={list.length > 3}
                keyboardType='phone-pad'
                style={(!fields.user.errorMsg) ? styles.input : styles.inputErr}
                autoCapitalize="none"
                placeholder={strings.mainStrings.setUserPhone}
                caption={() => { return <Text status={'danger'} category='p2'>{fields.user.errorMsg}</Text> }}
                onChangeText={fields.user.setValue}
                value={fields.user.value}
            />

            <Btn
                disabled={!fields.user.value || !fields.user.isValid}
                isConfirm={true}
                onPress={addUser}
                text={strings.mainStrings.setUserAddPhone}
            />

            <Btn
                disabled={!(fields.phones.isValid && list.length)}
                isConfirm={true}
                onPress={handleConfirm}
                text={strings.mainStrings.setUserConfirm}
            />

        </Layout>
    )
}

export default SetOperator