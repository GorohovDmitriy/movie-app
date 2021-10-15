import axios from 'axios'
import React from 'react'
import styled from 'styled-components'
import { API_KEY } from '../API/API'

const MovieInfoComponent = (props) => {
	const [movieInfo, setMovieInfo] = React.useState()
	const { selectMovie, setSelectMovie } = props

	React.useEffect(() => {
		axios
			.get(`http://www.omdbapi.com/?i=${selectMovie}&apikey=${API_KEY}`)
			.then((resp) => setMovieInfo(resp.data))
	}, [selectMovie])

	return (
		<Container>
			{movieInfo ? (
				<>
					<CoverImage src={movieInfo?.Poster} />
					<InfoColumn>
						<MovieName>
							{movieInfo?.Type}: {movieInfo?.Title}
						</MovieName>
						<MovieInfo>
							IMDB rating: <span>{movieInfo?.imdbRating}</span>
						</MovieInfo>
						<MovieInfo>
							Year: <span>{movieInfo?.Year}</span>
						</MovieInfo>
						<MovieInfo>
							Language: <span>{movieInfo?.Language}</span>
						</MovieInfo>
						<MovieInfo>
							Rated: <span>{movieInfo?.Rated}</span>
						</MovieInfo>
						<MovieInfo>
							Released: <span>{movieInfo?.Released}</span>
						</MovieInfo>
						<MovieInfo>
							Runtime: <span>{movieInfo?.Runtime}</span>
						</MovieInfo>
						<MovieInfo>
							Genre: <span>{movieInfo?.Genre}</span>
						</MovieInfo>
						<MovieInfo>
							Director: <span>{movieInfo?.Director}</span>
						</MovieInfo>
						<MovieInfo>
							Actors: <span>{movieInfo?.Actors}</span>
						</MovieInfo>
						<MovieInfo>
							Plot: <span>{movieInfo?.Plot}</span>
						</MovieInfo>
					</InfoColumn>
					<Close onClick={() => setSelectMovie()}>x</Close>
				</>
			) : (
				<h1 style={{ color: '#00695f' }}>Loading...</h1>
			)}
		</Container>
	)
}

export default MovieInfoComponent

const Close = styled.span`
	font-size: 16px;
	color: white;
	background-color: #00695f;
	height: fit-content;
	padding: 10px;
	border-radius: 50%;
	cursor: pointer;
	opacity: 0.8;
`

const MovieInfo = styled.span`
	font-size: 16px;
	font-weught: 500;
	color: #00695f;
	margin: 4px 0;
	overflow: hidden;
	text-transform: capitalize;
	text-overflow: ellipsis;

	& span {
		opacity: 0.5;
	}
`

const Container = styled.div`
	display: flex;
	flex-direction: row;
	padding: 20px 30px;
	justify-content: center;
	border-bottom: 1px solid #00695f;
`
const CoverImage = styled.img`
	object-fit: cover;
	height: 352px;
`
const InfoColumn = styled.div`
	display: flex;
	flex-direction: column;
	margin: 20px;
`
const MovieName = styled.span`
	font-size: 22px;
	font-weught: 600;
	color: #00695f;
	margin: 15px 0;
	white-space: nowrap;
	overflow: hidden;
	text-transform: capitalize;
	text-overflow: ellipsis;
`
