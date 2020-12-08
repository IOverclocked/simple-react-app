import { ACTIONS, REQUEST, SUCCESS, FAILURE } from 'src/actions/actions'
import { GamesState, ActionTypes } from './types'

const initialState: GamesState = {
	errors: null,
	loading: false,
	gamesList: [],
}

const gamesReducer = (state: GamesState = initialState, action: ActionTypes): GamesState => {
	switch (action.type) {
		case REQUEST(ACTIONS.FETCH_GAMES): {
			return { ...state, loading: true }
		}
		case FAILURE(ACTIONS.FETCH_GAMES): {
			return { ...state, loading: false, errors: action.payload }
		}
		case SUCCESS(ACTIONS.FETCH_GAMES): {
			return { ...state, loading: false, gamesList: action.payload.data }
		}
		case ACTIONS.RESET: {
			return initialState
		}
		default:
			return state
	}
}

export { gamesReducer }
