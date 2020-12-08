import React, { useEffect, useCallback, ReactNode } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { Alert } from '@material-ui/lab'

import { RootState } from 'src/store/store'
import { Game } from 'src/reducers/gamesReducer'
import { fetchGames } from 'src/actions/gamesActions'
import { CardComponent } from 'src/components'

const WrapperStyled = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
`

const Games = (): React.ReactElement => {
	const { games } = useSelector((state: RootState) => state)
	const { gamesList } = games

	const dispatch = useDispatch()

	const fetchData = useCallback((): void => {
		dispatch(fetchGames())
	}, [dispatch])

	const renderContent = useCallback((): ReactNode => {
		if (gamesList) {
			return gamesList.map((game: Game) => {
				const { title, premiere, rating } = game
				
				return (
					<CardComponent
						title={title}
						subheader={`Premiere: ${premiere}`}
						description={`Player rating: ${rating}`}
					/>
				)
			})
		}

		return <Alert severity="warning">This page is empty.</Alert>
	}, [gamesList])

	useEffect(() => {
		fetchData()
	}, [fetchData])

	return <WrapperStyled>{renderContent()}</WrapperStyled>
}

export { Games }
