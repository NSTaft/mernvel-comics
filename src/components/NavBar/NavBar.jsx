import './NavBar.css'
import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users/users-services'

export default function NavBar({setUser}) {
    function handleLogOut(){
        userService.logOut()
        setUser(null)
    }

    return (
        <>
        <div className='d-flex p-2 justify-content-center'>
            <nav className="navbar-primary">
                <Link to="/library" className='text-decoration-none link-dark fs-1'>Browse Library</Link>
                &nbsp; | &nbsp;
                <Link to="/account/collection" className='text-decoration-none link-dark fs-1'>My Collection</Link>
                &nbsp; | &nbsp;
                <Link to="/account" className='text-decoration-none link-dark fs-1'>My Account</Link>
                &nbsp; | &nbsp;
                <Link to="/" onClick={handleLogOut} className='text-decoration-none link-dark fs-1'>Logout</Link>
            </nav>
        </div>
        </>
    )
}
