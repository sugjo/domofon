import * as SMS from 'expo-sms';

export const setAdmin = (phoneNumber, pass) => sendSms(`M ${pass}`, phoneNumber);
export const changePass = (phoneNumber, passOld, pass) => sendSms(`P ${passOld} ${pass}`, phoneNumber);
export const factoryReset = (phoneNumber, pass) => sendSms(`X ${pass}`, phoneNumber);

export const setMaxCallTime = (sec) => sendSms(`J ${sec}`);
export const setReleOpenTime = (timeRele, timeCall) => sendSms(`O ${addZero(timeRele)} ${addZero(timeCall)}`);
export const switchSmsForwarding = () => sendSms(`T 1`);
export const releOn = (num) => sendSms(`I ${num}`);
export const setPhoneMode = (bool) => sendSms(`Z ${bool}`);
export const switchAutoOpen = (bool) => sendSms(`H ${bool}`);

export const getStatus = () => sendSms('V');

export const setUser = (phoneNumbers) => sendSms(`W ${phoneNumbers}`);
export const serchUser = (phoneNumbers) => sendSms(`Y ${phoneNumbers}`);
export const delUser = (phoneNumbers) => sendSms(`G ${phoneNumbers}`);

export const setOperator = (phoneNumbers) => sendSms(`K ${phoneNumbers}`);
export const getOperator = () => sendSms(`Q`);

export const bdReg = (user, pass, url, name) => sendSms(`R ${user} ${pass} ${url} ${name}`);
export const bdLoad = () => sendSms(`L`);
export const bdUplad = () => sendSms(`U`);


function sendSms(data, phoneNumber = global.phoneNumber) {
    phoneNumber && SMS.sendSMSAsync(`${phoneNumber}`, `${data}`)
}

function addZero(num) {
    return num > 10 ? num : `0${num}`
}