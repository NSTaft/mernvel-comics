import './NavBar.css'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <>
        <div className='d-flex p-2 justify-content-center'>
            <nav>
                <Link to="/library" className='text-decoration-none'>Browse Library</Link>
                &nbsp; | &nbsp;
                <Link to="/account/collection" className='text-decoration-none'>My Collection</Link>
                &nbsp; | &nbsp;
                <Link to="/account" className='text-decoration-none'>My Account</Link>
                &nbsp; | &nbsp;
                <Link to="/authentication" className='text-decoration-none'>Logout</Link>
            </nav>
        </div>
        </>
    )
}

