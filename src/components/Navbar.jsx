import '../css/Navbar.css'
import Logo from "../assets/logo.png";

function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="inner">
                    <div className="logo">
                        <a href=""><img src={Logo} alt="logo" width="64px"/><div>weizzx</div></a>
                    </div>
                    <div className="links">
                        <div>
                            <a href="#home">Home</a>
                            <a href="#skills">$kill$</a>
                            <a href="#projects">Project$</a>
                            <a href="#contact">Contact</a>
                        </div>
                    </div>
                    <div className="email">
                        <a href="mailto:help@weizzx.xyz">help@weizzx.xyz</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;