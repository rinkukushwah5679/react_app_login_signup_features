import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import {post} from './redux/actions/postActions';
const Post = () => {
	const posts_list = useSelector((state) => state.posts.posts)
	const dispatch = useDispatch();

	useEffect(() => {
    dispatch(post());
  }, [])
	return (
		<View style={styles.container}>
			{
				posts_list.length?
				posts_list.map((post) =>(<View>
					<Text style={{fontSize: 18, color: 'red'}}>{post.title}</Text>
				</View>))
				:null
			}
		</View>
	)
}

const styles = StyleSheet.create({
  container: {
    margin: 5
  },
})

export default Post;