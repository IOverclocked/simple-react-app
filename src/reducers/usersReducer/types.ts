import { ACTIONS } from 'src/actions/actions'
import { Error, Payload } from 'src/shared/globalTypes'

type UsersState = {
	errors: Error
	loading: boolean
	usersList: string[]
}

type UsersPayload = Payload<string[]> & Error

type ActionFetchUser = {
	type: typeof ACTIONS.FETCH_USERS
	payload: UsersPayload
}

type ActionReset = {
	type: typeof ACTIONS.RESET
	payload: UsersState
}

type ActionTypes = ActionFetchUser & ActionReset

export type {
	UsersState,
	ActionTypes,
}