import './App.css'
import NavBar from '../../components/NavBar/NavBar.jsx'
import Header from '../../components/Header/Header.jsx'

import { Routes, Route, Navigate } from 'react-router-dom'
import Account from '../Account/Account.jsx'
import AuthPage from '../AuthPage/AuthPage.jsx'
import Collection from '../Collection/Collection.jsx'
import Library from '../Library/Library.jsx'
import { useState } from 'react'
import {getUser} from '../../utilities/users/users-services'


function App() {
	const [user, setUser] = useState(getUser());

	return (
		<div className='App'>
			{user ? (
				<>
					<Header />
					<NavBar setUser={setUser} />
					<Routes>
						<Route path='/account' element={<Account />} />
						<Route path='/account/collection' element={<Collection />} />
						<Route path='/library' element={<Library />} />
						<Route path='/*' element={<Navigate to='/account' />} />
					</Routes>
				</>
			) : (
				<AuthPage setUser={setUser} />
			)}
		</div>
	)
}

export default App
