import { TEST_ACTION_TYPE } from '../actions/actionTypes'

const initialState = {
	testItem: 'hello world',
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
	case TEST_ACTION_TYPE:
		return {
			...state,
			testItem: action.payload.testItem,
		}
	default:
		return state
	}
}

export default reducer
