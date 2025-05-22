import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from "react-native";

export default function BalanceCard() {
  return (
    <View>
        <LinearGradient
        // Background Linear Gradient
        colors={['rgba(0,0,0,0.8)', 'transparent']}
        style={styles.background}
      />
      <LinearGradient
        // Button Linear Gradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.container}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: '#fff', fontSize: 15}}>Total balance</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{color: '#fff', fontSize: 15}}>Account details</Text>
                    <MaterialIcons name="chevron-right" size={20} color={'#fff'} />
                </View>
            </View>
            <Text style={{color: '#fff', fontSize: 40, fontWeight: 700}}>N3,500</Text>
            <View style={{flexDirection: 'row', gap: 3}}>
                <Text style={{color: '#fff', fontSize: 14}}>Increase</Text>
                <MaterialIcons name="trending-up" size={18} color={'#fff'} />
                <Text style={{color: '#fff', fontSize: 14}}>3.9%</Text>
            </View>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#264169',
        borderRadius: 10,
        gap: 10,
        padding: 15
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
    },
    button: {
        padding: 15,
        alignItems: 'center',
        borderRadius: 5,
    },
})