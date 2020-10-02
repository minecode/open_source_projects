import React from 'react'
import { Data } from '../Interface'
import ProjectDescription from '../ProjectDescription'
import { useSelector } from 'react-redux'
import { ContainerInfo, ContainerDescription, Title, Info } from './styles'

const ProjectsList: React.FC = () => {
	const selectedProject = useSelector(
		(state: Data) => state.data.selectedProject
	)
	return selectedProject ? (
		<ContainerInfo>
			<Title>{selectedProject.name}</Title>
			<ContainerDescription>
				<Info>
					<ProjectDescription
						projectName={selectedProject.name}
						projectOwner={selectedProject.owner.login}
					/>
				</Info>
			</ContainerDescription>
		</ContainerInfo>
	) : (
		<></>
	)
}

export default ProjectsList
