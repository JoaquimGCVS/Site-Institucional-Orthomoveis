import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import "./Header.css";
import logo from "../../assets/LogoSemFundo.png";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { SiVerizon } from "react-icons/si";
import { MdVerified } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import { useState, useEffect } from "react";

const Header = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(window.scrollY);
    const [headerHeight, setHeaderHeight] = useState(6.2 * 16); 

    useEffect(() => {
        const updateHeaderHeight = () => {
            if (window.innerWidth <= 360) {
                setHeaderHeight(7.5 * 16); 
            } else if (window.innerWidth <= 630) {
                setHeaderHeight(7.9 * 16); 
            } else {
                setHeaderHeight(6.2 * 16); 
            }
        };
        updateHeaderHeight();
        window.addEventListener("resize", updateHeaderHeight);
        return () => window.removeEventListener("resize", updateHeaderHeight);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < headerHeight) {
                setShowHeader(true);
            } else if (window.scrollY < lastScrollY) {
                setShowHeader(true);
            } else if (window.scrollY > lastScrollY) {
                setShowHeader(false);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY, headerHeight]);

    return (
        <div className={`header ${showHeader ? "show" : "hide"}`}>
            <div className="faixa-1">
                <div className="secao-logo">
                    <Link to="/" ><img src={logo} alt="logo"></img></Link>
                    <p className="logo-desc">desde 1972</p>
                </div>
                <ul className="lista-de-links">
                    <div className="nav-1">
                    <li>
                    <a href="https://www.google.com.br/maps/place/Orthom%C3%B3veis+Colch%C3%B5es+Orthocrin/@-19.9312632,-43.9674782,17z/data=!3m1!4b1!4m6!3m5!1s0xa6970d79d84f7b:0x919a9536db3869cb!8m2!3d-19.9312632!4d-43.9649033!16s%2Fg%2F1wd3x8m0?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                        <FaMapMarkerAlt size={17}/>
                        <span className="texto-maps">Ver no Maps</span>
                    </a>
                    </li>
                    <li>
                        <MdOutlinePhoneAndroid size={17}/>
                        (31) 3332-7066 / (31) 3334-2021
                    </li>
                    </div>
                    <li>
                        <MdVerified size={17} />
                        Distribuidor Autorizado
                    </li>
                </ul>
            </div>
            <div className="faixa-2">
                <nav>
                    <ul className="lista-de-nav">
                        <li><Link to="/" >Home</Link></li>
                        <li><Link to="/colchoes">Colchões</Link></li>
                        <li><Link to="/travesseiros">Travesseiros</Link></li>
                        <li><Link to="/acessorios">Acessórios</Link></li>
                        <li><Link to="/box">Box</Link></li>
                        <li><Link to="/infantil">Infantil</Link></li>
                        <li><Link to="/pets">Pets</Link></li>
                    </ul>
                </nav>
            </div>
            {/* Botão de menu */}
            <button
                className={`menu-btn ${showHeader ? "show" : "hide"}`}
                onClick={() => setSidebarOpen(true)}
                aria-label="Abrir menu"
            >
                <MdOutlineMenu size={24} />
            </button>
            {/* Sidebar */}
            {sidebarOpen && (
                <div
                    className="sidebar-overlay"
                    onClick={() => setSidebarOpen(false)}
                    aria-label="Fechar menu"
                />
            )}
            <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
                <button
                    className="close-btn"
                    onClick={() => setSidebarOpen(false)}
                    aria-label="Fechar menu"
                >
                    <IoMdClose size={18} />
                </button>
                <nav>
                    <ul className="lista-de-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/colchoes" onClick={() => setSidebarOpen(false)}>Colchões</Link></li>
                        <li><Link to="/travesseiros" onClick={() => setSidebarOpen(false)}>Travesseiros</Link></li>
                        <li><Link to="/acessorios" onClick={() => setSidebarOpen(false)}>Acessórios</Link></li>
                        <li><Link to="/box" onClick={() => setSidebarOpen(false)}>Box</Link></li>
                        <li><Link to="/infantil" onClick={() => setSidebarOpen(false)}>Infantil</Link></li>
                        <li><Link to="/pets" onClick={() => setSidebarOpen(false)}>Pets</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;