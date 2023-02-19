import { useNavigation } from "@react-navigation/native";
import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import { Alert, ScrollView, View } from "react-native";
import { Provider } from "react-native-paper";
import FloatingBtn from "../components/floatingBtn/FloatingBtn";
import Header from "../components/header/Header";
import CatsCardView from "../components/informationCardView/CatsCardView";
import PopUp from "../components/popUp/PopUp";
import { deleteCat } from "../database/services/cats/DelectCat";
import { initTableCats } from "../database/services/cats/InitTableCats";
import { updateCat } from "../database/services/cats/UpdateCat";
import { atomCats, atomSearchedCats, selectedPickerValue } from "../globalStates/store";
import { styles } from "./styles";

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

const Home = () => {
    initTableCats()
    const navigation = useNavigation()

    const [cats] = useAtom(atomCats);
    const [name, setName] = useState(undefined);
    const [breed, setBreed] = useAtom(selectedPickerValue);
    const [age, setAge] = useState(undefined);
    const [description, setDescription] = useState(undefined);
    const [id, setID] = useState(undefined);
    const [visibleUpdatePopUp, setVisibleUpdatePopUp] = useState(false)
    const [searchedCats, setSearchedCats] = useAtom(atomSearchedCats);

    const txtInputs = [
        {
            id: 1,
            placeholder: 'Enter new cat name',
            defaultValue: name,
            onChangeText: (name) => setName(name),
        },
        {
            id: 2,
            placeholder: 'Enter new cat age',
            defaultValue: age,
            keyboardType: "numeric",
            onChangeText: (age) => setAge(age)
        },
        {
            id: 3,
            placeholder: 'Enter new description',
            defaultValue: description,
            onChangeText: (desc) => setDescription(desc)
        }
    ]

    const deleteCatFunc = (id) => {
        Alert.alert(
            'Warning!',
            'Are you sure you want to delete cat?',
            [
                {
                    text: 'No',
                    onPress: () => {return}
                },
                {
                    text: 'Yes',
                    onPress: () => catDelete()
                }
            ]
        )

        const catDelete = () => {
            deleteCat(id)
                .then(result => console.log(result))
                .catch(error => console.log(error))
        }
    }

    const updateCatInfo = () => {
        Alert.alert(
            'Warning!',
            'Are you sure you want to update cat?',
            [
                {
                    text: 'No',
                    onPress: () => { return }
                },
                {
                    text: 'Yes',
                    onPress: () => updateInfo()
                }
            ]
        )

        const updateInfo = () => {
            updateCat({
                catName: name,
                catAge: age,
                catBreed: breed,
                description: description,
                catID: id.toString()
            })
            .then((result) => {
                console.log(result)
                setVisibleUpdatePopUp(false)
            })
            .catch(error => console.log(error))
        }
    }

    const displaySearchedCats = () => {
        return searchedCats.map((searched, index) => {
            return (
                <CatsCardView
                    key={index}
                    name={searched.catName}
                    age={searched.catAge}
                    breed={searched.catBreed}
                    description={searched.description}
                    onDeleteBtn={() => deleteCatFunc(searched.catID)}
                    onUpdateBtn={() => {
                        setName(searched.catName)
                        setAge(searched.catAge.toString())
                        setBreed(searched.catBreed)
                        setDescription(searched.description)
                        setID(searched.catID)
                        setVisibleUpdatePopUp(true)
                    }}
                />
            )
        })
    }


    const dispayCats = () => {
        return cats.map((cat, index) => {
            return (
                <CatsCardView
                    key={index}
                    name={cat.catName}
                    age={cat.catAge}
                    breed={cat.catBreed}
                    description={cat.description}
                    onDeleteBtn={() => deleteCatFunc(cat.catID)}
                    onUpdateBtn={() => {
                        setName(cat.catName)
                        setAge(cat.catAge.toString())
                        setBreed(cat.catBreed)
                        setDescription(cat.description)
                        setID(cat.catID)
                        setVisibleUpdatePopUp(true)
                    }}
                />
            )
        })
    }
    

    //To handle navigation header options
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    })

    return (
        <Provider>
            <View style={styles.container}>
                
                <Header/>
                    
                    <ScrollView>
                    {
                        !searchedCats ?
                            dispayCats()
                        : displaySearchedCats()
                    }
                    </ScrollView>

                    {
                        visibleUpdatePopUp ?
                            <PopUp
                                title={'Update Cat'}
                                btnTitle={'Update'}
                                modalVisibility={visibleUpdatePopUp}
                                onCancelClick={() => setVisibleUpdatePopUp(false)}
                                onPress={updateCatInfo}
                                pickerItems={items}
                                inputsArr={txtInputs}
                            />
                        : null
                    }

                <FloatingBtn
                    onPress={() => navigation.navigate('AddCat')}
                />

            </View>
        </Provider>
    )
}

export default Home