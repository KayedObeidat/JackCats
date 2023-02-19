import { TextInput } from "@react-native-material/core";
import { styles } from "./style";

const TextInputs = ({placeholder, onChangeText, inputStyle, keyboardType, style, defaultValue}) => {
    return(
        <TextInput
            mode='outlined'
            placeholder={placeholder}
            style={[styles.txtInput, style]}
            inputStyle={[styles.txtInputStyle, inputStyle]}
            variant= 'outlined'
            color='#fc79eb'
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            defaultValue={defaultValue}
        />
    )
}

export default TextInputs;