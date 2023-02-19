import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    floatingBtn: {
        borderRadius: 50,
        position: 'absolute',
        bottom: 20,
        right: 15,
        width: 70,
        height: 70,
        backgroundColor: '#fc79eb',
        justifyContent: 'center',
      },
      icon: {
        fontSize: 24,
        color: '#fff',
        alignSelf: 'center',
        marginTop: -5
      },
      earsCotnainer: {
        flexDirection: 'row'
      },
      leftEar: {
        width: 20,
        height: 25,
        backgroundColor: '#fc79eb',
        position: 'relative',
        left: 10,
        top: -15,
        borderTopStartRadius: 20
      },
      innerEar: {
        backgroundColor: '#fff',
        width: 10,
        height: 10,
        top: 5,
        left: 5,
      },
      rightEar: {
        width: 20, 
        height: 25,
        backgroundColor: '#fc79eb',
        position: 'relative',
        left: 20,
        top: -15,
        borderTopEndRadius: 20,
      },
      eyesContainer: {
        flexDirection: 'row',
      },
      leftEye: {
        width: 5,
        height: 5,
        backgroundColor: '#fff',
        borderRadius: 50,
        position: 'relative',
        left: 20,
        top: -5
      },
      rightEye: {
        width: 5,
        height: 5,
        backgroundColor: '#fff',
        borderRadius: 50,
        position: 'relative',
        left: 40,
        top: -5
      }
})

export { styles }