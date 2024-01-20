import './Navbar.css'
export default function Navbar() {
    return (
        <nav id='navbar'>
            <div className="logo-container">
                <div className="sun">
                    
                </div>
            </div>
            <div className="hamburger-menu">asdfjkb</div>
            <div className="nav-options">
                <div className="nav-option">
                    <a href="/#awesome">
                        <h1>Home</h1>
                    </a>
                </div>
                <div className="nav-option">
                    <a href="/#about">
                        <h1>About</h1>

                    </a>
                </div>
                <div className="nav-option">
                    <a href="/#events">
                        <h1>Events</h1>

                    </a>
                </div>
                <div className="nav-option">
                    <a href="/#contact">
                        <h1>Contact</h1>
                    </a>
                </div>
            </div>
        </nav>
    )
}