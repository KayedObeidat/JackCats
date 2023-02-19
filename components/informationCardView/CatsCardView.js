import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import CardBtn from "../btnHandlers/CardBtn";
import { styles } from './styles';

const CatsCardView = ({name, age, breed, description, onUpdateBtn, onDeleteBtn}, key) => {
    return (
        <TouchableOpacity key={key} style={styles.touchableCar}> 
            <View style={styles.information}>
                <Text style={styles.info}>Cat name: {name}</Text>
                <Text style={styles.info}>Cat age: {age} months</Text>
                <Text style={styles.info}>Cat breed: {breed}</Text>
                {
                    description ?
                        <Text style={styles.info}>Description: {description}</Text>
                    : null
                }
            </View>

            <View style={styles.btnsContainer}>

                <CardBtn
                    icon={'updateCat'}
                    btnStyle={{width: 30, height: 30}}
                    onPress={onUpdateBtn}
                />

                <CardBtn
                    icon={'deleteCat'}
                    btnStyle={{width: 30, height: 30}}
                    onPress={onDeleteBtn}
                />

            </View>
        </TouchableOpacity>
    )
}

export default CatsCardView;