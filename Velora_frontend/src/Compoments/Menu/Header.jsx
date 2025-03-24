import "./Header.css";
import Hamburger from "hamburger-react";
import UserIcon from "../../assets/images/UserIcon.png";
import CartIcon from "../../assets/images/CartIcon.png";

function Header() {
    return (
        <header>
            <div className="CartUserContainer">
                <a href="/"><img src={UserIcon} alt="user icon"/></a>
                <a href="/"><img src={CartIcon} alt="cart icon"/></a>
            </div>

            <Hamburger size={50} color={"#F1EDE1"}/>
        </header>
    );
}

export default Header;
