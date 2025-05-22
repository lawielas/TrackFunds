import { Image } from "expo-image";
import { Link } from "expo-router";
import { KeyboardAvoidingView, Platform, StyleSheet, TextInput } from "react-native";

const signupImage = require('@/assets/images/signin.png')


export default function signin() {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.container}>
      <Image source={signupImage} style={styles.image} />
      <TextInput
        style={styles.input}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
      />
      <Link href='/(tabs)/home' style={styles.signupButton}>
        Sign in
      </Link>
    </KeyboardAvoidingView>
  )
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
    width: 200,
    height: 200,
  },
  input: {
    height: 40,
    width: '80%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    fontSize: 16,
    borderColor: '#264169'
  },
  signupButton: {
    backgroundColor: '#264169',
    marginTop: 30,
    color: '#fff',
    width: '80%',
    textAlign: 'center',
    fontSize: 20,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#264169'
  },
})