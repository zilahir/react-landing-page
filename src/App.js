import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'

import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Product from './pages/Product'
import Jobs from './pages/Jobs'
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
