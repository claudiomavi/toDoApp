import { createSettingsStyles } from '@/assets/styles/settings.styles'
import GeneralHeader from '@/components/GeneralHeader'
import useTheme from '@/hooks/useTheme'
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function SettingsScreen() {
	const [isAutoSync, setIsAutoSync] = useState(true)
	const [isNotificationEnabled, setIsNotificationEnabled] = useState(true)

	const { colors, isDarkMode, toggleDarkMode } = useTheme()

	const settingsStyles = createSettingsStyles(colors)

	return (
		<LinearGradient
			colors={colors.gradients.background}
			style={settingsStyles.container}
		>
			<SafeAreaView style={settingsStyles.safeArea}>
				<GeneralHeader
					title="Settings"
					icon="settings"
				/>

				<ScrollView
					style={settingsStyles.scrollView}
					contentContainerStyle={settingsStyles.content}
					showsVerticalScrollIndicator={false}
				></ScrollView>
			</SafeAreaView>
		</LinearGradient>
	)
}
