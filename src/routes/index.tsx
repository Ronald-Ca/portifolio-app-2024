import { Routes, Route } from 'react-router-dom'
import HomePage from '../page'
import Login from '../page/login/login'
import Config from '../page/config'
import About from '../page/about/about'
import Skills from '../page/skill/skills'
import Projects from '../page/projects/projects'
import Contact from '../page/contact/contact'

export default function App() {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/about' element={<About />} />
			<Route path='/skills' element={<Skills />} />
			<Route path='/projects' element={<Projects />} />
			<Route path='/contact' element={<Contact />} />
			<Route path='/login' element={<Login />} />
			<Route path='/config' element={<Config />} />
		</Routes>
	)
}
