import React from 'react'
import { View, Text } from 'react-native'
import Home from '../Home'
import Login from '../Login'
import Signup from '../Signup'
import Post from '../Post'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux'
const Stack = createNativeStackNavigator();

const Navigation = () => {
	const user = useSelector((state)=> state.auth.user)
	console.warn(user)
	return (
		<NavigationContainer>
			<Stack.Navigator>
			{
				user != null ? (
					<>
						<Stack.Screen name="Home" component={Home} />
						<Stack.Screen name="Post" component={Post} />
					</>
				) : (
				<>
		      <Stack.Screen name="Login" component={Login} />
		      <Stack.Screen name="Signup" component={Signup} />
	      </>
				)
			}
				
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Navigation