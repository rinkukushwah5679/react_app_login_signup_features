// src/screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import {login} from './redux/actions/authActions';
import { useNavigation } from '@react-navigation/native';
import Spinner from "react-native-loading-spinner-overlay"
import { useSelector } from 'react-redux'
const Login = ({ login, error }) => {
  const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const navigation = useNavigation();
	const logding = useSelector((state) => state.auth.spinner)
  const handleLogin = () => {
    const credentials = {user: { email, password }};
    login(credentials);
  };

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Spinner visible={logding} />
      <View style={styles.wraper}>
	      <TextInput
	      	value={email}
	        style={styles.input}
	        placeholder="Username"
	        onChangeText={(text) => setEmail(text)}
	      />
	      <TextInput
	      	value={password}
	        style={styles.input}
	        placeholder="Password"
	        secureTextEntry
	        onChangeText={(text) => setPassword(text)}
	      />
	      <Button title="Login" onPress={handleLogin} />
	      {error && <Text style={styles.error}>{error}</Text>}
	      <View style={{ flexDirection: 'row', marginTop: 20 }} >
					<Text>Don't have an account ?</Text>
					<TouchableOpacity onPress={() => navigation.navigate("Signup")} >
						<Text style={styles.link} >Signup</Text>
					</TouchableOpacity>
				</View>
			</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: '80%',
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
  link: {
		color: "blue",
	},
	wraper:{
		width: "80%"
	}
});

const mapStateToProps = (state) => ({
  error: state.auth.error,
});

export default connect(mapStateToProps, { login })(Login);
