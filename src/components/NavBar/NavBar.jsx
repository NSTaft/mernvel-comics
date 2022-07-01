import './NavBar.css'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <>
            <nav>
                <Link to="/library">Browse Library</Link>
                &nbsp; | &nbsp;
                <Link to="/account/collection">My Collection</Link>
                &nbsp; | &nbsp;
                <Link to="/account">My Account</Link>
                &nbsp; | &nbsp;
                <Link to="/authentication">Logout</Link>
            </nav>
        </>
    )
}

