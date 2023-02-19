import React from "react";
import { View } from 'react-native';
import { Picker } from "@react-native-picker/picker";
import { styles } from "./styles";
import { selectedPickerValue } from "../../globalStates/store";
import { useAtom } from "jotai";

const DropDownList = ({items}) => {
    const [selectedValue, setSelectedValue] = useAtom(selectedPickerValue)

    return (
        <View style={styles.container}>
            <Picker
                selectedValue={selectedValue}
                style={styles.pickerStyle}
                mode="dropdown"
                dropdownIconColor={"#000"}   
                onValueChange={(itemValue, itemIndex) => {
                    setSelectedValue(itemValue)
                }}             
            >
                {
                    items.map(({label, value, color, enabled, id}) => (
                        <Picker.Item
                            key={id}
                            color={color}
                            label={label}
                            value={value}
                            enabled={enabled}
                            style={styles.pickerItemStyle}
                        />
                    ))
                }
            </Picker>
        </View>
    )
}

export default DropDownList;