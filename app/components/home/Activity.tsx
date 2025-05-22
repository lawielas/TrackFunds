import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

const cabIcon = require('@/assets/images/cab_icon.png')
const shopIcon = require('@/assets/images/shop_icon.png')
const walletIcon = require('@/assets/images/wallet_icooon.png')

export default function Activity() {
  return (
    <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <Text style={{fontSize: 18, fontWeight: 700}}>Activity</Text>
            <Text style={{fontSize: 14, color: '#264169'}}>See all</Text>
        </View>
        <View style={{backgroundColor: '#fff', borderRadius: 10, padding: 14, gap: 10}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
                    <Image source={walletIcon} style={{width: 50, height: 50}} />
                    <View style={{gap: 3}}>
                        <Text style={{fontSize: 16, fontWeight: 600}}>May salary payout</Text>
                        <View>
                            <View style={{flexDirection: 'row', gap: 5}}>
                                <MaterialIcons name="wallet" size={18} color={'#b2b2b2'} />
                                <Text>Salary</Text>
                                <Text>May 18</Text>
                            </View>
                        </View>
                    </View>
                </View>
                    <Text style={{fontSize: 16, color: '#16C47F'}}>+N1,200</Text>
            </View>


            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
                    <Image source={shopIcon} style={{width: 50, height: 50}} />
                    <View style={{gap: 3}}>
                        <Text style={{fontSize: 16, fontWeight: 600}}>Weekly grocery haul</Text>
                        <View>
                            <View style={{flexDirection: 'row', gap: 5}}>
                                <MaterialIcons name="shop" size={18} color={'#b2b2b2'} />
                                <Text>Groceries</Text>
                                <Text>May 18</Text>
                            </View>
                        </View>
                    </View>
                </View>
                    <Text style={{fontSize: 16, color: '#F93827'}}>-N2,500</Text>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
                    <Image source={cabIcon} style={{width: 50, height: 50}} />
                    <View style={{gap: 3}}>
                        <Text style={{fontSize: 16, fontWeight: 600}}>Ride to work</Text>
                        <View>
                            <View style={{flexDirection: 'row', gap: 5}}>
                                <MaterialIcons name="card-travel" size={18} color={'#b2b2b2'} />
                                <Text>Transport</Text>
                                <Text>May 18</Text>
                            </View>
                        </View>
                    </View>
                </View>
                    <Text style={{fontSize: 16, color: '#F93827'}}>-N2,500</Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10
    }
})