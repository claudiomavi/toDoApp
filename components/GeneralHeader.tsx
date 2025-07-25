import { createGeneralHeaderStyles } from '@/assets/styles/generalHeader.styles'
import useTheme from '@/hooks/useTheme'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Text, View } from 'react-native'

interface GeneralHeaderProps {
	title: string
	icon: keyof typeof Ionicons.glyphMap
}

export default function GeneralHeader({ title, icon }: GeneralHeaderProps) {
	const { colors } = useTheme()
	const generalStyles = createGeneralHeaderStyles(colors)

	return (
		<View style={generalStyles.header}>
			<View style={generalStyles.titleContainer}>
				<LinearGradient
					colors={colors.gradients.primary}
					style={generalStyles.iconContainer}
				>
					<Ionicons
						name={icon}
						size={28}
						color="#fff"
					/>
				</LinearGradient>
				<Text style={generalStyles.title}>{title}</Text>
			</View>
		</View>
	)
}
