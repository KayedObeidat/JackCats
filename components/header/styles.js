import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 200,
    },
    linearGradient: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnContainer: {
        position: 'absolute', top: 150, right: 10, flexDirection: 'row-reverse', width: '100%', height: 70,
    },
    searchBar: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: 50, width: '80%', height: 40, marginRight: 10, color: '#000', padding: 10
    }
});

export {styles};
