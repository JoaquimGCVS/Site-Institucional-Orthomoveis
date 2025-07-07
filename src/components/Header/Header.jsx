import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import "./Header.css";
import logo from "../../assets/LogoSemFundo.png";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className="header">
            <div className="faixa-1">
                <div className="secao-logo">
                <img src={logo} alt="logo"></img>
                <p className="logo-desc">desde 1972</p>
                </div>
                <ul className="lista-de-links">
                    <li>
                    <a href="https://www.google.com.br/maps/place/Orthom%C3%B3veis+Colch%C3%B5es+Orthocrin/@-19.9312632,-43.9674782,17z/data=!3m1!4b1!4m6!3m5!1s0xa6970d79d84f7b:0x919a9536db3869cb!8m2!3d-19.9312632!4d-43.9649033!16s%2Fg%2F1wd3x8m0?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                        <FaMapMarkerAlt size={17}/>
                        Ver no Maps
                    </a>
                    </li>
                    <li>
                        <MdOutlinePhoneAndroid size={17}/>
                        (31) 3332-7066 / (31) 3334-2021
                    </li>
                </ul>
            </div>
            <div className="faixa-2">
                <nav>
                    <ul className="lista-de-nav">
                        <li><Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</Link></li>
                        <li><Link to="/colchoes">Colchões</Link></li>
                        <li><Link to="/travesseiros">Travesseiros</Link></li>
                        <li><Link to="/acessorios">Acessórios</Link></li>
                        <li><Link to="/box">Box</Link></li>
                        <li><Link to="/infantil">Infantil</Link></li>
                        <li><Link to="/pets">Pets</Link></li>
                    </ul>
                    <button
                        className="menu-mobile-btn"
                        onClick={() => setMenuOpen((open) => !open)}
                        aria-label="Abrir menu"
                    >
                        <FaBars size={28} />
                    </button>
                    <div className={`menu-mobile-dropdown${menuOpen ? " aberto" : ""}`}>
                        <Link to="/" onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}>Home</Link>
                        <Link to="/colchoes" onClick={() => setMenuOpen(false)}>Colchões</Link>
                        <Link to="/travesseiros" onClick={() => setMenuOpen(false)}>Travesseiros</Link>
                        <Link to="/acessorios" onClick={() => setMenuOpen(false)}>Acessórios</Link>
                        <Link to="/box" onClick={() => setMenuOpen(false)}>Box</Link>
                        <Link to="/infantil" onClick={() => setMenuOpen(false)}>Infantil</Link>
                        <Link to="/pets" onClick={() => setMenuOpen(false)}>Pets</Link>
                    </div>
                </nav>
            </div>
            
        </div>
    );
};

export default Header;