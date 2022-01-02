import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import { BsSearch } from "react-icons/bs";
import { FaUniversity } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const Menu = () => {
    return (
        <section className="nav-menu">
            <Link className="brand-link" to="/">
                <img src="/wordsmith-brand.png" alt="Wordsmith logo" />
            </Link>
            <nav>
            <Link className="nav-link" to="/dictionary"><BsSearch />Dictionary</Link>
            <Link className="nav-link" to="/learn"><FaUniversity />Learn</Link>
            <Link className="nav-link" to="/profile"><CgProfile />Profile</Link>
            </nav>
        </section>
    )
}

export default Menu;