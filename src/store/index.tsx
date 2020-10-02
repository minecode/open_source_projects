import { createStore } from 'redux'

const INITIAL_STATE = {
	data: {
		selectedProject: null,
		listOfProjects: null
	}
}

function globalStore(state: any, action: any) {
	switch (action.type) {
		case 'PROJECT':
			return action.data
		case 'SEARCH':
			return action.data
		default:
			return INITIAL_STATE
	}
}

const store = createStore(globalStore)

export default store
