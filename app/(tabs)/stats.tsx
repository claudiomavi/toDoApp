import { createStatsStyles } from '@/assets/styles/stats.styles'
import GeneralHeader from '@/components/GeneralHeader'
import { api } from '@/convex/_generated/api'
import useTheme from '@/hooks/useTheme'
import { useQuery } from 'convex/react'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Stat from '../../components/Stat'

export default function StatsScreen() {
	const { colors } = useTheme()

	const statsStyles = createStatsStyles(colors)

	const todos = useQuery(api.todos.getTodos)
	const totalTodos = todos ? todos.length : 0
	const completedTodos =
		todos ? todos.filter((todo) => todo.isCompleted).length : 0
	const activeTodos = totalTodos - completedTodos

	return (
		<LinearGradient
			colors={colors.gradients.background}
			style={statsStyles.container}
		>
			<SafeAreaView style={statsStyles.safeArea}>
				<GeneralHeader
					title="Stats"
					icon="stats-chart"
				/>
				<View style={statsStyles.section}>
					<View style={statsStyles.statsContainer}>
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
				</View>
			</SafeAreaView>
		</LinearGradient>
	)
}
