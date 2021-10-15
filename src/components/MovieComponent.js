import React from 'react'
import styled from 'styled-components'

const MovieComponent = ({ movie, setSelectMovie }) => {
	const { Title, imdbID, Year, Type, Poster } = movie
	return (
		<MovieContainer onClick={() => setSelectMovie(imdbID)}>
			<CoverImage src={Poster} />
			<MovieName>
				{Title}
			</MovieName>
			<InfoColumn>
				<MovieInfo>Year: {Year}</MovieInfo>
				<MovieInfo>Type: {Type}</MovieInfo>
			</InfoColumn>
		</MovieContainer>
	)
}

export default MovieComponent

const MovieContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 10px;
	width: 280px;
	border-radius: 6px;
	box-shadow: 0 3px 10px 0 #00695f;
	cursor: pointer;
`
const CoverImage = styled.img`
	object-fit: cover;
	height: 362px;
`
const MovieName = styled.span`
	font-size: 18px;
	font-weught: 600;
	color: #00695f;
	margin: 15px 0;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
`
const InfoColumn = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`
const MovieInfo = styled.span`
	font-size: 16px;
	font-weight: 500;
	color: #00695f;
	text-transform: capitalize;
`