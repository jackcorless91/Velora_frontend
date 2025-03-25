import "./Header.css";
import Hamburger from "hamburger-react";
import UserIcon from "../../assets/images/UserIcon.png";
import CartIcon from "../../assets/images/CartIcon.png";
import HeartIcon from "../../assets/images/HeartIcon.png"
import SearchIcon from "../../assets/images/SearchIcon.png"

import {useState} from "react";


function Header() {

    const [open, setOpen] = useState(false)

    return (
        <>
            <header>
                <div className="CartUserContainer">
                    <a href="/"><img src={UserIcon} alt="user icon"/></a>
                    <a href="/"><img src={CartIcon} alt="cart icon"/></a>
                </div>

                <Hamburger
                    size={50}
                    color={"#F1EDE1"}
                    onToggle={() => setOpen(!open)}
                />

                <div className={`HamburgerMenuOpen ${open ? "opacity-100" : "opacity-0"}
                    transition-opacity duration-300`}>
                    <div className="MenuIcons">
                        {/*<a href="/"><img src={HeartIcon} alt="heart icon"/></a>*/}
                        {/*<a href="/"><img src={SearchIcon} alt="search icon"/></a>*/}
                        <a href="/">heart</a>
                        <a href="/">search</a>
                    </div>
                    <div className="MenuPageLinks">
                        <a href="/">Dino Den - Home</a>
                        <a href="/">Our Story</a>
                        <a href="/">Fresh fossils - New</a>
                        <a href="/">Roaring Styles</a>
                        <a href="/">Roar About Us</a>
                        <a href="/">Contact Us</a>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
