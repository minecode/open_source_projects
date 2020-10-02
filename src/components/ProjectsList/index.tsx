import React, { useState } from 'react'
import ProjectButton from '../ProjectButton'
import { Data, Project } from '../Interface'
import { useDispatch, useSelector } from 'react-redux'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { ContainerList, Category } from './styles'
import apiDatabase from '../../services/apiDatabase'
import { config } from '../Utils'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			'& > *': {
				margin: theme.spacing(1)
			}
		},
		root_list: {
			width: '100%',
			maxWidth: 360,
			backgroundColor: 'transparent'
		}
	})
)

const ProjectsList: React.FC = () => {
	const classes = useStyles()

	const dispatch = useDispatch()

	const data = useSelector((state: Data) => state.data)
	const [location, setLocation] = useState('')

	const listOfProjects = useSelector(
		(state: Data) => state.data.listOfProjects
	)

	const handleChangeInput = async event => {
		event.preventDefault()
		const newData = { data: data }
		await apiDatabase(`/network/git/query/${location}`, config).then(
			listOfProjects => {
				console.log('1', listOfProjects)
				console.log('2', listOfProjects.data)
				newData.data.listOfProjects = listOfProjects.data
				dispatch({ type: 'SEARCH', data: newData })
			}
		)
	}

	const selectProject = (project: Project) => {
		const newData = { data: data }
		newData.data.selectedProject = project
		dispatch({ type: 'PROJECT', data: newData })
	}

	const [selectedIndex, setSelectedIndex] = React.useState(1)

	const handleListItemClick = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>,
		index: number
	) => {
		setSelectedIndex(index)
	}

	return (
		<ContainerList>
			<form
				className={classes.root}
				noValidate
				autoComplete="off"
				onSubmit={handleChangeInput}
			>
				<TextField
					id="standard-basic"
					label="Standard"
					value={location}
					onInput={event => {
						setLocation(event.target.value)
					}}
				/>
				<Button variant="contained" color="primary" type="submit">
					Search
				</Button>
			</form>
			<div id="listOfProjects">
				{listOfProjects &&
					listOfProjects.length > 0 &&
					listOfProjects.map((project: Project, i: number) => {
						return (
							<div key={i} onClick={() => selectProject(project)}>
								<List className={classes.root_list}>
									<ProjectButton
										projectName={project.name}
										projectOwner={project.owner.login}
									/>
								</List>
							</div>
						)
					})}
			</div>
		</ContainerList>
	)
}

export default ProjectsList
