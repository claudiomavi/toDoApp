import { createHomeStyles } from '@/assets/styles/home.styles'
import useTheme from '@/hooks/useTheme'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

interface IsEditingProps {
	editText: string
	setEditText: React.Dispatch<React.SetStateAction<string>>
	handleSaveEdit: () => Promise<void>
	handleCancelEdit: () => void
}

export default function IsEditing({
	editText,
	setEditText,
	handleSaveEdit,
	handleCancelEdit,
}: IsEditingProps) {
	const { colors } = useTheme()

	const homeStyles = createHomeStyles(colors)

	return (
		<View style={homeStyles.editContainer}>
			<TextInput
				style={homeStyles.editInput}
				value={editText}
				onChangeText={setEditText}
				autoFocus
				multiline
				placeholder="Edit your todo..."
				placeholderTextColor={colors.textMuted}
			/>
			<View style={homeStyles.editButtons}>
				<TouchableOpacity
					onPress={handleSaveEdit}
					activeOpacity={0.8}
				>
					<LinearGradient
						colors={colors.gradients.success}
						style={homeStyles.editButton}
					>
						<Ionicons
							name="checkmark"
							size={16}
							color="#fff"
						/>
						<Text style={homeStyles.editButtonText}>Save</Text>
					</LinearGradient>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={handleCancelEdit}
					activeOpacity={0.8}
				>
					<LinearGradient
						colors={colors.gradients.muted}
						style={homeStyles.editButton}
					>
						<Ionicons
							name="close"
							size={16}
							color="#fff"
						/>
						<Text style={homeStyles.editButtonText}>Cancel</Text>
					</LinearGradient>
				</TouchableOpacity>
			</View>
		</View>
	)
}
