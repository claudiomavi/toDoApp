import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function SettingsScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>SettingsScreen</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontSize: 22,
	},
})
