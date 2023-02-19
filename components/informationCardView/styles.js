import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    touchableCar: {
        width: '95%',
        height: 150,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderWidth: 3,
        borderColor: '#fc79eb',
        padding: 5,
        borderRadius: 30,
    },
    information: {
        width: '100%',
        height: '78%',
        justifyContent: 'space-evenly',
        padding: 10,
        alignItems: 'center',
        backgroundColor: 'rgba(204, 204, 204, 0.3)',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    btnsContainer: {
        flexDirection: 'row',
        width: '100%',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    info: {
        color: '#000'
    }
})

export { styles }