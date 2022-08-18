import React, { useEffect, useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsFront } from "react-icons/bs";
import { AiOutlineArrowUp } from "react-icons/ai";
import "./navbar.css";
const navbarItems = [
    { title: "Home", href: "#home" },
    { title: "Courses", href: "#courses" },
    { title: "Future Coures", href: "#future-coures" },
    { title: "App", href: "#app" },
    { title: "Contact", href: "#contact" },
];
const NavbarItem = ({ title, href, fn }) => {
    return (
        <li className='n-menu-item' onClick={fn}>
            <a className='n-menu-item-link' href={href}>
                {title}
            </a>
        </li>
    );
};
const Navbar = () => {
    const [navScrolled, setNavScrolled] = useState(false);
    const [scrollUp, setScrollUp] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const menuItems = useRef(null);
    const handleMenu = () => {
        setOpenMenu((s) => !s);
    };

    const handleActiveMenuItem = (event) => {
        event.stopPropagation();
        const menuItemsArray = [...menuItems.current.children];
        for (let item = 0; item < menuItemsArray.length; item++) {
            if (menuItemsArray[item].classList.contains("n-active")) {
                menuItemsArray[item].classList.remove("n-active");
            }
            if (event.target.parentElement.nodeName === "LI") {
                event.target.parentElement.classList.add("n-active");
            }
            setOpenMenu(false); //to close mobile-menu after select
        }
    };
    useEffect(() => {
        const handleScroll = (event) => {
            //to add shadow for navbar
            if (window.scrollY > 10) {
                setNavScrolled(true);
            } else {
                setNavScrolled(false);
            }
            //to add show scroll-up
            if (window.scrollY > 500) {
                setScrollUp(true);
            } else {
                setScrollUp(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={`navbar ${navScrolled ? "n-scrolled" : ""} ${
                openMenu ? " bg-w" : ""
            }`}>
            <div className='g-container n-center'>
                {/* navbar Logo */}
                <div className='n-logo'>
                    <BsFront />
                    <span>Front-end</span>
                </div>
                {/* navbar Menu */}
                <ul
                    className={`n-menu ${openMenu ? "n-open" : ""}`}
                    onClick={() => setOpenMenu(false)}
                    ref={menuItems}>
                    {navbarItems.map((item, index) => {
                        return (
                            <NavbarItem key={index} {...item} fn={handleActiveMenuItem} />
                        );
                    })}
                </ul>
                {/* navbar Icon toggle mobile menu */}
                <div className='n-menu-mobile' onClick={handleMenu}>
                    {openMenu ? <FaTimes /> : <FaBars />}
                </div>
                {/* Scroll up to home */}
                <a
                    className={`scroll-up ${
                        scrollUp && !openMenu ? "scroll-up-show" : ""
                    }`}
                    onClick={handleActiveMenuItem}
                    href='#home'>
                    <AiOutlineArrowUp />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
