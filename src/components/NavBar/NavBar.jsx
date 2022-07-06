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
            <nav>
                <Link to="/library">Browse Library</Link>
                &nbsp; | &nbsp;
                <Link to="/account/collection">My Collection</Link>
                &nbsp; | &nbsp;
                <Link to="/account">My Account</Link>
                &nbsp; | &nbsp;
                <Link to="/" onClick={handleLogOut}>Logout</Link>
            </nav>
        </>
    )
}
