import React from 'react';
import { View, BackHandler } from 'react-native';
import { Card, Modal } from '@ui-kitten/components';
import MyBtn from './MyBtn';
import {styles} from '../../src/components/styles'

const ModalComponent = (props) => {

    const [visible, setVisible] = React.useState(false);

    return (
        <View style={styles.container}>
            <MyBtn onPress={() => setVisible(true)}>
                {props.text}
            </MyBtn>

            <Modal
                visible={visible}
                backdropStyle={styles.modalBackdrop}>
                <Card disabled={true}>
                    {props.children}
                </Card>
            </Modal>
        </View>
    );
};

export default ModalComponent;