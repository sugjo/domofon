import React, { useContext, useEffect, useState } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { Layout, Text, Button, ListItem } from '@ui-kitten/components';
import { SettingsIcon, ArrowForwardIcon, CreateIcon, RemoveIcon } from "res/icons";
import { styles } from 'res/styles/styles'
import Btn from 'model/Btn'
import Header from 'model/Header'
import DataContext from 'model/context/context';
import { strings } from "res/strings";
import myAlert from 'model/myAlert'

const wait = (timeout) => {
	return new Promise(resolve => setTimeout(resolve, timeout));
}

function DevicesScreen({ navigation }) {

	useEffect(() => { wait(0).then(() => onRefresh()) }, [])

	const { data } = useContext(DataContext)
	const [list, setList] = useState(data.data)
	const [confirm, setConfirm] = useState(true)
	const [refreshing, setRefreshing] = useState(false);
	const onRefresh = React.useCallback(() => {
		setList(data.data)
		setRefreshing(true)
		wait(200).then(() => setRefreshing(false));
	}, []);

	const deviceSettings = (props) => (
		<Button
			appearance='ghost'
			status='primary'
			accessoryLeft={SettingsIcon}
			onPress={() => { navigation.navigate('EditDeviceNavigator', { index: props, data: data, reload: onRefresh }); }}
		/>
	);

	function isConfirm() {
		if (!confirm) return
		setConfirm(false)
		wait(1000).then(() => setConfirm(true))
	}

	function delAll() {
		data.clear()
		onRefresh()
	}

	return (
		<Layout style={styles.layout}>
			<Header />
			<Layout style={styles.layout}>
				<Layout style={{ ...styles.deviceContainer }}>
					<FlatList
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
								title={`${item.deviceName}`}
								description={`${item.deviceDesc}`}
								accessoryRight={() => <Text status='success'>{item.active}</Text>}
								accessoryLeft={() => deviceSettings(index)}
								onPress={() => { data.select = index; onRefresh() }}
							/>
						}
					/>
				</Layout>
				<Btn
					LeftIcon={CreateIcon}
					RightIcon={ArrowForwardIcon}
					onPress={() => confirm && (navigation.push("AddDeviceScreen", { reload: onRefresh }), isConfirm())}
					text={`${strings.devicesStrings.AddDevice}`}>

				</Btn>
				<Btn
					LeftIcon={RemoveIcon}
					onPress={() => myAlert(strings.devicesStrings.DellAllDevices, 'Это действие нельзя отменить!', { func: delAll })}
					text={strings.devicesStrings.DellAllDevices}>
				</Btn>
			</Layout>
		</Layout>
	)
}

export default DevicesScreen