import React from 'react'
import { Data, User } from '../Interface'
import { useSelector } from 'react-redux'
import { useFetch } from '../../hooks/useFetch'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
export interface Props {
	projectName: string
	projectOwner: string
}

const useStyles = makeStyles((theme) => ({
	root: {
	  width: '100%',
	  maxWidth: '36ch',
	  backgroundColor: 'transparent',
	},
	inline: {
	  display: 'inline',
	},
  }));

const ProjectDescription: React.FC<Props> = ({ projectName, projectOwner }) => {
	const classes = useStyles();
	const selectedProject = useSelector(
		(state: Data) => state.data.selectedProject
	)

	const { data: projectContributors } = useFetch<User[]>(
		`/github/contributors/repo/${projectOwner}/${projectName}`
	)

	return (
		<>
			{selectedProject && projectContributors ? (
				<>
					<h2>Description</h2>
					<p>{selectedProject.description}</p>
					<h2>Owner</h2>
					<ListItem alignItems="flex-start">
						<ListItemAvatar>
							<Avatar alt="User avatar" src={selectedProject.owner.avatar_url} />
						</ListItemAvatar>
						<ListItemText
							primary={selectedProject.owner.login}
						/>
					</ListItem>
					<h2>Contributors</h2>
					<List className={classes.root}>
					{projectContributors.map((user: User, i: number) => {
						return(
							<ListItem alignItems="flex-start">
								<ListItemAvatar>
									<Avatar alt="User avatar" src={user.avatar_url} />
								</ListItemAvatar>
								<ListItemText
									primary={user.login}
								/>
							</ListItem>
					  	)
					})}
				    </List>
				</>
			) : (
				<></>
			)}
		</>
	)
}

export default ProjectDescription
