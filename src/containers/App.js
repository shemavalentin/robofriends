import React,{ useState, useEffect} from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary'
//import { robots } from './robots' ; // Once happened to have many variables I keep on adding to grab it. {robots, ....}
import './App.css'

import { setSearchField } from '../actions';

const mapStateToProps = state => {
	return {
		//searchfield: state.reducerSearchRobots.searchfield.

		searchfield: state.searchfield
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		onSearchChange: (event) => dispatch(setSearchField(event.target.value))
	}
}

//const App = () => { // Then in order to use state I have to transform this from function to class
function App(){
	const [robots, setRobots] = useState([])
	const [searchfield, setSearchfield] = useState('')
	// const [count, setCount] = useState(0)

	useEffect(() => {	
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => { setRobots(users) });
		// console.log(count);

	// }, [count])
		}, [])

  // We can remove onSearchChange As it is coming down as a prop from mapDispacthToProps.

	const onSearchChange = (event) => {
		//To update the state in react: 
		setSearchfield(event.target.value)		
	}
	const filteredRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})

	 		// When it is taking longer to display data on our page we can do something like the following
	return !robots.length ?
	<h1> Loading ...</h1>:
	(
		<div className = 'tc'>
				<h1 className='f1'> JS Dashboard Search </h1>
				{/*<button onClick={()=> setCount(count + 1)}> Click Me </button>*/}
				<SearchBox searchChange={onSearchChange} />				
				<Scroll>
					<ErrorBoundary fallback = {<p> Something went wrong! </p>}>
						<CardList robots={filteredRobots} />
					</ErrorBoundary>
				</Scroll>			
		</div>
	);	
}	

export default connect(mapStateToProps, mapDispatchToProps)(App);
// connect() is a higher order function. means a function that returns another function