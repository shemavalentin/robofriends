import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './containers/App';
//import SearchBox from './SearchBox';
//import Card from './Card';
//import CardList from './CardList';
import 'tachyons';
import reportWebVitals from './reportWebVitals';
import { reducerSearchRobots } from './reducers';

const store = createStore(reducerSearchRobots)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
   // <App />
  //Note that We can add props(properties to our components. props are like HTML attributs)
);
 // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); 


