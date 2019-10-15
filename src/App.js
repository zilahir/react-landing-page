import React from 'react'
import { Route, HashRouter } from 'react-router-dom'

import Home from './screens/Home'
import Contact from './screens/Contact'
import About from './screens/About'
import Product from './screens/Product'

function App() {
	return (
		<HashRouter>
			<Route path="/" exact component={Home} />
			<Route path="/contact" exact component={Contact} />
			<Route path="/about" exact component={About} />
			<Route path="/product" exact component={Product} />
		</HashRouter>
	)
}

export default App
