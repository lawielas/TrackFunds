import { StyleSheet, View } from "react-native";
import Activity from "../components/home/Activity";
import BalanceCard from "../components/home/BalanceCard";
import NavBar from '../components/home/NavBar';

export default function home() {
  return (
    <View style={styles.container}>
        <NavBar />
        <BalanceCard />
        <Activity />
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 70,
        backgroundColor: '#E6ECF4',
        gap:10
    },
})