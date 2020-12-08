import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import promise from 'redux-promise-middleware'
import thunk from 'redux-thunk'

import { gamesReducer } from 'src/reducers/gamesReducer'
import { usersReducer } from 'src/reducers/usersReducer'

const reducers = combineReducers({
	games: gamesReducer,
	users: usersReducer,
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk, promise)))

export type RootState = ReturnType<typeof reducers>

export { store }
