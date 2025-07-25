import { createSettingsStyles } from '@/assets/styles/settings.styles'
import { api } from '@/convex/_generated/api'
import useTheme from '@/hooks/useTheme'
import { useQuery } from 'convex/react'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Text, View } from 'react-native'
import Stat from './components/Stat'

export default function ProgressStats() {
	const { colors } = useTheme()

	const settingsStyles = createSettingsStyles(colors)

	const todos = useQuery(api.todos.getTodos)
	const totalTodos = todos ? todos.length : 0
	const completedTodos =
		todos ? todos.filter((todo) => todo.isCompleted).length : 0
	const activeTodos = totalTodos - completedTodos

	return (
		<LinearGradient
			colors={colors.gradients.surface}
			style={settingsStyles.section}
		>
			<Text style={settingsStyles.sectionTitle}>Progress stats</Text>

			<View style={settingsStyles.statsContainer}>
				{/* TOTAL TODOS */}
				<Stat
					principalColor="primary"
					iconName="list"
					statNumber={totalTodos}
					statLabel="Total Todos"
				/>
				{/* COMPLETED TODOS */}
				<Stat
					principalColor="success"
					iconName="checkmark-circle"
					statNumber={completedTodos}
					statLabel="Completed"
				/>
				{/* ACTIVE TODOS */}
				<Stat
					principalColor="warning"
					iconName="time"
					statNumber={activeTodos}
					statLabel="Active"
				/>
			</View>
		</LinearGradient>
	)
}
