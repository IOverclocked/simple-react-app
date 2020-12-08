import { ACTIONS, REQUEST, SUCCESS, FAILURE } from 'src/actions/actions'
import { UsersState, ActionTypes } from './types'

const initialState: UsersState = {
	errors: null,
	loading: false,
	usersList: [],
}

const usersReducer = (state: UsersState = initialState, action: ActionTypes): UsersState => {
	switch (action.type) {
		case REQUEST(ACTIONS.FETCH_USERS): {
			return { ...state, loading: true }
		}
		case FAILURE(ACTIONS.FETCH_USERS): {
			return { ...state, loading: false, errors: action.payload }
		}
		case SUCCESS(ACTIONS.FETCH_USERS): {
			return { ...state, loading: false, usersList: action.payload.data }
		}
		case ACTIONS.RESET: {
			return initialState
		}
		default:
			return state
	}
}

export { usersReducer }
