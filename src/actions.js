import { CHANGE_SEARCH_FIELD } from './constants.js'

// Lets now create an a Redux action

export const setSearchField = (text) => ({
	type: CHANGE_SEARCH_FIELD,
	payload: text    // Payload alse used in Redux to mean the data transmitted	
})

// Let's test our thiory
// ----------------------

// export const setSearchField = (text) => {
// 	console.log(text);
// 	return {
// 		type: CHANGE_SEARCH_FIELD,
// 		payload: text
// 	}    // Payload alse used in Redux to mean the data transmitted	
// }

