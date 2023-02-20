import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import { Text, TouchableOpacity, View, Alert } from 'react-native';
import { styles } from './styles';
import TextInputs from '../components/textInputs/TextInputs';
import DropDownList from '../components/dropdownlist/DropDownList';
import { addNewCat } from '../database/services/cats/AddNewCat';
import { useAtom } from 'jotai';
import { selectedPickerValue } from '../globalStates/store';
import CatsCardView from '../components/informationCardView/CatsCardView';

const items = [
    {
        id: 1,
        color: '#838584',
        label: 'Select cat\'s breed',
        value: 'select',
        enabled: false,
    },
    {
        id: 2,
        color: '#000',
        label: 'Siamese cat',
        value: 'Siamese cat',
    },
    {
        id: 3,
        color: '#000',
        label: 'British Shorthair',
        value: 'British Shorthair'
    },
]

const AddCat = () => {
    const navigation = useNavigation()

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Add New Cat',
            headerStyle: {
                backgroundColor: '#fc79eb'
            },
            headerTitleStyle: {
                color: '#fff'
            },
            headerTintColor: '#fff',
        })
    })

    const [name, setName] = useState(undefined);
    const [age, setAge] = useState(undefined);
    const [description, setDescription] = useState(undefined);
    const [breed, setbreed] = useAtom(selectedPickerValue)

    const addCat = () => {
        if (name !== undefined && age !== undefined) {
            addNewCat({
                catName: name,
                catAge: age,
                catBreed: breed,
                description: description
            })
            .then(() => {
                Alert.alert(
                    'Success!',
                    'Cat was added successfully',
                    [
                        {
                            text: 'Cancel'
                        },
                        {
                            text: 'View',
                            onPress: () => navigation.navigate('Home')
                        }
                    ]
                )
            })
            .then(() => setbreed(1))
            .catch(error => console.log(error))
        }
    }

    return(
        <View style={[styles.container, { padding: 10 }]}>
            
            <TextInputs
                placeholder={'Enter cat name'}
                onChangeText={(name) => setName(name)}
            />

            <TextInputs
                placeholder={'Enter cat age'}
                keyboardType={"numeric"}
                style={{marginTop: 0}}
                onChangeText={(age) => setAge(age)}
            />

            <DropDownList
                items={items}
            />

            <TextInputs
                placeholder={'Enter a description'}
                onChangeText={(desc) => setDescription(desc)}
            />

            <TouchableOpacity style={{width: '35%', height: 50, backgroundColor: '#fc79eb', borderRadius: 30, marginBottom: 50, alignItems: 'center', justifyContent: 'center', alignSelf: 'center'}} onPress={addCat}>
                <Text style={{color: '#fff', fontSize: 16,}}>Submit</Text>
            </TouchableOpacity>

            {
                name ?
                    <CatsCardView
                        name={name}
                        breed={breed}
                        age={age}
                        description={description}
                    />
                : null
            }

        </View>
    )
}

export default AddCat