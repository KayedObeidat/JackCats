import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: 'white',
        padding: 20,
        width: '85%',
        alignSelf: 'center',
        justifyContent: 'flex-start',
    },
    titleStyle: {
        alignSelf: 'flex-start',
        fontSize: 18,
        color: '#fc79eb',
        marginBottom: 30,
        fontWeight: 'bold',
    },
    btnsContainer: {
        flexDirection: 'row', width: '100%', justifyContent: 'space-evenly', marginTop: 10
    }
})

export { styles }