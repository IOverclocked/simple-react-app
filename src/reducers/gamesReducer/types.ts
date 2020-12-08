import { ACTIONS } from 'src/actions/actions'
import { Error, Payload } from 'src/shared/globalTypes'

type Game = {
	title: string
	premiere: string
	rating: number
}

type GamesState = {
	errors: Error
	loading: boolean
	gamesList?: Game[]
}

type GamesPayload = Payload<Game[]> & Error

type ActionFetchGame = {
	type: typeof ACTIONS.FETCH_GAMES
	payload: GamesPayload
}

type ActionReset = {
	type: typeof ACTIONS.RESET
	payload: GamesState
}

type ActionTypes = ActionFetchGame & ActionReset

export type {
	GamesState,
	ActionTypes,
	Game,
}