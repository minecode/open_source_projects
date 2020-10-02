export interface Project {
	id: number
	node_id: string
	name: string
	full_name: string
	owner: {
		login: string
		id: number
		node_id: string
		avatar_url: string
		gravatar_id: string
		url: string
		received_events_url: string
		type: string
		location: string
	}
	private: boolean
	html_url: string
	description: string
	fork: boolean
	url: string
	created_at: string
	updated_at: string
	pushed_at: string
	homepage: string
	size: number
	stargazers_count: number
	watchers_count: number
	language: string
	forks_count: number
	open_issues_count: number
	master_branch: string
	default_branch: string
	score: number
	readme: string
}

export interface Data {
	data: {
		auth: {
			authenticated: boolean
			user: {
				id: string
				name: string
				surname: string
				image: string
			}
			token: string
		}
		selectedProject: Project
		listOfProjects: Project[]
		listOfUsers: User[]
		location: string
	}
}

export interface User {
	login: string
	id: number
	node_id: string
	avatar_url: string
	gravatar_id: string
	url: string
	html_url: string
	followers_url: string
	following_url: string
	gists_url: string
	starred_url: string
	subscriptions_url: string
	organizations_url: string
	repos_url: string
	events_url: string
	received_events_url: string
	type: string
	site_admin: false
	name: string
	company: string
	blog: string
	location: string
	email: string
	hireable: boolean
	bio: string
	twitter_username: string
	public_repos: number
	public_gists: number
	followers: number
	following: number
	created_at: string
	updated_at: string
	plan: {
		name: string
		space: number
		collaborators: number
		private_repos: number
	}
}

export interface Content {
	type: string
	encoding: string
	size: number
	name: string
	path: string
	content: string
	sha: string
	url: string
	git_url: string
	html_url: string
	download_url: string
	_links: {
		git: string
		self: string
		html: string
	}
}
