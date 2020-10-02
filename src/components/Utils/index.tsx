export const config = {
	headers: {
		Authorization: `Basic ${
			process.env.NEXT_PUBLIC_REACT_APP_APIKEY || 'null'
		}`,
		Accept: 'application/vnd.github.antiope-preview+json'
	}
}
