import { createHomeStyles } from '@/assets/styles/home.styles'
import { api } from '@/convex/_generated/api'
import { Doc, Id } from '@/convex/_generated/dataModel'
import useTheme from '@/hooks/useTheme'
import { Ionicons } from '@expo/vector-icons'
import { useMutation } from 'convex/react'
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react'
import { Alert, TouchableOpacity, View } from 'react-native'
import IsEditing from './components/IsEditing'
import IsNotEditing from './components/IsNotEditing'

type Todo = Doc<'todos'>

export default function TodoItem({ item }: { item: Todo }) {
	const [editingId, setEditingId] = useState<Id<'todos'> | null>(null)
	const [editText, setEditText] = useState('')

	const { colors } = useTheme()

	const homeStyles = createHomeStyles(colors)

	const toggleTodo = useMutation(api.todos.toggleTodo)
	const updateTodo = useMutation(api.todos.updateTodo)

	const isEditing = editingId === item._id

	const handleToggleTodo = async (id: Id<'todos'>) => {
		try {
			await toggleTodo({ id })
		} catch (error) {
			console.log('Error toggling todo', error)
			Alert.alert('Error', 'Failed to toggle todo')
		}
	}

	const handleSaveEdit = async () => {
		if (editingId) {
			try {
				await updateTodo({ id: editingId, text: editText.trim() })
				setEditText('')
				setEditingId(null)
			} catch (error) {
				console.log('Error updating todo', error)
				Alert.alert('Error', 'Failed to update todo')
			}
		}
	}

	const handleCancelEdit = () => {
		setEditText('')
		setEditingId(null)
	}

	return (
		<View style={homeStyles.todoItemWrapper}>
			<LinearGradient
				colors={colors.gradients.surface}
				style={homeStyles.todoItem}
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 1 }}
			>
				<TouchableOpacity
					style={homeStyles.checkbox}
					activeOpacity={0.7}
					onPress={() => handleToggleTodo(item._id)}
				>
					<LinearGradient
						colors={
							item.isCompleted ?
								colors.gradients.success
							:	colors.gradients.muted
						}
						style={[
							homeStyles.checkboxInner,
							{
								borderColor: item.isCompleted ? 'transparent' : colors.border,
							},
						]}
					>
						{item.isCompleted && (
							<Ionicons
								name="checkmark"
								size={18}
								color="#fff"
							/>
						)}
					</LinearGradient>
				</TouchableOpacity>
				{isEditing ?
					<IsEditing
						editText={editText}
						setEditText={setEditText}
						handleSaveEdit={handleSaveEdit}
						handleCancelEdit={handleCancelEdit}
					/>
				:	<IsNotEditing
						item={item}
						setEditText={setEditText}
						setEditingId={setEditingId}
					/>
				}
			</LinearGradient>
		</View>
	)
}
