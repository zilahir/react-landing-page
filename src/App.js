import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'

import Home from './screens/Home'
import Contact from './screens/Contact'
import About from './screens/About'
import Product from './screens/Product'
import Jobs from './screens/Jobs'
import BurgerMenu from './components/BurgerMenu'

function App() {
	return (
		<Router>
			<BurgerMenu />
			<Route path="/" exact component={Home} />
			<Route path="/contact" exact component={Contact} />
			<Route path="/about" exact component={About} />
			<Route path="/product" exact component={Product} />
			<Route path="/jobs" exact component={Jobs} />
		</Router>
	)
}

export default App
