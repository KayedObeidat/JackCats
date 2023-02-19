import React from "react";
import { Modal, Portal, Text } from 'react-native-paper';
import { View, TouchableOpacity } from 'react-native';
import DropDownList from "../dropdownlist/DropDownList";
import TextInputs from "../textInputs/TextInputs";
import { styles } from "./styles";

const PopUp = ({inputsArr, popupStyle, title, btnTitle, onCancelClick, onPress, modalVisibility, onDismissModal, pickerItems, dismissable = false}) => {
    return (
        <Portal>
            <Modal visible={modalVisibility} dismissable={dismissable} onDismiss={onDismissModal} contentContainerStyle={[styles.containerStyle, popupStyle]}>
                <Text style={styles.titleStyle}>{title}</Text>

                {
                    inputsArr.map(({placeholder, keyboardType, id, style, inputStyle, defaultValue, onChangeText}) => (
                        <TextInputs
                            placeholder={placeholder}
                            keyboardType={keyboardType}
                            key={id}
                            defaultValue={defaultValue}
                            onChangeText={onChangeText}
                            style={style}
                            inputStyle={inputStyle}
                        />
                    ))
                }

                {
                    pickerItems ?
                        <DropDownList
                            items={pickerItems}
                        />
                    : null
                }

                <View style={styles.btnsContainer}>
                    <TouchableOpacity onPress={onCancelClick}>
                        <Text style={{color: '#fc79eb'}}>Cancel</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onPress}>
                        <Text style={{color: '#fc79eb'}}>{btnTitle}</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </Portal>
    )
}

export default PopUp