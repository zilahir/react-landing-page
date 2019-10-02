import { TEST_ACTION_TYPE } from './actionTypes'

export const testAction = testItem => ({
	type: TEST_ACTION_TYPE,
	payload: {
		testItem,
	},
})
