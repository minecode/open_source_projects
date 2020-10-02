import React from 'react'
import ProjectsList from '../ProjectsList'
import ProjectInfo from '../ProjectInfo'
import { Grid } from './styles'

const Layout: React.FC = () => {
	return (
		<Grid>
			<ProjectsList />
			<ProjectInfo />
		</Grid>
	)
}

export default Layout
