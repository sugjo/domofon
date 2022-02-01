import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native'
import { Text } from '@ui-kitten/components';
import { styles } from 'res/styles/styles'

class Btn extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    isConfirm: PropTypes.bool,
    LeftIcon: PropTypes.func,
    RightIcon: PropTypes.func,
    disabled: PropTypes.bool,
  };

  static defaulProps = {
    disabled: false,
    isConfirm: false,
  }

  render() {
    const { text, onPress, LeftIcon, RightIcon, disabled, isConfirm } = this.props
    const buttonStyle = isConfirm? {...styles.confirm, ...styles.shadow} : styles.button;
    const textStyle = isConfirm? styles.confirmText : styles.buttonText;
    return (
      <TouchableOpacity onPress={onPress} disabled={disabled} style={disabled? { ...styles.confirm, ...styles.shadow, ...styles.confirmDisabled } : buttonStyle}>
        {LeftIcon ? <LeftIcon style={styles.buttonLeftIcon} /> : null}
        <Text category='h6' style={textStyle}>{text}</Text>
        {RightIcon ? <RightIcon style={styles.buttonRightIcon}/> : null}
      </TouchableOpacity>
    )
  }
}

export default Btn;