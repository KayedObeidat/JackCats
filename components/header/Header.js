import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from "react-native";
import CardBtn from "../btnHandlers/CardBtn";
import TextInputs from "../textInputs/TextInputs";
import { styles } from "./styles";
import {useState} from 'react'
import { searchForCats } from "../../database/services/cats/SearchForCats";
import { useAtom } from "jotai";
import { atomSearchedCats } from "../../globalStates/store";

const Header = () => {
    const [visible, setVisible] = useState(false)
    const [searchItem, setSearchItem] = useState(undefined)
    const [searchedCats, setSearchedCats] = useAtom(atomSearchedCats)

    const searchFromDB = (catName, catBreed) => {
        searchForCats(catName, catBreed)
            .then(cats => setSearchedCats(cats))
            .catch(error => console.log(error))
    }

    return (
        <View style={styles.header}>
            <LinearGradient
                colors={['#fff', '#f28ae5', '#fc79eb']}
                style={styles.linearGradient}
                start={{x: 0.7, y: 0}}
            >
                <Text style={{fontSize: 30, color: 'rgba(255, 255, 255, 0.7)', fontFamily: 'serif'}}>Jack Cats</Text>

            </LinearGradient>
            <View style={styles.btnContainer}>
                    <CardBtn icon={'searchForCats'} btnStyle={{height: 30, width: 30, }} onPress={() => setVisible(!visible)} />

                {
                    visible ?
                        <TextInput
                            placeholder="Search for cats by name/ breed"
                            style={styles.searchBar}
                            placeholderTextColor="#838584"
                            selectionColor={'#f28ae5'}
                            onChangeText={(search) => searchFromDB(search, search) }
                        />
                    : null
                }
            </View>
        </View>
    )
}

export default Header