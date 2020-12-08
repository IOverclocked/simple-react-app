const REQUEST = (actionType: string): string => `${actionType}_PENDING`
const SUCCESS = (actionType: string): string => `${actionType}_FULFILLED`
const FAILURE = (actionType: string): string => `${actionType}_REJECTED`

const ACTIONS = {
	FETCH_GAMES: 'games/FETCH_GAMES',

	FETCH_USERS: 'users/FETCH_USERS',

	RESET: 'RESET',
}

export { ACTIONS, REQUEST, SUCCESS, FAILURE }
