import React from 'react';
import { TouchableOpacity } from 'react-native';
import BtnIcon from './BtnIcon';
import { styles } from './styles';

const CardBtn = ({icon, btnStyle, onPress}) => {
    return (
        <TouchableOpacity style={[styles.cardTouch, btnStyle]} onPress={onPress}>
            <BtnIcon icon={icon} />
        </TouchableOpacity>
    )
}

export default CardBtn;