import styled from 'styled-components'

export const ContainerDescription = styled.div`
	grid-area: PD;
	display: flex;
	flex-direction: column;
	background-color: var(--primary);
`

export const Info = styled.div`
	padding: 30px;
	display: flex;
	flex-direction: column;
	color: var(--white);
`

export const ContainerInfo = styled.div`
	grid-area: PI;
	align-items: center;
	padding: 0 17px;
	background-color: var(--primary);
	box-shadow: var(--secondary) 0px 1px 0px 0px;
	z-index: 2;
	flex-direction: column;
	display: grid;
	grid-template-columns: 100%;
	grid-template-rows: 46px auto auto auto;
	grid-template-areas:
		'PT'
		'PD'
		'PD'
		'PD';
	overflow-y: scroll;
	::-webkit-scrollbar {
		display: none;
	}
	-ms-overflow-style: none;
	scrollbar-width: none;
`

export const Title = styled.h1`
	grid-area: PT;
	margin-left: 9px;
	font-size: 16px;
	font-weight: bold;
	color: var(--white);
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	text-align: center;
`
