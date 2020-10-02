import React from 'react'
import { Data, Content } from '../Interface'
import { useSelector } from 'react-redux'
import { useFetch } from '../../hooks/useFetch'
import MarkdownRender from './MarkdownRender'

export interface Props {
	projectName: string
	projectOwner: string
}

const ProjectDescription: React.FC<Props> = ({ projectName, projectOwner }) => {
	const selectedProject = useSelector(
		(state: Data) => state.data.selectedProject
	)

	const { data: projectColaborators } = useFetch<Content>(
		`/repos/${projectOwner}/${projectName}/collaborators`
	)

	return (
		<>
			{selectedProject && projectColaborators ? (
				<>
					<h2>Description</h2>
					<p>{selectedProject.description}</p>
					<h2>Owner</h2>
					<p>{selectedProject.owner.login}</p>
					<h2>Colaborators</h2>
					<p>{projectColaborators}</p>
					{/* <MarkdownRender source={atob(projectReadme.content)} /> */}
				</>
			) : (
				<></>
			)}
		</>
	)
}

export default ProjectDescription
