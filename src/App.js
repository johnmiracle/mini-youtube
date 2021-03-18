/** @format */

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { Footer } from './components';
import { Search, VideoGrid, VideoPlay } from './pages/index.js';
function App() {

	return (
		<div className="App">
			<Router>
				<Route path="/" exact={true} component={Search} />
				<Route path="/video" component={VideoPlay} />
				<Route path="/video_list" component={VideoGrid} />
				<Footer />
			</Router>
		</div>
	);
}

export default App;
