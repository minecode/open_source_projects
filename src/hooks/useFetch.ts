import useSWR from 'swr'
import { config } from '../components/Utils'
import apiDatabase from '../services/apiDatabase'

export function useFetch<Data = any, Error = any>(url: string) {
	const { data, error, mutate } = useSWR<Data, Error>(
		url,
		async url => {
			const response = await apiDatabase.get(url, config)
			return response.data
		},
		{
			revalidateOnFocus: true
		}
	)
	return { data, error, mutate }
}
