import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { StyleSheet, Text, View } from "react-native";

const authImage = require('@/assets/images/auth_vector.png')

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={authImage} style={styles.image} />
      <Text style={styles.title}>Grow Your Savings,</Text>
      <Text style={styles.title}>Once Step at a Time</Text>
      <Text style={styles.subHead}>See your progress, get reminders, and start building the habits that lead to financial freedom.</Text>
      <View style={styles.linksContainer}>
        <Link href='/signup' style={styles.start}>
          Get Started
        </Link>
        <Link href='/signin' style={styles.continue}>
          Sign in
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    justifyContent: 'center',
    backgroundColor: '#E6ECF4'
  },
  image: {
    width: 320,
    height: 320,
  },
  title: {
    fontSize: 33,
    fontWeight: '700'
  },
  subHead: {
    textAlign: 'center',
    marginTop: 10,
    paddingHorizontal: 30,
    fontSize: 16
  },
  linksContainer: {
    gap: 10,
    marginTop: 20
  },
  start: {
    backgroundColor: '#264169',
    color: '#fff',
    width: 250,
    textAlign: 'center',
    fontSize: 20,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#264169'
  },
  continue: {
    color: '#264169',
    width: 250,
    textAlign: 'center',
    fontSize: 20,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#264169'
  }
})





