import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const FloatingBtn = ({onPress}) => {
    return (
        <TouchableOpacity style={styles.floatingBtn} onPress={onPress}>
            <View style={styles.earsCotnainer}>
                <View  style={styles.leftEar}>
                    <View style={[styles.leftEar, styles.innerEar]} />
                </View>
                <View  style={styles.rightEar}>
                    <View style={[styles.rightEar, styles.innerEar]} />
                </View>
            </View>
            <View style={styles.eyesContainer}>
                <View style={styles.leftEye} />
                <View style={styles.rightEye}/>
            </View>
            <Text style={styles.icon}>+</Text>

        </TouchableOpacity>
    )
}

export default FloatingBtn;
