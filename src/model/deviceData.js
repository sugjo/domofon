import AsyncStorage from '@react-native-async-storage/async-storage';

class deviceData {

	_data = []

	constructor() {
		this._load("@data").then(data => {
			data && (this._data = data)
		})
		this.isSelect()
			.then(selectDevice => { global.phoneNumber = selectDevice.devicePhone })
			.catch(err => console.log(err))
	}

	get data() {
		return this._data
	}


	set select(index) {
		this._data.forEach(device => { device.active = '' })
		global.phoneNumber = this._data[index].devicePhone
		this._data[index].active = 'Выбран'
		this._save()
	}

	isSelect() {
		return new Promise((resolve, reject) => {
			this._load("@data").then(data => {
				this._data.length && data.forEach(device => {
					device.active && resolve(device)
				})
				reject('Ни одно устройство не выбранно')
			})
		})
	}

	addDevice(deviceName, deviceDesc, devicePhone, devicePass) {
		this._data.forEach((device) => { device.active = '' })
		global.phoneNumber = devicePhone
		this._data.unshift({
			deviceName,
			deviceDesc,
			devicePhone,
			devicePass,
			active: 'Выбран',
			key: `${Date.now()}`,
		})
		this._save()
	}

	changeDevicePass(newPass) {
		return new Promise((resolve) => {
			this._load("@data").then(data => {
				if (this._data.length) {
					data.forEach((device, index) => {
						if (device.active) {
							this._data[index].devicePass = newPass
							this._save()
							resolve(true)
						}
					})
				}
			})
		})
	}

	dellDevice(index) {
		this._data.splice(index, 1)
		this._save()
	}


	clear() {
		this._data = []
		this._save()
	}

	async _load(type) {
		try {
			if (type == '@data') { value = JSON.parse(await AsyncStorage.getItem(`${type}`)) }
			return value ? value : null
		} catch (err) { console.log(err) }
	}

	async _save() {
		try {
			await AsyncStorage.setItem('@data', JSON.stringify(this._data))
		} catch (err) { console.log(err) }
	}

}

export default deviceData