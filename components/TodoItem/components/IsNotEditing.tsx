import { createHomeStyles } from '@/assets/styles/home.styles'
import { api } from '@/convex/_generated/api'
import { Doc, Id } from '@/convex/_generated/dataModel'
import useTheme from '@/hooks/useTheme'
import { Ionicons } from '@expo/vector-icons'
import { useMutation } from 'convex/react'
import { LinearGradient } from 'expo-linear-gradient'
import { Alert, Text, TouchableOpacity, View } from 'react-native'

type Todo = Doc<'todos'>

interface IsNotEditingProps {
	item: Todo
	setEditText: React.Dispatch<React.SetStateAction<string>>
	setEditingId: React.Dispatch<React.SetStateAction<Id<'todos'> | null>>
}

export default function IsNotEditing({
	item,
	setEditText,
	setEditingId,
}: IsNotEditingProps) {
	const { colors } = useTheme()

	const homeStyles = createHomeStyles(colors)

	const deleteTodo = useMutation(api.todos.deleteTodo)

	const handleDeleteTodo = async (id: Id<'todos'>) => {
		Alert.alert(
			'Delete Todo',
			'Are you sure that you want to delete this todo?',
			[
				{ text: 'Cancel', style: 'cancel' },
				{
					text: 'Delete',
					style: 'destructive',
					onPress: () => deleteTodo({ id }),
				},
			]
		)
	}

	const handleEditTodo = (todo: Todo) => {
		setEditText(todo.text)
		setEditingId(todo._id)
	}

	return (
		<View style={homeStyles.todoTextContainer}>
			<Text
				style={[
					homeStyles.todoText,
					item.isCompleted && {
						textDecorationLine: 'line-through',
						color: colors.textMuted,
						opacity: 0.6,
					},
				]}
			>
				{item.text}
			</Text>
			<View style={homeStyles.todoActions}>
				<TouchableOpacity
					onPress={() => handleEditTodo(item)}
					activeOpacity={0.8}
				>
					<LinearGradient
						colors={colors.gradients.warning}
						style={homeStyles.actionButton}
					>
						<Ionicons
							name="pencil"
							size={14}
							color="#fff"
						/>
					</LinearGradient>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => handleDeleteTodo(item._id)}
					activeOpacity={0.8}
				>
					<LinearGradient
						colors={colors.gradients.danger}
						style={homeStyles.actionButton}
					>
						<Ionicons
							name="trash"
							size={14}
							color="#fff"
						/>
					</LinearGradient>
				</TouchableOpacity>
			</View>
		</View>
	)
}
