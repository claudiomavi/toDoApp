import { createHomeStyles } from '@/assets/styles/home.styles'
import EmptyState from '@/components/EmptyState'
import Header from '@/components/Header'
import LoadingSpinner from '@/components/LoadingSpinner'
import TodoInput from '@/components/TodoInput'
import TodoItem from '@/components/TodoItem/TodoItem'
import { api } from '@/convex/_generated/api'
import { Doc } from '@/convex/_generated/dataModel'
import useTheme from '@/hooks/useTheme'
import { useQuery } from 'convex/react'
import { LinearGradient } from 'expo-linear-gradient'
import { FlatList, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

type Todo = Doc<'todos'>

export default function Index() {
	const { colors } = useTheme()

	const homeStyles = createHomeStyles(colors)

	const todos = useQuery(api.todos.getTodos)

	const isLoading = todos === undefined

	if (isLoading) return <LoadingSpinner />

	const renderTodoItem = ({ item }: { item: Todo }) => {
		return <TodoItem item={item} />
	}

	return (
		<LinearGradient
			colors={colors.gradients.background}
			style={homeStyles.container}
		>
			<StatusBar barStyle={colors.statusBarStyle} />
			<SafeAreaView style={homeStyles.safeArea}>
				<Header />
				<TodoInput />
				<FlatList
					data={todos}
					renderItem={renderTodoItem}
					keyExtractor={(item) => item._id}
					style={homeStyles.todoList}
					contentContainerStyle={homeStyles.todoListContent}
					ListEmptyComponent={<EmptyState />}
					showsVerticalScrollIndicator={false}
				/>
			</SafeAreaView>
		</LinearGradient>
	)
}
