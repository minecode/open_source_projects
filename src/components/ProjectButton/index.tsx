import React from 'react'
import { Data } from '../Interface'
import { useSelector } from 'react-redux'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'

export interface Props {
	projectName: string
	projectOwner: string
}

const ProjectButton: React.FC<Props> = ({ projectName, projectOwner }) => {
	const selectedProject = useSelector(
		(state: Data) => state.data.selectedProject
	)

	return selectedProject ? (
		<ListItem button selected={selectedProject.name === projectName}>
			<ListItemAvatar>
				<Avatar
					alt="Github"
					src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
				/>
			</ListItemAvatar>
			<ListItemText primary={projectName} secondary={projectOwner} />
		</ListItem>
	) : (
		<ListItem button selected={false}>
			<ListItemAvatar>
				<Avatar
					alt="Github"
					src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
				/>
			</ListItemAvatar>
			<ListItemText primary={projectName} secondary={projectOwner} />
		</ListItem>
	)
}

export default ProjectButton
