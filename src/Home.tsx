import React from 'react'
import { View, Text, Button } from 'react-native'
import {useSelector} from 'react-redux';
import { useNavigation } from '@react-navigation/native';
const Home = (props) => {
	const user = useSelector((state)=> state.auth.user)
	console.warn("ssssss", user)
	return (
		<View>
			<Text>Home</Text>
			<Button title="Post" onPress={() => props.navigation.navigate("Post")} />
		</View>
	)
}

export default Home