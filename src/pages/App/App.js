import './App.css';
import NavBar from "../../components/NavBar/NavBar.jsx"
import Header from "../../components/Header/Header.jsx"

import { Routes, Route, Navigate } from 'react-router-dom';
import Account from "../Account/Account.jsx"
import AuthPage from "../AuthPage/AuthPage.jsx"
import Collection from "../Collection/Collection.jsx"
import Library from "../Library/Library.jsx"

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/account" element={<Account />} />
        <Route path="/account/collection" element={<Collection />} />
        <Route path="/library" element={<Library />} />
        <Route path="/authentication" element={<AuthPage />}/>
        <Route path="/*" element={<Navigate to="/authentication" />} />
      </Routes>
    </div>
  );
}

export default App;
