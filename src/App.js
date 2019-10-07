import React from 'react'
import { Route, HashRouter } from 'react-router-dom'

import Home from './screens/Home'
import Contact from './screens/Contact'

function App() {
	return (
		<HashRouter>
			<Route path="/" exact component={Home} />
			<Route path="/contact" exact component={Contact} />
		</HashRouter>
	)
}

export default App
