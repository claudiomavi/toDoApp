import { ColorScheme } from '@/hooks/useTheme'
import { StyleSheet } from 'react-native'

export const createGeneralHeaderStyles = (colors: ColorScheme) => {
	const styles = StyleSheet.create({
		header: {
			paddingHorizontal: 24,
			paddingVertical: 32,
			paddingBottom: 24,
		},
		titleContainer: {
			flexDirection: 'row',
			alignItems: 'center',
			marginBottom: 20,
		},
		iconContainer: {
			width: 56,
			height: 56,
			borderRadius: 16,
			justifyContent: 'center',
			alignItems: 'center',
			marginRight: 16,
		},
		title: {
			fontSize: 32,
			fontWeight: '700',
			letterSpacing: -1,
			marginBottom: 4,
			color: colors.text,
		},
	})

	return styles
}
