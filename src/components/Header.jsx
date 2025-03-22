import Logo from '../assets/logo.svg';

const Header = () => {
    return (
        <header>
            <div className="container">
                <img src={Logo} alt="" />
            </div>
        </header>
    )
}

export default Header;