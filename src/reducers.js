import { CHANGE_SEARCH_FIELD } from './constants.js'

const initialState = {
	searchfield: ''
}

// Now lets create a reducer(It should be a pure function). and becouse we need to use it in other places we export it.
export const reducerSearchRobots = (state = initialState,action= {}) => {
	switch(action.type){
		case CHANGE_SEARCH_FIELD:
			return Object.assign({}, state, { searchfield:action.payload });
			//or use destructuring for more legibility
			//return { ...state, searchfield: action.payload }

		default:
			return state;
	}

} // action is returned as an object
