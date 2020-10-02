import styled from 'styled-components'

export const Grid = styled.div`
	display: grid;
	grid-template-columns: auto 80%;
	grid-template-rows: auto auto auto;
	grid-template-areas:
		'PL PI'
		'PL PI'
		'PL PI';
	height: 100vh;
`

export const Container = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background-color: var(--primary);
	max-height: calc(100vh - 46px);
	overflow-y: scroll;
	::-webkit-scrollbar {
		width: 4px;
	}
	::-webkit-scrollbar-thumb {
		background-color: var(--tertiary);
		border-radius: 4px;
	}
	::-webkit-scrollbar-track {
		background-color: var(--secondary);
	}
`
