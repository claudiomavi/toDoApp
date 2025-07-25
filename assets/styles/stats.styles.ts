import { ColorScheme } from '@/hooks/useTheme'
import { StyleSheet } from 'react-native'

export const createStatsStyles = (colors: ColorScheme) => {
	const styles = StyleSheet.create({
		container: {
			flex: 1,
		},
		safeArea: {
			flex: 1,
		},
		section: {
			borderRadius: 20,
			padding: 24,
			shadowColor: '#000',
			shadowOffset: {
				width: 0,
				height: 4,
			},
			shadowOpacity: 0.1,
			shadowRadius: 8,
			elevation: 8, // elevation is used to create a shadow on the section, in android
		},
		statsContainer: {
			gap: 20,
		},
		statCard: {
			flexDirection: 'row',
			alignItems: 'center',
			padding: 20,
			borderRadius: 16,
			borderLeftWidth: 4,
		},
		statIconContainer: {
			marginRight: 16,
		},
		statIcon: {
			width: 40,
			height: 40,
			borderRadius: 20,
			justifyContent: 'center',
			alignItems: 'center',
		},
		statNumber: {
			fontSize: 28,
			fontWeight: '800',
			letterSpacing: -1,
			color: colors.text,
		},
		statLabel: {
			fontSize: 14,
			fontWeight: '600',
			marginTop: 2,
			color: colors.textMuted,
		},
	})

	return styles
}
