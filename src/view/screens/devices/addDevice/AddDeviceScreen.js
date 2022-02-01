import React, { useContext, useState, useEffect } from 'react';
import useForm from "react-hooks-form-validator";
import { Layout, Text, Input, CheckBox, Icon } from '@ui-kitten/components';
import { TouchableWithoutFeedback } from 'react-native';
import { styles } from 'res/styles/styles'
import Btn from 'model/Btn'
import DataContext from 'model/context/context';
import { LogBox } from 'react-native';
import { setAdmin } from "model/smsFunction";
import { strings } from "res/strings";

LogBox.ignoreLogs([
	'Non-serializable values were found in the navigation state',
]);

const formConfig = {

	DeviceName: {
		required: { errorMsg: strings.devicesStrings.DeviceNameErr },
		patterns: [
			{
				regex: new RegExp(/^.{1,15}$/),
				errorMsg: "Не более 15 символов"
			}
		]
	},
	DeviceDesc: {
		defaultValue: '',
		patterns: [
			{
				regex: new RegExp(/^.{1,25}$/),
				errorMsg: "Не более 25 символов"
			}
		]
	},
	DevicePhone: {
		required: { errorMsg: strings.devicesStrings.passNullErr },
		patterns: [
			{
				regex: strings.regex,
				errorMsg: strings.devicesStrings.DevicePhoneErr
			}
		]
	},
	DevicePass: {
		required: { errorMsg: strings.devicesStrings.DevicePassErr },
	},

};

const AddDeviceScreen = ({ route, navigation }) => {

	const [activeChecked, setActiveChecked] = useState(true);
	const [fields, formData] = useForm(formConfig);
	const { reload } = route.params
	const { data } = useContext(DataContext)
	const [passSecureTextEntry, setPassSecureTextEntry] = React.useState(true);
	let confirm = true

    const passRenderIcon = (props) => (
        <TouchableWithoutFeedback onPress={() => setPassSecureTextEntry(!passSecureTextEntry)}>
            <Icon {...props} name={passSecureTextEntry ? 'eye-off' : 'eye'} />
        </TouchableWithoutFeedback>
    );

	function handleConfirm() {
		if (confirm) {
			confirm = false
			data.addDevice(fields.DeviceName.value, fields.DeviceDesc.value, `+7${fields.DevicePhone.value}`, fields.DevicePass.value)
			activeChecked ? setAdmin(`+7${fields.DevicePhone.value}`, fields.DevicePass.value) : null;
			navigation.goBack()
			reload()
		}
	}

	return (
		<Layout style={styles.layoutCenter}>

			<Text category='h5' style={styles.titles}>{strings.devicesStrings.AddDevice}</Text>

			<Input
				style={!fields.DeviceName.errorMsg ? styles.input : styles.inputErr}
				autoCapitalize="none"
				placeholder={strings.devicesStrings.DeviceName}
				caption={() => { return <Text status={'danger'} category='p2'>{fields.DeviceName.errorMsg}</Text> }}
				onChangeText={fields.DeviceName.setValue}
				value={fields.DeviceName.value}
			/>

			<Input
				style={styles.input}
				style={!fields.DeviceDesc.errorMsg ? styles.input : styles.inputErr}
				autoCapitalize="none"
				placeholder={strings.devicesStrings.DeviceDesc}
				caption={' '}
				caption={() => <Text status={'danger'} category='p2'>{fields.DeviceDesc.errorMsg}</Text> }
				onChangeText={fields.DeviceDesc.setValue}
				value={fields.DeviceDesc.value}
			/>

			<Input
				accessoryLeft={() => <Text>+7</Text>}
				style={!fields.DevicePhone.errorMsg ? styles.input : styles.inputErr}
				keyboardType='phone-pad'
				autoCapitalize="none"
				placeholder={strings.devicesStrings.DevicePhone}
				caption={() => <Text status={'danger'} category='p2'>{fields.DevicePhone.errorMsg}</Text> }
				onChangeText={fields.DevicePhone.setValue}
				value={fields.DevicePhone.value}
			/>

			<Input
				style={!fields.DevicePass.errorMsg ? styles.input : styles.inputErr}
				accessoryRight={passRenderIcon}
                secureTextEntry={passSecureTextEntry}
				autoCapitalize="none"
				placeholder={strings.devicesStrings.DevicePass}
				caption={() => <Text status={'danger'} category='p2'>{fields.DevicePass.errorMsg}</Text> }
				onChangeText={fields.DevicePass.setValue}
				value={fields.DevicePass.value}
			/>

			<CheckBox
				style={styles.checkbox}
				checked={activeChecked}
				onChange={nextChecked => setActiveChecked(nextChecked)}>
				{strings.devicesStrings.setAdmin}
			</CheckBox>

			<Btn
				disabled={!formData.isValid}
				isConfirm={true}
				onPress={handleConfirm}
				text={strings.devicesStrings.AddDeviceConfirm}
			/>

		</Layout>)
}

export default AddDeviceScreen