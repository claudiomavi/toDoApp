import { createSettingsStyles } from '@/assets/styles/settings.styles'
import useTheme from '@/hooks/useTheme'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Text, View } from 'react-native'

type PrincipalColor = 'primary' | 'success' | 'warning'

interface StatProps {
	principalColor: PrincipalColor
	iconName: keyof typeof Ionicons.glyphMap
	statNumber: number
	statLabel: string
}

export default function Stat({
	principalColor,
	iconName,
	statNumber,
	statLabel,
}: StatProps) {
	const { colors } = useTheme()

	const settingsStyles = createSettingsStyles(colors)

	return (
		<LinearGradient
			colors={colors.gradients.background}
			style={[
				settingsStyles.statCard,
				{ borderLeftColor: colors[principalColor] },
			]}
		>
			<View style={settingsStyles.statIconContainer}>
				<LinearGradient
					colors={colors.gradients[principalColor]}
					style={settingsStyles.statIcon}
				>
					<Ionicons
						name={iconName}
						size={20}
						color="#fff"
					/>
				</LinearGradient>
			</View>
			<View>
				<Text style={settingsStyles.statNumber}>{statNumber}</Text>
				<Text style={settingsStyles.statLabel}>{statLabel}</Text>
			</View>
		</LinearGradient>
	)
}
