import React from 'react'
import { Route, HashRouter } from 'react-router-dom'

import Home from './screens/Home'

function App() {
	return (
		<HashRouter>
			<Route path="/" exact component={Home} />
		</HashRouter>
	)
}

export default App
