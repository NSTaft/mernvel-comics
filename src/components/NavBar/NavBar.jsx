import './NavBar.css'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <>
            <nav>
                <Link>Browse Library</Link>
                &nbsp; | &nbsp;
                <Link>My Collection</Link>
                &nbsp; | &nbsp;
                <Link>My Account</Link>
                &nbsp; | &nbsp;
                <Link>Logout</Link>
            </nav>
        </>
    )
}

