import React from 'react'
import styled from 'styled-components'
import GlobalSvg from './assets/GlobalSvg'

const api_key = '15925382'

function App() {
	return (
		<Container className='App'>
			<Header>
				<AppName>
					<GlobalSvg id='logo' />
					React Movie App
				</AppName>
				<SearchBox>
					<GlobalSvg id='search' />
					<SearchInput placeholder="Введите название фильма на английском" />
				</SearchBox>
			</Header>
		</Container>
	)
}

export default App

const Container = styled.div``
const Header = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	background-color: #00695f;
	justify-content: space-between;
	color: white;
	padding: 10px;
	font-weight: bold;
	font-size: 25px;
	box-shadow: 0px 0px 40px rgba(239, 57, 89, 0.4);
`
const AppName = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 20px;
`
const SearchBox = styled.div`
	display: flex;
	flex-direction: row;
	padding: 10px 10px;
	background-color: white;
	border-radius: 6px;
	margin-left: 20px;
	width: 50%;
	align-items: center;
`
const SearchInput = styled.input`
	color: black;
	font-size: 16px;
	font-weight: bold;
	border: none;
	outline: none;
	margin-left: 15px;
	width: 360px;
`