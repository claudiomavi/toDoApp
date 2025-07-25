import { ColorScheme } from '@/hooks/useTheme'
import { StyleSheet } from 'react-native'

export const createSettingsStyles = (colors: ColorScheme) => {
	const styles = StyleSheet.create({
		container: {
			flex: 1,
		},
		safeArea: {
			flex: 1,
		},
		scrollView: {
			flex: 1,
		},
		content: {
			paddingHorizontal: 20,
			gap: 20,
			paddingBottom: 120,
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
		sectionTitle: {
			fontSize: 20,
			fontWeight: '700',
			marginBottom: 20,
			letterSpacing: -0.5,
			color: colors.text,
		},
		sectionTitleDanger: {
			fontSize: 20,
			fontWeight: '700',
			marginBottom: 20,
			letterSpacing: -0.5,
			color: colors.danger,
		},
		settingItem: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			paddingVertical: 20,
			borderBottomWidth: 1,
			borderBottomColor: colors.border,
		},
		settingLeft: {
			flexDirection: 'row',
			alignItems: 'center',
			flex: 1,
		},
		settingIcon: {
			width: 36,
			height: 36,
			borderRadius: 8,
			justifyContent: 'center',
			alignItems: 'center',
			marginRight: 16,
		},
		settingText: {
			fontSize: 17,
			fontWeight: '600',
			color: colors.text,
		},
		actionButton: {
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
			paddingVertical: 20,
			borderBottomWidth: 1,
			borderBottomColor: colors.border,
		},
		actionLeft: {
			flexDirection: 'row',
			alignItems: 'center',
			flex: 1,
		},
		actionIcon: {
			width: 36,
			height: 36,
			borderRadius: 8,
			justifyContent: 'center',
			alignItems: 'center',
			marginRight: 16,
		},
		actionText: {
			fontSize: 17,
			fontWeight: '600',
			color: colors.text,
		},
		actionTextDanger: {
			fontSize: 17,
			fontWeight: '600',
			color: colors.danger,
		},
	})

	return styles
}
