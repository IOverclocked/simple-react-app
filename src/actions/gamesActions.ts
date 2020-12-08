import { Dispatch } from 'redux'

import { ACTIONS } from './actions'
import { GAMES } from './mocks'

export const fetchGames = () => async (dispatch: Dispatch) => {
	return dispatch({
		type: ACTIONS.FETCH_GAMES,
		payload: new Promise((resolve) => resolve({ data: GAMES }))
	})
}
