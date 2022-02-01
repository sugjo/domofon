import { Alert } from 'react-native';

function myAlert(alertTitle, alertText, options = {}) {
    if (options['func']) {
        Alert.alert(alertTitle, alertText, [
            {
                text: "Ok",
                onPress: () => options.func(),
            },
            { text: "Отмена" }
        ]);
    } else {
        Alert.alert(alertTitle, alertText, [
            { text: "Ok" }
        ]);
    }
}

export default myAlert