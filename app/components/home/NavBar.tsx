import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

const avater = require('@/assets/images/ava.jpeg')

export default function NavBar() {
  return (
    <View style={styles.nav}>
        <View style={styles.avaLock}>
            <Image source={avater} style={styles.avat}  />
            <View>
                <Text style={{fontSize: 18, fontWeight:700}}>Hello, Hilya!</Text>
                <Text style={{fontSize:12}}>Track your money with ease</Text>
            </View>
        </View>
        <View style={{backgroundColor: '#fff', borderRadius: '100%', padding: 7}}>
            <MaterialIcons name="notifications" size={28} color={'#264169'} />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({

    avat: {
        width: 50,
        height: 50,
        borderRadius: '100%'
    },
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    avaLock: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center'
    }
})

