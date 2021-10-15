import axios from 'axios'
import React from 'react'
import styled from 'styled-components'
import GlobalSvg from './assets/GlobalSvg'
import MovieComponent from './components/MovieComponent'
import MovieInfoComponent from './components/MovieInfoComponent'
import { API_KEY } from './API/API'

function App() {
	const [search, setSearch] = React.useState('')
	const [timeoutId, setTimeoutID] = React.useState()
	const [movieList, setMovieList] = React.useState([])
	const [selectMovie, setSelectMovie] = React.useState()

	const fetchData = async (string) => {
		const response = await axios.get(`http://www.omdbapi.com/?s=${string}&apikey=${API_KEY}`)
		setMovieList(response.data.Search)
	}
	const onTextChange = (event) => {
		clearTimeout(timeoutId)
		setSearch(event.target.value)
		const timeout = setTimeout(() => fetchData(event.target.value), 500)
		setTimeoutID(timeout)
	}

	return (
		<Container className='App'>
			<Header>
				<AppName>
					<GlobalSvg id='logo' />
					React Movie App
				</AppName>
				<SearchBox>
					<GlobalSvg id='search' />
					<SearchInput value={search} onChange={onTextChange} placeholder='Film in English' />
				</SearchBox>
			</Header>
			{selectMovie && (
				<MovieInfoComponent selectMovie={selectMovie} setSelectMovie={setSelectMovie} />
			)}
			<MovieListContainer>
				{movieList?.length
					? movieList.map((movie, index) => (
						<MovieComponent
							setSelectMovie={setSelectMovie}
							key={`${index}__${movie.imdbID}`}
							movie={movie}
						/>
					))
					: <Placeholder>
						<GlobalSvg id='logo' />
					</Placeholder>}
			</MovieListContainer>
		</Container>
	)
}

export default App

const Container = styled.div`
	display: flex;
	flex-direction: column;
`
const Placeholder = styled.svg`
	width: 120px;
	height: 120px;
	margin: 150px;
	opacity: 50%;
`
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
	box-shadow: 0px 0px 40px #00695f;
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
	// width: 360px;
`
const MovieListContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	padding: 30px;
	gap: 24px;
	justify-content: space-evenly;
`
