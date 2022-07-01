import './NavBar.css'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <>
            <nav>
                <Link to="">Browse Library</Link>
                &nbsp; | &nbsp;
                <Link to="">My Collection</Link>
                &nbsp; | &nbsp;
                <Link to="">My Account</Link>
                &nbsp; | &nbsp;
                <Link to="">Logout</Link>
            </nav>
        </>
    )
}

